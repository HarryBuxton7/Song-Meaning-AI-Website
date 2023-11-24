"use client";
import TextField from "@mui/material/TextField";
import { useFormStatus } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function Input(songName: {songName: string}) {
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
        autoComplete="off"
        sx={{width: "145%"}}
        defaultValue = {songName.songName}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{width: 40}}>
              <IconButton type="submit" aria-label="search for song">
                {pending ? <CircularProgress size={30}/> : <SearchIcon/>}
              </IconButton>
            </InputAdornment>
          ),
          sx: { borderRadius: 5 },
        }}
      />
    </Box>
  );
}
