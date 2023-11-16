import { getSongLyrics } from "./getSongLyrics";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Highlight from "./Highlight";

export default async function SongPage() {
  const songLyrics = await getSongLyrics();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ whiteSpace: "pre-wrap", mt: 15 }} variant="body1" gutterBottom>
        {songLyrics.replace(/<[^>]+(?!br)>/g, "").replace(/<br>/g, "\n")}
      </Typography>
      <Highlight />
    </Box>
  );
}
