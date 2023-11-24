import { getSongLyrics } from "./getSongLyrics";
import { getSongList } from "../search/[songName]/getSongList";
import { getSongInformation } from "./getSongInformation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Highlight from "./Highlight";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

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
          <Typography variant="h3">{songInformation.song.title}</Typography>
          <Typography variant="h4">By {songInformation.song.artist_names}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 10}}>
        <Typography
          sx={{ whiteSpace: "pre-wrap", mt: 5 }}
          variant="body1"
          gutterBottom
        >
          {songLyrics.replace(/<[^>]+(?!br)>/g, "").replace(/<br>/g, "\n")}
        </Typography>
        <Paper elevation={1} sx={{ p: 5, borderRadius: "32px" }}>
          <Typography variant="h4" sx={{pb: 2}}>Song Meaning Analysis:</Typography>
          <Button variant="contained" endIcon={<SendIcon />}>
            Generate Analysis
          </Button>
        </Paper>
      </Box>
      <Highlight />
    </Box>
  );
}
