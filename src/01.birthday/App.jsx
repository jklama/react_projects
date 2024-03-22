import React, { useState } from "react";
import List from "./List";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section>
        <h1>{people.length} Birthday Today</h1>
        <List people={people} />
        <button onClick={setPeople([])}>Clear All</button>
      </section>
    </>
  );
}

export default App;
