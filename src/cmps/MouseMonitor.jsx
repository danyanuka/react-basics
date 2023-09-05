import React, { useEffect } from "react";
import { useState } from "react";

export default function MouseMonitor() {
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  function handleMouseMove(event) {
    const ePos = { x: event.clientX, y: event.clientY };
    console.log("set pos");
    setPos(ePos);
  }

  useEffect(() => {
    console.log("ín useEffect");
    if (isOn) {
      console.log("Added listener");
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      console.log("ín use effect returned func");
      if (isOn) {
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isOn]);

  return (
    <section
      style={{
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        marginBottom: "10px",
        width: "25%",
        position: "fixed",
        bottom: "0",
        right: "0",
      }}
    >
      <h1>Mouse Position :</h1>
      <span>
        X:{pos.x} , Y:{pos.y}
      </span>
      <br></br>
      <button onClick={() => setIsOn(false)}>Pause</button>
      <button
        onClick={() => {
          setIsOn(true);
        }}
      >
        Resume
      </button>
    </section>
  );
}
