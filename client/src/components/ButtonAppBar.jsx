import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ paddingLeft: "32vw", position: "fixed" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Tech-stack
          </Typography>
          <Typography
            style={{ paddingLeft: "50vw", position: "fixed" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Projects
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
