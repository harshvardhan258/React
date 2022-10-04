import React, { useState, useEffect, useRef } from "react";

export default function Dropdown({ options, onSelectedChange, selected }) {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("");
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setToggle(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          setColor(option.value);
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div className="ui form" ref={ref}>
        <div className="field">
          <label className="label">Select a Color</label>
          <div
            onClick={() => setToggle(!toggle)}
            className={`ui selection dropdown ${
              toggle ? "visible active" : ""
            }`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${toggle ? "visible transition" : ""}`}>
              {renderOptions}
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          color: `${color}`,
          paddingTop: toggle === true ? "6rem" : "",
        }}
      >
        Change the Text Color!
      </p>
    </>
  );
}
