import { useState, useEffect, useContext } from "react";
import imgArr from "../media/video";
import useSound from "use-sound";
import myAudio from "../media/myVideo/welcome.mp3";
import React from "react";
import { useLocation } from "react-router";
import { useImagePreloader } from "../hooks/preLoadImage";
import playBtn from "../media/clickToPlay.png";
import pauseBtn from "../media/pause.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/GraphqlContext";
import snbImg from "../media/snb.png";
import ygpImg from "../media/ygp.png";
import youngMe from "../media/youngMe.jpeg";
import caImg from "../media/caBerlin.png";
import { dev } from "../config/config";

function Video(props) {
  const {
    personalInfo,
    loggedIn,
    pauseButtonPosition,
    setpauseButtonPosition,
  } = useContext(UserContext);
  const [opacity, setOpacity] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [lengthOfInterval, setLengthOfInterval] = useState(12);

  const navigate = useNavigate();
  const location = useLocation();
  const [img, setImg] = useState();
  const [play, { pause, duration, sound }] = useSound(myAudio);
  const [frame, setFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const preLoad = useImagePreloader(imgArr).percentage;

  const myLocation = location.pathname.split("/")[1];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (percentage >= 99) {
      } else {
        setPercentage(percentage + 1);
        setLengthOfInterval(lengthOfInterval + percentage);
      }
    }, lengthOfInterval);

    return () => clearInterval(intervalId);
  }, [percentage]);

  const playingButton = () => {
    (function loop() {
      let frameNumber = Math.floor((sound.seek([]) / 44.4) * 1061);
      setFrame(frameNumber);
      props.setFrames(frameNumber);
      setImg(imgArr[Math.floor((sound.seek([]) / 44.4) * 1061)]);

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

      if (frameNumber >= 1054 && frameNumber <= 1056) {
        navigate("/thanks");
      }

      if (frameNumber >= 1057 && frameNumber <= 1062) {
        frameNumber = 0;

        setIsPlaying(false);
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
        {(myLocation === "recruiter" || (loggedIn && myLocation === "main")) &&
          (preLoad === "100.00" ? (
            <div
              style={{
                zIndex: "900",
                position: "absolute",
                marginTop: "5vw",
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
                <div>
                  <div
                    style={{
                      textAlign: "right",
                      marginTop: "10vw",
                      marginLeft: "-55vw",
                      position: "absolute",
                      zIndex: "900",
                      width: "60vw",
                      height: "auto - 30",
                      fontSize: "5vw",
                    }}
                  >
                    {personalInfo.recruiterName === personalInfo.companyName ||
                    personalInfo.recruiterName === ""
                      ? `Made for ${personalInfo.companyName}`
                      : `Welcome, ${personalInfo.recruiterName}`}
                  </div>
                  <img
                    style={{
                      cursor: "pointer",
                      zIndex: "900",
                      width: "30vw",
                      height: "auto",
                    }}
                    src={playBtn}
                    alt="logo"
                    onClick={playingButton}
                  />
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                fontWeight: "bold",
                zIndex: "900",
                position: "absolute",
                marginTop: "7vw",
                fontSize: "3vw",
                marginLeft: `35vw`,
              }}
            >
              <div>
                <p>{`${preLoad}% Loaded`}</p>
                <progress value={preLoad} max="100" />
              </div>
            </div>
          ))}
        {dev && (
          <div
            style={{
              zIndex: "1100",
              position: "absolute",
            }}
          >
            {frame}
            <button
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Delete
            </button>
          </div>
        )}
        {frame >= 200 && frame <= 350 && (
          <img
            style={{
              opacity,
              transition: "opacity 0.5s ease-in-out",
              zIndex: "900",
              width: "30vw",
              height: "auto",
              marginLeft: "55vw",
              marginTop: "10vh",
              position: "absolute",
            }}
            src={youngMe}
            onLoad={() => {
              setOpacity(1);
              setTimeout(() => {
                setOpacity(0);
              }, 4000);
            }}
            alt="logo"
          />
        )}
        {frame >= 350 && frame <= 450 && (
          <img
            style={{
              opacity,
              transition: "opacity 0.5s ease-in-out",
              zIndex: "900",
              width: "40vw",
              height: "auto",
              marginLeft: "55vw",
              marginTop: "10vh",
              position: "absolute",
            }}
            src={snbImg}
            onLoad={() => {
              setOpacity(1);
              setTimeout(() => {
                setOpacity(0);
              }, 2000);
            }}
            alt="logo"
          />
        )}
        {frame >= 450 && frame <= 550 && (
          <img
            style={{
              opacity,
              transition: "opacity 0.5s ease-in-out",
              zIndex: "900",
              width: "40vw",
              height: "auto",
              marginLeft: "55vw",
              marginTop: "10vh",
              position: "absolute",
            }}
            src={ygpImg}
            alt="logo"
            onLoad={() => {
              setOpacity(1);
              setTimeout(() => {
                setOpacity(0);
              }, 2000);
            }}
          />
        )}
        {frame >= 630 && frame <= 680 && (
          <img
            style={{
              opacity,
              transition: "opacity 0.5s ease-in-out",
              zIndex: "900",
              width: "40vw",
              height: "auto",
              marginLeft: "55vw",
              marginTop: "10vh",
              position: "absolute",
            }}
            src={caImg}
            alt="logo"
            onLoad={() => {
              setOpacity(1);
              setTimeout(() => {
                setOpacity(0);
              }, 2000);
            }}
          />
        )}
        {frame >= 923 && frame <= 1100 && (
          <img
            style={{
              opacity,
              transition: "opacity 0.5s ease-in-out",
              zIndex: "900",
              width: "20vw",
              height: "auto",
              marginLeft: "15vw",
              marginTop: "20vh",
              position: "absolute",
            }}
            src={personalInfo.companyLogo}
            alt="logo"
            onLoad={() => {
              setOpacity(1);
              setTimeout(() => {
                setOpacity(0);
              }, 4000);
            }}
          />
        )}
        {frame >= 1057 && frame <= 1062 && (
          <img
            style={{
              opacity,
              transition: "opacity 0.5s ease-in-out",
              zIndex: "900",
              width: "20vw",
              height: "auto",
              marginLeft: "15vw",
              marginTop: "20vh",
              position: "absolute",
            }}
            src={personalInfo.companyLogo}
            alt="logo"
            onLoad={() => {
              setOpacity(1);
              setTimeout(() => {
                setOpacity(0);
              }, 4000);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Video;
