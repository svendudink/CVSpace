import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/GraphqlContext";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const { personalInfo } = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: personalInfo.webColor1 }}
        position="static"
      >
        <Toolbar>
          <MenuItem
            key="Tech-Stack"
            onClick={() => {
              navigate("/skills");
            }}
          >
            <Typography
              style={{ marginLeft: "32vw", position: "fixed" }}
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Tech-Stack
            </Typography>
          </MenuItem>

          <MenuItem
            key="projects"
            onClick={() => {
              navigate("/projects");
            }}
          >
            <Typography
              style={{ marginLeft: "50vw", position: "fixed" }}
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Projects
            </Typography>
          </MenuItem>
          {/* <Typography
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
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
