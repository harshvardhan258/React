import React, { useState } from "react";
import { Accordian } from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend framework",
  },
  { title: "Why use React?", content: "React is a favorite JS library." },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const options = [
  { label: "The Color Red", value: "Red" },
  { label: "The Color Blue", value: "Blue" },
  { label: "The Color Green", value: "Green" },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      {/* <Search /> */}
      {/* <Accordian items={items} /> */}
    </div>
  );
}

export default App;
