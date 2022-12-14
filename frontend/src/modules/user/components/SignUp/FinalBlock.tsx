import React from "react";
import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { UserForm } from "./SignUp";

interface FinalBlockProps {
  handleSubmit: () => void;
  values: any;
  setValues: (values: UserForm) => void;
  loading: boolean;
}
export const FinalBlock = ({
  handleSubmit,
  values,
  setValues,
  loading,
}: FinalBlockProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      name: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        margin: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        id="name-input"
        name="name"
        label="Name"
        type="text"
        sx={{ width: 400 }}
        value={values.name}
        onChange={handleInputChange}
      />
      <LoadingButton
        variant="contained"
        onClick={handleSubmit}
        sx={{ marginTop: 12 }}
        loading={loading}
      >
        Create a profile
      </LoadingButton>
    </Box>
  );
};
