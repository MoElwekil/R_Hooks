import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (e) => {
    return setActiveIndex(e);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.answer}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion" style={{ marginTop: "20px" }}>
      {renderedItems}
    </div>
  );
};

export default Accordion;
