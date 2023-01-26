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
  const [loadReady, setLoadReady] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseButtonPosition, setpauseButtonPosition] = useState(23 * 1.37);

  const preLoad = useImagePreloader(imgArr).imagesPreloaded;

  console.log(preLoad);

  const myLocation = location.pathname.split("/")[1];
  console.log(myLocation);

  const playingButton = () => {
    console.log("test");
    (function loop() {
      let frameNumber = Math.floor((sound.seek([]) / 44.4) * 1061);
      setFrame(frameNumber);
      props.setFrames(frameNumber);
      setImg(imgArr[Math.floor((sound.seek([]) / 44.4) * 1061)]);

      console.log(frameNumber);
      // Moving the pause button
      if (frameNumber > 23 && frameNumber < 79) {
        setpauseButtonPosition(frameNumber * 1.37);
      }
      // Clicking on skills button

      if (frameNumber > 715 && frameNumber < 720) {
        navigate("/projects");
      }

      if (frameNumber > 850 && frameNumber < 860) {
        navigate("/skills");
      }

      if (frameNumber > 930 && frameNumber < 935) {
        navigate("/");
      }

      if (frameNumber >= 1061) {
        frameNumber = 0;
        setFrame(0);
      } else {
        setTimeout(
          () => {
            loop();
          },
          1000 / 24,
          976
        );
      }
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
      {frame === 0 ? (
        <></>
      ) : (
        <div style={{ zIndex: "1000", position: "absolute" }}>
          <img
            style={{ width: "100vw", height: "auto" }}
            src={img}
            alt="logo"
          />
        </div>
      )}

      <div>
        {myLocation === "recruiter" &&
          (preLoad ? (
            <div
              style={{
                zIndex: "900",
                position: "absolute",
                marginTop: "5vh",
                marginLeft: `${82 - pauseButtonPosition}vw`,
              }}
            >
              {isPlaying ? (
                <img
                  style={{ zIndex: "900", width: "30vw", height: "auto" }}
                  src={pauseBtn}
                  alt="logo"
                />
              ) : (
                <img
                  style={{ zIndex: "900", width: "30vw", height: "auto" }}
                  src={playBtn}
                  alt="logo"
                  onClick={playingButton}
                />
              )}
            </div>
          ) : (
            <div
              style={{
                zIndex: "900",
                position: "absolute",
                marginTop: "50vh",
                marginLeft: `${82 - pauseButtonPosition}vw`,
              }}
            >
              LOADING
            </div>
          ))}
        <div>{frame}</div>
        {frame >= 350 && frame <= 390 && (
          <img
            style={{
              zIndex: "900",
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
              zIndex: "900",
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
              zIndex: "900",
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
              zIndex: "900",
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
