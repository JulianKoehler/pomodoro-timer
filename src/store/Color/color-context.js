import React from "react";

const ColorContext = React.createContext({
  color: "",
  setColor: () => {},
});

export default ColorContext;
