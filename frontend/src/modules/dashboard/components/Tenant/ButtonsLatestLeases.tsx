import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button} from "@mui/material";
import {LeaseStatus, UserType} from "../../../../repositories/TrustAPI/types";
import {cancelLease, declineLease, validateLease,} from "../../../../contracts/utils";
import {useUser} from "../../../../contexts/UserContext";
import {LeaseReviewPopover} from "./LeaseReviewPopover";

interface ButtonsProps {
  leaseId: string;
  leaseStatus: LeaseStatus;
  cancellationRequestedByOwner: boolean;
  cancellationRequestedByTenant: boolean;
  tenantReviewUri: string;
  ownerReviewUri: string;
  userType: UserType;
}
export const ButtonsLatestLeases = ({ leaseId, leaseStatus, tenantReviewUri, ownerReviewUri, cancellationRequestedByTenant, cancellationRequestedByOwner, userType  }: ButtonsProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const navigate = useNavigate();
  const { signer } = useUser();

  const handleCancel = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (signer) await cancelLease(signer, leaseId);
    navigate(0);
  };

  const handleConfirm = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (signer) await validateLease(signer, leaseId);
    navigate(0);
  };

  const handleDecline = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (signer) await declineLease(signer, leaseId);
    navigate(0);
  };

  const handleClickReview = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  function renderCancelButtonText() {
    if (userType === UserType.TENANT && cancellationRequestedByTenant || userType === UserType.OWNER && cancellationRequestedByOwner) {
      return 'Cancellation requested...';
    } else {
      return 'Request Cancellation';}
  }

  switch (leaseStatus) {
    case "PENDING":
      return (
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            width: "100%",
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleDecline}
          >
            Decline
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="success"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Box>
      );
    case "ACTIVE":
      return (
        <Box sx={{display: "flex", gap: "12px", width: "100%"}}>
          <Button fullWidth color="success" sx={{cursor: "auto"}}>
            ACTIVE
          </Button>
          <Button
            fullWidth
            variant="outlined"
            // color="info"
            color="error"
            onClick={handleCancel}
            disabled={userType === UserType.TENANT && cancellationRequestedByTenant || userType === UserType.OWNER && cancellationRequestedByOwner}
          >
            {renderCancelButtonText()}
          </Button>
        </Box>
      );
    case "ENDED":
      return (
        <Box sx={{ display: "flex", gap: "12px", width: "100%" }}>

          <Button
            fullWidth
            variant="outlined"
            color="info"
            disabled={(!!tenantReviewUri && userType == UserType.TENANT ) || (!!ownerReviewUri && userType == UserType.OWNER)}
            onClick={handleClickReview}
          >
            Review
          </Button>

          <LeaseReviewPopover
            leaseId={leaseId}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
        </Box>
      );
    case "CANCELLED":
      return (
        <Button variant="outlined" disabled fullWidth color="primary">
          CANCELLED
        </Button>
      );
    default:
      return <></>;
  }
};
