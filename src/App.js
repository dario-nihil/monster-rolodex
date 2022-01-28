import { useState } from "react";

import "./App.css";

const MOSTERS_ARRAY = [
  {
    name: "Frankenstein",
    id: "asc1",
  },
  {
    name: "Dracula",
    id: "asr1",
  },
  {
    name: "Zombie",
    id: "as1w",
  },
];

function App() {
  const [monsters, setMonsters] = useState(MOSTERS_ARRAY);

  return (
    <div className="App">
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default App;
