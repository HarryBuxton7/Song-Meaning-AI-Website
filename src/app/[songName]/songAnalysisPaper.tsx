"use client";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useFormState } from "react-dom";
import { generateAnalysis } from "./getAnalysis";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormStatus } from "react-dom";
import GenerateButton from "./generateButton";

export default function SongAnalysisPaper(lyrics: { lyrics: string }) {

  const [state, formAction] = useFormState(generateAnalysis, lyrics.lyrics);

  
  return (
    <>
      <Paper elevation={1} sx={{ p: 4, borderRadius: "32px", maxWidth: "100%" }}>
        <Typography variant="h4" sx={{ pb: 2 }}>
          Song Meaning Analysis:
        </Typography>
        <form action={formAction}>
          <input type="hidden" name="lyrics" value={lyrics.lyrics} />
          <GenerateButton />
        </form>
        <br></br>
        <Typography
            sx={{ whiteSpace: "pre-wrap"}}
            variant="body1"
            gutterBottom
          >
        {state !== lyrics.lyrics && state}
          </Typography>
      </Paper>
    </>
  );
}
