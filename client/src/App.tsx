import { useState, useEffect } from "react";
import imgArr from "./media/video";
import ButtonAppBar from "./components/ButtonAppBar";
import useSound from "use-sound";
import myAudio from "./media/myVideo/welcome.mp3";
import { Button } from "@material-ui/core";
import React from "react";
import { usePreloadImages } from "./hooks/usePreloadImages";
import "./App.css";
import useImagePreloader from "./hooks/preLoadImage";
import playBtn from "./media/pause.png";

function App() {
  const [img, setImg] = useState<any>();
  const [play, { pause, duration, sound }] = useSound(myAudio);

  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseButtonPosition, setpauseButtonPosition] = useState(50);

  const test = useImagePreloader(imgArr);

  const playingButton = () => {
    console.log("test");
    (function loop() {
      const frameNumber = Math.floor((sound.seek([]) / 44.4) * 1061);

      setImg(imgArr[Math.floor((sound.seek([]) / 44.4) * 1061)]);

      console.log(frameNumber);
      // Moving the pause button
      if (frameNumber > 34 && frameNumber < 79) {
        setpauseButtonPosition(frameNumber);
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
      <ButtonAppBar />
      <Button onClick={playingButton}>Playing</Button>
      <div style={{ zIndex: "1000", position: "absolute" }}>
        <img style={{ width: "100vw", height: "auto" }} src={img} alt="logo" />
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            marginTop: "30vh",
            marginLeft: `${84 - pauseButtonPosition}vw`,
          }}
        >
          <img
            style={{ width: "10vw", height: "auto" }}
            src={playBtn}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
