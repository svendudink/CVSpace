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
import { useState } from "react";

const styles = {
  customizeToolbar: {
    minHeight: 36,
  },
};

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const { personalInfo } = useContext(UserContext);

  const [incdec, setIncDec] = useState("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          zIndex: 950,
          justifyContent: "center",
          height: "3vw",
          backgroundColor: personalInfo.webColor1,
        }}
      >
        <Toolbar>
          <img
            style={{
              position: "fixed",
              marginLeft: "0vw",
              marginTop: "0.1vw",

              height: "2.8vw",
            }}
            src={personalInfo.companyLogo}
            alt="logo"
          />
          <MenuItem
            key="faq"
            onClick={() => {
              navigate("/faq");
            }}
          >
            <Typography
              style={{
                marginLeft: "14vw",
                position: "fixed",
                lineHeight: "0.6",
              }}
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ fontSize: "1.5vw" }}
            >
              Faq
            </Typography>
          </MenuItem>
          <MenuItem
            key="Tech-Stack"
            onClick={() => {
              navigate("/skills");
            }}
          >
            <Typography
              style={{
                marginLeft: "28vw",
                position: "fixed",
                lineHeight: "0.6",
              }}
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ fontSize: "1.5vw" }}
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
              style={{
                marginLeft: "42vw",
                position: "fixed",
                lineHeight: "0.6",
              }}
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ fontSize: "1.5vw" }}
            >
              Projects
            </Typography>
          </MenuItem>
          <MenuItem
            key="contact"
            onClick={() => {
              navigate("/contact");
            }}
          >
            <Typography
              style={{
                marginLeft: "56vw",
                position: "fixed",
                lineHeight: "0.6",
              }}
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ fontSize: "1.5vw" }}
            >
              Contact
            </Typography>
          </MenuItem>
          <MenuItem
            key="main"
            onClick={() => {
              navigate("/main");
            }}
          >
            <Typography
              style={{
                marginLeft: "70vw",
                position: "fixed",
                lineHeight: "0.6",
              }}
              textAlign="center"
              variant="h6"
              component="div"
              sx={{ fontSize: "1.5vw" }}
            >
              Main
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
