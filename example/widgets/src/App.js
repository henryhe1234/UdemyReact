import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate"
import Route from './components/Route'
import Header from './components/Header'
const items = [
  {
    title: "what is React",
    content: "React is a front-end js framework",
  },
  {
    title: "why use React",
    content: "React is a favorite JS library",
  },
  {
    title: "how to use react?",
    content: "you use react by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];





const App = () => {
  const [selected,setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}  />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
