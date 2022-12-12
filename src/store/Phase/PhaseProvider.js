import React, { useState, useReducer } from "react";
import PhaseContext from "./phase-context";

const PHASES = ["pomodoro", "short-break", "long-break"];

const PhaseProvider = props => {
  const [currentPhase, setCurrentPhase] = useState(PHASES[1]);

  const changePhaseHandler = phase => {
    setCurrentPhase(phase);
  };

  const phaseContext = {
    PHASES,
    currentPhase,
    setPhase: changePhaseHandler,
  };

  return <PhaseContext.Provider value={phaseContext}>{props.children}</PhaseContext.Provider>;
};

export default PhaseProvider;
