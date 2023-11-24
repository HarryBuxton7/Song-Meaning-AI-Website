import { getSongLyrics } from "./getSongLyrics";
import { getSongList } from "../search/[songName]/getSongList";
import { getSongInformation } from "./getSongInformation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Highlight from "./Highlight";
import Image from "next/image";
import Paper from "@mui/material/Paper";

export default async function SongPage({
  params,
  searchParams,
}: {
  params: { songName: string };
  searchParams: { [key: string]: string };
}) {
  const songLyrics = await getSongLyrics(searchParams.id);
  const songInformation = await getSongInformation(searchParams.id);
  const songImageUrl = songInformation.song.song_art_image_thumbnail_url;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", mt: 5 }}>
        <Image
          src={songImageUrl}
          alt={songInformation.song.title}
          width={300}
          height={300}
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          <Typography variant="h3"></Typography>
          <Typography variant="h4">By Mazzy Star</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography
          sx={{ whiteSpace: "pre-wrap", mt: 5 }}
          variant="body1"
          gutterBottom
        >
          {songLyrics.replace(/<[^>]+(?!br)>/g, "").replace(/<br>/g, "\n")}
        </Typography>
        <Paper elevation={1}>
          <Typography variant="h3">Song Meaning:</Typography>
        </Paper>
      </Box>
      <Highlight />
    </Box>
  );
}
