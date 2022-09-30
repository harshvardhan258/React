import React from "react";
import { Accordian } from "./components/Accordian";
import Search from "./components/Search";

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

function App() {
  return (
    <div>
      <Search />
      {/* <Accordian items={items} /> */}
    </div>
  );
}

export default App;
