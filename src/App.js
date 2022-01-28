import { useState, useEffect } from "react";

import { CardList } from "./components/card-list/card-list-component";
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
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setMonsters(data);
    })();
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
