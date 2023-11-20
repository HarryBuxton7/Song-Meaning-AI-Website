import { getSongLyrics } from "./getSongLyrics";
import { getSongList } from "../search/[songName]/getSongList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Highlight from "./Highlight";

export default async function SongPage({
  params,
}: {
  params: { songName: string };
}) {
  function splitLastOccurrence(str: string, substring: string) {
    const lastIndex = str.lastIndexOf(substring);
    const before = str.slice(0, lastIndex);
    const after = str.slice(lastIndex + 1);
    return [before, after];
  }

  const [songName, songId] = splitLastOccurrence(params.songName, "-");

  const songLyrics = await getSongLyrics(songId);
  const songList = await getSongList(songName);
  const song = songList.hits.find((song: any) => song.result.id.toString() === songId);
  const songUrl = song.result.song_art_image_thumbnail_url;
  
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        sx={{ whiteSpace: "pre-wrap", mt: 15 }}
        variant="body1"
        gutterBottom
      >
        {songLyrics.replace(/<[^>]+(?!br)>/g, "").replace(/<br>/g, "\n")}
      </Typography>
      <Highlight />
    </Box>
  );
}
