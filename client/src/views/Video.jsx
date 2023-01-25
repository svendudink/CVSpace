import { useState, useEffect, useContext } from "react";
import imgArr from "../media/video";

import useSound from "use-sound";
import myAudio from "../media/myVideo/welcome.mp3";

import React from "react";
import { useLocation } from "react-router";
import useImagePreloader from "../hooks/preLoadImage";
import playBtn from "../media/play.png";
import pauseBtn from "../media/pause.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/GraphqlContext";
import snbImg from "../media/snb.png";
import ygpImg from "../media/ygp.png";
import caImg from "../media/caBerlin.png";

function Video(props) {
  const navigate = useNavigate();
  const { personalInfo } = useContext(UserContext);
  const location = useLocation();

  const [img, setImg] = useState();
  const [play, { pause, duration, sound }] = useSound(myAudio);
  const [frame, setFrame] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseButtonPosition, setpauseButtonPosition] = useState(23 * 1.37);

  const test = useImagePreloader(imgArr);

  const myLocation = location.pathname.split("/")[1];
  console.log(myLocation);

  const playingButton = () => {
    console.log("test");
    (function loop() {
      const frameNumber = Math.floor((sound.seek([]) / 44.4) * 1061);
      setFrame(frameNumber);
      props.setFrames(frameNumber);
      setImg(imgArr[Math.floor((sound.seek([]) / 44.4) * 1061)]);

      console.log(frameNumber);
      // Moving the pause button
      if (frameNumber > 23 && frameNumber < 79) {
        setpauseButtonPosition(frameNumber * 1.37);
      }
      // Clicking on skills button
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
        {myLocation === "recruiter" && (
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
        )}
        <div>{frame}</div>
        {frame >= 350 && frame <= 390 && (
          <img
            style={{
              width: "40vw",
              height: "auto",
              marginLeft: "55vw",
              marginTop: "10vh",
              position: "absolute",
            }}
            src={snbImg}
            alt="logo"
          />
        )}
        {frame >= 450 && frame <= 500 && (
          <img
            style={{
              width: "40vw",
              height: "auto",
              marginLeft: "55vw",
              marginTop: "10vh",
              position: "absolute",
            }}
            src={ygpImg}
            alt="logo"
          />
        )}
        {frame >= 630 && frame <= 680 && (
          <img
            style={{
              width: "40vw",
              height: "auto",
              marginLeft: "55vw",
              marginTop: "10vh",
              position: "absolute",
            }}
            src={caImg}
            alt="logo"
          />
        )}
        {frame >= 940 && frame <= 1100 && (
          <img
            style={{
              width: "20vw",
              height: "auto",
              marginLeft: "15vw",
              marginTop: "20vh",
              position: "absolute",
            }}
            src={personalInfo.companyLogo}
            alt="logo"
          />
        )}
      </div>
    </div>
  );
}

export default Video;
