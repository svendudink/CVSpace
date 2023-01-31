import React from "react";

function Contact() {
  return (
    <div style={{ marginTop: "4vw", padding: "40px" }}>
      <div
        style={{
          margin: "auto",
          width: "15vw",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        Contact:
        <br /> Phone Number: +491738346578 <br />
        Email: Sven@dudink.net
        <br />
        github:{" "}
        <>
          <a href=" https://github.com/svendudink/">Click here</a>{" "}
        </>
      </div>
    </div>
  );
}

export default Contact;
