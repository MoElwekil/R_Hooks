import React from "react";

import Accordion from "./Accordion";

const items = [
  {
    title: "what is React?",
    answer: "React is a front end Javascript framework",
  },
  {
    title: "why use React?",
    answer: "because it's very popular and powerful framework",
  },
];

const App = () => {
  return (
    <div className="ui container">
      <Accordion items={items} />
    </div>
  );
};

export default App;
