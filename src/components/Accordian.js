import React from "react";

export const Accordian = ({ items }) => {
  const [state, setstate] = React.useState(null);
  const renderedItems = items.map((item, index) => {
    const active = state === index ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => setstate(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{index === state && item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};
