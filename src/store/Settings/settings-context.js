import React from "react";

const SettingsContext = React.createContext({
  color: "",
  font: "",
  COLOR_OPTIONS: [],
  FONT_OPTIONS: [],
  setColor: () => {},
  PHASES: [],
  phaseDurations: {},
  CYCLE: [],
  currentPhase: "",
  setPhase: () => {},
  setPomodoro: () => {},
  setShortBreak: () => {},
  setLongBreak: () => {},
});

export default SettingsContext;
