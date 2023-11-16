"use client";
import TextField from "@mui/material/TextField";
import { useFormStatus } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Input(songName: any) {
  const { pending } = useFormStatus();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        name="songName"
        id="outlined-basic"
        label="Search for a song"
        variant="filled"
        sx={{width: "145%"}}
        defaultValue={songName.songName}
      />
      {pending && <CircularProgress sx={{mt: 2}} />}
    </Box>
  );
}
