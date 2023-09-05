export default function WatcherModal({ selectedWatcher, setSelectedWatcher }) {
  return (
    <div
      style={{
        color: "white",
        position: "absolute",
        top: "0",
        right: "0",
        width: "170px",
        backgroundColor: "#800000",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.7)",
        textAlign: "center",
      }}
    >
      <h1>{selectedWatcher.fullname} </h1>
      <ul>
        {selectedWatcher.movies.map((movie) => (
          <li key={selectedWatcher.id}>{movie}</li>
        ))}
      </ul>
      <button
        style={{ margin: "10px" }}
        onClick={() => setSelectedWatcher(null)}
      >
        Close
      </button>
    </div>
  );
}
