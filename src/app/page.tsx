import * as React from "react";
import Container from "@mui/material/Container";
import Input from "../app/Input";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { searchSong } from "../actions/searchSong";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "24vh" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Song Lyric Meanings
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          Search for any song
        </Typography>
        <form action={searchSong}>
          <Input />
        </form>
      </Box>
    </Container>
  );
}
