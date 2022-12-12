import React from "react";

const PhaseContext = React.createContext({
  currentPhase: "",
  setPhase: () => {},
});

export default PhaseContext;
