import { useState, useEffect } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [seacrhField, setSearchField] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setMonsters(data);
    })();
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(seacrhField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        handlerChange={setSearchField}
        placeholders="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
