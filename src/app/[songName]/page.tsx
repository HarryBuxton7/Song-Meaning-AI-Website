import { getSongLyrics } from "./getSongLyrics";
import { getSongInformation } from "./getSongInformation";
import Typography from "@mui/material/Typography";
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
      maxWidth="xl"
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
        spacing={5}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ width: "85%" }}
      >
        <Grid item md={5} xs = {12} sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={songImageUrl}
            alt={songInformation.song.title}
            width={275}
            height={275}
          />
        </Grid>
        <Grid item md={7} xs={12}  sx={{ display: "flex", flexDirection: "column", alignItems: {md: "flex-start", xs: "center"} }}>
          <Typography sx={{ typography: { md: 'h3', xs: 'h4' } }}>{songInformation.song.title}</Typography>
          <Typography sx={{ typography: { md: 'h5', xs: 'h6' } }}>
            By {songInformation.song.artist_names}
          </Typography>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            sx={{ whiteSpace: "pre-wrap", mt: 5 }}
            variant="body1"
            gutterBottom

          >
            {songLyrics.replace(/<[^>]+(?!br)>/g, "").replace(/<br>/g, "\n")}
          </Typography>
        </Grid>
        <Grid item md={6.5} xs={12} sx={{mt: 5}}>
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
