import React, { useState } from "react";
import { Accordian } from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

// const showAccordian = () => {
//   if (window.location.pathname === "/") return <Accordian items={items} />;
// };

// const showList = () => {
//   if (window.location.pathname === "/list") return <Search />;
// };

// const showDropDown = () => {
//   if (window.location.pathname === "/dropdown")
//     return (
//       <Dropdown
//         options={options}
//         selected={selected}
//         onSelectedChange={setSelected}
//       />
//     );
// };

// const showTranslation = () => {
//   if (window.location.pathname === "/translate") return <Translate />;
// };

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* {showAccordian()}
      {showList()}
      {showDropDown()}
      {showTranslation()} */}
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
