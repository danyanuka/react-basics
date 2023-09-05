import React, { useEffect, useState } from "react";
import { utilService } from "../services/util.service.js";

export default function Seasons() {
  const [isDark, setIsDark] = useState(false);
  const [date, setDate] = useState(new Date());

  const month = date.getMonth() + 1; //return 0-11
  const dynClass = isDark ? "blue" : "aqua";

  function getImgUrl(url) {
    return new URL(url, import.meta.url).href;
  }

  function getSeason(month) {
    if (month >= 9 || month === 0 || month === 1) {
      return "winter";
    }
    if (month >= 6) {
      return "summer";
    }
    if (month >= 3) {
      return "spring";
    } else {
      return "autumn";
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate((prev) => new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      onClick={() => {
        setIsDark(!isDark);
      }}
      style={{
        width: "50%",
        backgroundColor: dynClass,
        display: "flex", // Apply flex display
        flexDirection: "column", // Stack items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
      }}
      className="seasons"
    >
      <h2 style={{ color: "white" }}>
        {utilService.getMonthName(date)}(
        <span style={{ color: "white" }}>{getSeason(month)}</span>)<br></br>
      </h2>
      <img src={getImgUrl(`../assets/img/${getSeason(month)}.png`)}></img>
      <h1 style={{ color: "white" }}>{utilService.getDayName(date)}</h1>
      <div>
        <h1>
          Clock:
          {date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
            second: "numeric",
          })}
        </h1>
      </div>
    </section>
  );
}
