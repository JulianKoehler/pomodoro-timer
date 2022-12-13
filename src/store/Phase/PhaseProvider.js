import React, { useState, useReducer } from "react";
import PhaseContext from "./phase-context";

const PhaseProvider = props => {
  const PHASES = ["pomodoro", "short-break", "long-break"];
  const CYCLE = [
    PHASES[0],
    PHASES[1],
    PHASES[0],
    PHASES[1],
    PHASES[0],
    PHASES[1],
    PHASES[0],
    PHASES[2],
  ];

  const [phaseDurations, setPhaseDurations] = useState({
    pomodoro: 1500,
    "short-break": 300,
    "long-break": 900,
  });
  const [currentPhase, setCurrentPhase] = useState(PHASES[1]);

  const changeTimerDurationsHandler = (phase, newDuration) => {
    setPhaseDurations(prevDuartions => ({
      ...prevDuartions,
      phase: newDuration,
    }));
  };

  const changePhaseHandler = phase => {
    setCurrentPhase(phase);
  };

  const phaseContext = {
    PHASES,
    phaseDurations,
    CYCLE,
    currentPhase,
    setPhase: changePhaseHandler,
    setPhaseDuration: changeTimerDurationsHandler,
  };

  return <PhaseContext.Provider value={phaseContext}>{props.children}</PhaseContext.Provider>;
};

export default PhaseProvider;
