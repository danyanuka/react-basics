import React from "react";

export default function WatcherList({
  watchers,
  onRemoveWatcher,
  setSelectedWatcher,
}) {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {watchers.map((watcher) => (
        <li
          style={{
            listStyleType: "none",
            backgroundColor: "white",
            width: "150px",
            height: "200px",
            margin: "10px",
            padding: "10px",
            textAlign: "center",
          }}
          key={watcher.id}
        >
          {watcher.fullname}
          <hr></hr>
          <button onClick={() => onRemoveWatcher(watcher.id)}>X</button>
          {/* on Click set the Selected Watcher state */}
          <button onClick={() => setSelectedWatcher(watcher)}>Select</button>
        </li>
      ))}
    </ul>
  );
}
