import { Card, Chip, Typography } from "@mui/material";
import React from "react";
import { green } from "@mui/material/colors";
import { ButtonsRentPayment } from "../../modules/dashboard/components/Tenant/ButtonsRentPayment";
import { LeaseStatus, PaymentStatus } from "../../repositories/TrustAPI";
import { formatDuration, intervalToDuration, format } from "date-fns";
import { tokens } from "../../const";
import { ethers, FixedNumber } from "ethers";

interface SmallTenantCardProps {
  index: number;
  leaseId: string;
  rentId: string;
  // rentInfos: string | number,
  amount: string;
  currencyPair: string;
  paymentDate: string;
  validationDate: string;
  totalNumberOfRents: string;
  paymentToken: string;
  // period: string,
  status: string;
  withoutIssues: boolean;
  startDate: string;
  rentPaymentInterval: string;
  rentPaymentLimitDate: string;
  rentPaymentDate: string;
  leaseStatus: LeaseStatus;
  isConnectedAsOwner: boolean;
  handleClick: () => void;
}

export const SmallTenantRentCard = ({
  index,
  leaseId,
  rentId,
  // rentInfos,
  // period,
  amount,
  currencyPair,
  paymentDate,
  validationDate,
  totalNumberOfRents,
  paymentToken,
  status,
  withoutIssues,
  startDate,
  rentPaymentInterval,
  handleClick,
  rentPaymentLimitDate,
  rentPaymentDate,
  leaseStatus,
  isConnectedAsOwner,
}: SmallTenantCardProps) => {
  const renderPeriod = (
    startDate: number | string,
    rentPaymentInterval: string,
    totalNumberOfRents: string
  ) => {
    const debutDate = format(
      new Date(
        (Number(startDate) + index * Number(rentPaymentInterval)) * 1000
      ),
      "dd/MM/yyyy"
    );
    const endDate = format(
      new Date(
        (Number(startDate) +
          index * Number(rentPaymentInterval) +
          Number(rentPaymentInterval)) *
          1000
      ),
      "dd/MM/yyyy"
    );
    // console.log("endDate : ",endDate);

    return `${debutDate} - ${endDate}`;
  };

  //TODO bug here on end date - En vrai aps obligé de render comme ça, je peux juste display comme je veux
  const renderRentInfos = (
    rentAmount: string,
    currencyPair: string,
    rentPaymentInterval: string,
    totalNumberOfRents: string,
    paymentToken: string
  ): string => {
    let displayCurrency = "";
    if (currencyPair === "CRYPTO") {
      const token = tokens.find((token) => token.address === paymentToken);
      displayCurrency = token?.name || "";
    } else {
      displayCurrency = currencyPair.substring(0, currencyPair.indexOf("-"));
      displayCurrency = FixedNumber.from(
        currencyPair.substring(0, currencyPair.indexOf("-"))
      )
        .round(2)
        .toString();
      const paymentCurrency = tokens.find(
        (token) => token.address === paymentToken
      );
    }
    const parsedRentAmount = ethers.utils.formatUnits(rentAmount, 18);
    console.log("rentPaymentInterval", rentPaymentInterval);
    let convertInterval = "0";
    if (rentPaymentInterval) {
      convertInterval = formatDuration(
        intervalToDuration({
          start: 0,
          end: Number(rentPaymentInterval) * 1000,
        })
      ); // 30days
      console.log("convertInterval", convertInterval);
      console.log("displayCurrency", displayCurrency);
    }
    return `${parsedRentAmount} ${displayCurrency} / ${convertInterval}`;
  };

  return (
    <Card
      id={rentId}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        padding: "20px",
        minWidth: "290px",
        minHeight: "200px",
        justifyContent: "space-around",
        alignItems: "center",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
        },
      }}
      onClick={handleClick}
    >
      <Chip label={`Rent ${index}`} />
      <Typography variant="h6" sx={{ fontWeight: "light", margin: "10px 0px" }}>
        {renderPeriod(startDate, rentPaymentInterval, totalNumberOfRents)}
      </Typography>
      {/*<Typography variant="h5">{renderRentInfos(*/}
      {/*  amount,*/}
      {/*  currencyPair,*/}
      {/*  renderPeriod(startDate, rentPaymentInterval, totalNumberOfRents),*/}
      {/*  totalNumberOfRents,*/}
      {/*  paymentToken*/}
      {/*)}</Typography>*/}
      <ButtonsRentPayment
        rentId={rentId}
        leaseId={leaseId}
        amount={amount}
        rentPaymentDate={rentPaymentDate}
        paymentDate={paymentDate}
        rentPaymentLimitDate={rentPaymentLimitDate}
        validationDate={validationDate}
        currencyPair={currencyPair}
        withoutIssues={withoutIssues}
        status={status}
        paymentToken={paymentToken}
        leaseStatus={leaseStatus}
        isConnectedAsOwner={isConnectedAsOwner}
      />
    </Card>
  );
};
