import React from "react";
import { useState, useEffect, useRef } from "react";
import { watcherService } from "../services/watcher.service.js";
import WatcherList from "./WatcherList.jsx";
import WatcherModal from "./WatcherModal.jsx";

export default function Watcher() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  // gets all watchers on comp Mount
  useEffect(() => {
    async function getData() {
      const res = await watcherService.getWatchers();
      setWatchers(res);
    }
    getData();
  }, []);

  // Add a new Watcher on click
  async function onAddWatcher() {
    const fullname = prompt("Your Full-Name?");
    const movies = prompt(
      "Movies? (Seperate By comma if you have more then One)"
    );
    if (movies !== null) {
      const moviesArray = movies.split(",");
      const watcher = await watcherService.add(fullname, moviesArray);
      setWatchers((prev) => [...prev, watcher]);
    }
  }

  // Remove a Watcher from the list and View
  async function onRemoveWatcher(watcherId) {
    await watcherService.removeWatcher(watcherId);

    setWatchers((prev) => prev.filter((watcher) => watcher.id !== watcherId));
    console.log("Hello");
  }

  async function onRenderModal(watcherId) {}

  return (
    <section
      style={{
        width: "50%",
        position: "relative",
        background: "#FFA07A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Conditionaly Rendering the WatcherModal if Null Not rendered */}
      {selectedWatcher && (
        <WatcherModal
          selectedWatcher={selectedWatcher}
          setSelectedWatcher={setSelectedWatcher}
        />
      )}
      <h2 className="title">Watchers App</h2>
      <button onClick={onAddWatcher}>Add Watcher</button>
      <section className="list-container">
        <WatcherList
          watchers={watchers}
          onRemoveWatcher={onRemoveWatcher}
          setSelectedWatcher={setSelectedWatcher}
        />
      </section>
    </section>
  );
}
