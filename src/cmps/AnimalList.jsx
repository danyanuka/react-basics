import React from "react";
import "../assets/style/animals.css";

export default function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      <h1 className="animalsTitle">Rare Animals</h1>
      <table style={{ borderColor: "black", width: "25%" }}>
        <thead>
          <tr>
            <th className="animalTh">Type</th>
            <th className="animalTh"> Amount</th>
            <th className="animalTh">Link</th>
          </tr>
        </thead>
        <tbody>
          {animals.map(({ type, count }, idx) => (
            <tr key={idx + type}>
              <td className="animalTd">{type}</td>
              <td className="animalTd"> {count}</td>
              <td className="animalTd">
                <a href={`https://www.google.com/search?q= ${type}`}>
                  Google Info
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
