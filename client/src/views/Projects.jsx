import { Button } from "@mui/material";
import Faq from "react-faq-component";
import "./Projects.css";

const data = {
  title: (
    <div
      style={{
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Project name:</div>
        <div>Project Link:</div>
        <div>Github Link:</div>
        <div>More info</div>
      </div>
    </div>
  ),
  rows: [
    {
      title: (
        <div
          style={{
            display: "grid",
            gridTemplateRows: "33.3% 33.3% 33.3%",
            justifyItems: "start",
          }}
        >
          <div
            style={{
              width: "11vw",
              gridColumnStart: 0,
              gridColumnEnd: 1,
            }}
          >
            Bottle Luminous
          </div>
          <div
            style={{
              width: "8vw",
              gridColumnStart: 1,
              gridColumnEnd: 2,
            }}
          >
            <Button
              onClick={() => {
                window.location.href =
                  "https://bottleluminousfront.herokuapp.com/";
              }}
            >
              Click
            </Button>
          </div>
          <div
            style={{
              width: "12vw",
              gridColumnStart: 2,
              gridColumnEnd: 3,
            }}
          >
            <Button
              onClick={() => {
                window.location.href =
                  "https://github.com/svendudink/bottleluminous";
              }}
            >
              GitHub
            </Button>
          </div>
        </div>
      ),
      content: (
        <div>
          <ul>
            <li>
              132 lightbulbs connected via Bluetooth Mesh through an app i
              reverse engineered
            </li>
            <li>
              Individual lights control, creation of patterns, and creation of
              complete event maps
            </li>
            <li>In constant development, used at 6 events since Juli 2022</li>
            <li>
              Live demo with 11 lights, each configurable, and viewable over
              live video stream
            </li>
          </ul>
          <b>Tech Stack used:</b>

          <ul>
            <li>MERN (Mongo Express React Node)</li>
            <li>TypeScript</li>
            <li>SocketIO</li>
            <li>Backend runs on home server (because of Livestream)</li>
            <li>Sqlite3</li>
            <li>Heroku</li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <div
          style={{
            display: "grid",
            gridTemplateRows: "33.3% 33.3% 33.3%",
            justifyItems: "start",
          }}
        >
          <div
            style={{
              width: "11vw",
              gridColumnStart: 0,
              gridColumnEnd: 1,
            }}
          >
            This Project (CVSpace)
          </div>
          <div
            style={{
              width: "8vw",
              gridColumnStart: 1,
              gridColumnEnd: 2,
            }}
          >
            <Button
              onClick={() => {
                window.location.href = "http://206.189.52.145:3000/";
              }}
            >
              Click
            </Button>
          </div>
          <div
            style={{
              width: "12vw",
              gridColumnStart: 2,
              gridColumnEnd: 3,
            }}
          >
            <Button
              onClick={() => {
                window.location.href = "https://github.com/svendudink/CVSpace";
              }}
            >
              GitHub
            </Button>
          </div>
        </div>
      ),
      content: (
        <div>
          <ul>
            <li>
              The introduction video is not in video format,
              <br /> as there are no known compressions with reasonable size for
              web with alpha channel, i used 1060 seperate gif files,
              <br /> controlled by the position of an audio mp3
            </li>
            <li>
              Video is edited through Adobe after effects, this was my very
              first experience with video editing
            </li>
            <li>
              when i create a cv through this page, the name is being searched
              through google, which extracts the company logo, <br /> followed
              by extracting the most used color in your logo, which is used for
              the cv and to style this website
            </li>
            <li>
              Every CV is custom generated with PDFKit and colors and logo are
              tailored to the company
            </li>
          </ul>
          <b>Tech Stack used:</b>

          <ul>
            <li>MERN (Mongo Express React Node)</li>
            <li>PDFKit</li>
            <li>TypeScript (for Backend)</li>
            <li>Docker</li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <div
          style={{
            display: "grid",
            gridTemplateRows: "33.3% 33.3% 33.3%",
            justifyItems: "start",
          }}
        >
          <div
            style={{
              width: "11vw",
              gridColumnStart: 0,
              gridColumnEnd: 1,
            }}
          >
            Awesome GmbH
          </div>
          <div
            style={{
              width: "8vw",
              gridColumnStart: 1,
              gridColumnEnd: 2,
            }}
          >
            <Button
              onClick={() => {
                window.location.href = "http://164.90.214.189:3000/";
              }}
            >
              Click
            </Button>
          </div>
          <div
            style={{
              width: "12vw",
              gridColumnStart: 2,
              gridColumnEnd: 3,
            }}
          >
            <Button
              onClick={() => {
                window.location.href =
                  "https://github.com/svendudink/AwesomeGmbH";
              }}
            >
              GitHub
            </Button>
          </div>
        </div>
      ),
      content: (
        <div>
          <ul>
            <li>Employee management Application,</li>
          </ul>
          <b>Tech Stack used:</b>

          <ul>
            <li>MERN (Mongo Express React Node)</li>
            <li>Docker</li>
            <li>Yarn Workspaces</li>
            <li>Monorepo</li>
          </ul>
        </div>
      ),
    },
  ],
};

const styles = {
  titleTextColor: "blue",
  rowTitleColor: "blue",
  rowContentColor: "black",
  arrowColor: "red",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

function Projects() {
  return (
    <div
      style={{ paddingTop: "5vw", paddingLeft: "15vw", paddingRight: "15vw" }}
    >
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

export default Projects;
