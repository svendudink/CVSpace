import React from "react";
import { UserContext } from "../context/GraphqlContext";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div>
      <div
        style={{
          opacity,
          transition: `opacity 3s ease-in-out`,
          position: "fixed",
          marginTop: "15vw",
          marginLeft: "18vw",
          fontSize: "6vw",
          zIndex: 2100,
        }}
      >
        Thank You for watching
      </div>
      <div
        style={{
          opacity,
          transition: `opacity 5s ease-in-out`,
          position: "fixed",
          marginTop: "27vw",
          marginLeft: "29vw",
          fontSize: "3vw",
          zIndex: 2100,
        }}
      >
        Feel free to take a look around
      </div>
    </div>
  );
}

export default Thanks;
