import React, { useState } from "react";
import ColorContext from "./color-context";

// Color Boilerplate from index.css
const COLOR_OPTIONS = ["var(--orange)", "var(--light-blue)", "var(--purple)"];

const ColorProvider = props => {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);

  const changeColorHandler = color => {
    setSelectedColor(color);
  };

  const colorContext = {
    color: selectedColor,
    COLOR_OPTIONS,
    setColor: changeColorHandler,
  };

  return <ColorContext.Provider value={colorContext}>{props.children}</ColorContext.Provider>;
};

export default ColorProvider;
