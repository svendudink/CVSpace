import { useState, useEffect } from "react";
import imgArr from "../media/video";
import ButtonAppBar from "../components/ButtonAppBar";
import useSound from "use-sound";
import myAudio from "../media/myVideo/welcome.mp3";
import { Button } from "@material-ui/core";
import React from "react";

import useImagePreloader from "../hooks/preLoadImage";
import playBtn from "../media/play.png";
import pauseBtn from "../media/pause.png";
import {
  Router,
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Video() {
  const navigate = useNavigate();

  const [img, setImg] = useState<any>();
  const [play, { pause, duration, sound }] = useSound(myAudio);
  const [frame, setFrame] = useState<any>(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseButtonPosition, setpauseButtonPosition] = useState(23 * 1.37);

  const test = useImagePreloader(imgArr);

  const playingButton = () => {
    console.log("test");
    (function loop() {
      const frameNumber = Math.floor((sound.seek([]) / 44.4) * 1061);
      setFrame(frameNumber);

      setImg(imgArr[Math.floor((sound.seek([]) / 44.4) * 1061)]);

      console.log(frameNumber);
      // Moving the pause button
      if (frameNumber > 23 && frameNumber < 79) {
        setpauseButtonPosition(frameNumber * 1.37);
      }
      if (frameNumber > 850 && frameNumber < 860) {
        navigate("/skills");
      }

      setTimeout(
        () => {
          loop();
        },
        1000 / 23,
        976
      );
    })();

    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <div style={{ zIndex: "1000", position: "absolute" }}>
        <img style={{ width: "100vw", height: "auto" }} src={img} alt="logo" />
      </div>

      <div>
        <div
          style={{
            position: "absolute",
            marginTop: "5vh",
            marginLeft: `${82 - pauseButtonPosition}vw`,
          }}
        >
          {isPlaying ? (
            <img
              style={{ width: "30vw", height: "auto" }}
              src={pauseBtn}
              alt="logo"
            />
          ) : (
            <img
              style={{ width: "30vw", height: "auto" }}
              src={playBtn}
              alt="logo"
              onClick={playingButton}
            />
          )}
        </div>
        <div>{frame}</div>
      </div>
    </div>
  );
}

export default Video;
