import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate"

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
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
