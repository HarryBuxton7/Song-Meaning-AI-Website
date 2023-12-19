"use client";
import { useFormStatus } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";

export default function Input(lyrics: { lyrics: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      <input type="hidden" name="lyrics" value={lyrics.lyrics} />
      <Button
        sx={{ maxWidth: "100%" }}
        type="submit"
        variant="contained"
        endIcon={pending ? <CircularProgress size={30} /> : <SendIcon />}
      >
        Generate Analysis
      </Button>
    </>
  );
}
