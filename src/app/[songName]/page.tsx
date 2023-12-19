import { getSongLyrics } from "./getSongLyrics";
import { getSongInformation } from "./getSongInformation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Highlight from "./Highlight";
import Image from "next/image";
import SongAnalysisPaper from "./songAnalysisPaper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{width: "80%"}}
      >
        <Grid item xs={4} sx={{display: "flex", justifyContent:"flex-end"}}>
          <Image
            src={songImageUrl}
            alt={songInformation.song.title}
            width={300}
            height={300}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">{songInformation.song.title}</Typography>
          <Typography variant="h4">
            By {songInformation.song.artist_names}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography
            sx={{ whiteSpace: "pre-wrap", mt: 5 }}
            variant="body1"
            gutterBottom
          >
            {songLyrics.replace(/<[^>]+(?!br)>/g, "").replace(/<br>/g, "\n")}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <SongAnalysisPaper
            lyrics={songLyrics
              .replace(/<[^>]+(?!br)>/g, "")
              .replace(/<br>/g, "\n")}
          />
        </Grid>
      </Grid>
      <Highlight />
    </Container>
  );
}
