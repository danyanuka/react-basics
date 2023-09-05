import React from "react";
import { useState, useEffect, useRef } from "react";
import { utilService } from "../services/util.service.js";

export default function Countdown({ startFrom, onDone }) {
  const [counter, setCounter] = useState(startFrom);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => {
        if (prev === 0) {
          clearInterval(intervalId);
          onDone();
          return prev;
        }

        return prev - 1;
      });
    }, 1000);
    return () => {};
  }, []);

  const dynClass = counter > 5 ? "blue" : "red";

  return (
    <div
      style={{
        width: "50%",
        backgroundColor: "#B0E0E6",
        display: "flex", // Apply flex display
        flexDirection: "column", // Stack items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        borderWidth: "15px",
        borderColor: "blue",
        borderStyle: "double",
      }}
    >
      <h2 style={{ color: dynClass }}>{counter}</h2>
    </div>
  );
}
