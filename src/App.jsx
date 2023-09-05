import { useState } from "react";
import img from "./assets/react.svg";
import AnimalList from "./cmps/AnimalList";
import Countdown from "./cmps/Countdown";
import MouseMonitor from "./cmps/MouseMonitor";
import Seasons from "./cmps/Seasons";
import Watcher from "./cmps/Watcher";

export function App() {
  const animalInfos = [
    { type: "Malayan Tiger", count: 787 },
    { type: "Mountain Gorilla", count: 212 },
    { type: "Fin Whale", count: 28 },
  ];

  function getImgUrl(url) {
    return new URL(url, import.meta.url).href;
  }

  return (
    <section className="main-app">
      <header className="container">
        <h1>HomeWork</h1>
      </header>

      <main className="container">
        <section>
          <br></br>
          <h2>Challenge 1</h2>
          <AnimalList animals={animalInfos} />
          <br></br>
          <h2>Challenge 2</h2>
          <Seasons />
          <br></br>
          <h2>Challenge 3</h2>
          <Countdown
            startFrom={10}
            onDone={() => {
              console.log("Done!");
            }}
          />
          <br></br>
          <h2>Challenge 4</h2>
          <Watcher />
          <br></br>
          <MouseMonitor />
        </section>
      </main>
    </section>
  );
}
