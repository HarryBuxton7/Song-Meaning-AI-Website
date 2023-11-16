import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mr: 4 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div">
            Profile
          </Typography>
          <Box sx={{ flexGrow: 1 }} /> <Button color="inherit">Login</Button>
          <Button variant="outlined" color="inherit">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
