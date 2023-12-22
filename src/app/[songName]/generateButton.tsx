import { Button, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormStatus } from "react-dom";

export default function GenerateButton(){
    const { pending } = useFormStatus();

    return(
        <Button
        sx={{ maxWidth: "100%", maxHeight: "100%" }}
        type="submit"
        variant="contained"
        endIcon={pending ? <CircularProgress sx={{color: "black"}} size={20}/> : <SendIcon sx={{width: "100%"}}/>}
      >
        Generate Analysis
      </Button>
    )
}