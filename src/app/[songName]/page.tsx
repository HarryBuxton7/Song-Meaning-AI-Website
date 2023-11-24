import { getSongLyrics } from "./getSongLyrics";
import { getSongList } from "../search/[songName]/getSongList";
import { getSongInformation } from "./getSongInformation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Highlight from "./Highlight";
import Image from "next/image";

export default async function SongPage({
  params,
  searchParams,
}: {
  params: { songName: string };
  searchParams: { [key: string]: string }
}) {


  const songLyrics = await getSongLyrics(searchParams.id);
  const songInformation = await getSongInformation(searchParams.id);
  console.log(params)
  console.log(searchParams)
  const songImageUrl = songInformation.song.song_art_image_thumbnail_url;



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
      <Image src={songImageUrl} alt={songInformation.song.title} width={90} height={90}/>
      <Highlight />
    </Box>
  );
}
