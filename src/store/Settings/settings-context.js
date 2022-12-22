import React from "react";

const SettingsContext = React.createContext({
  color: "",
  font: "",
  alarm: "",
  setColor: () => {},
  setFont: () => {},
  setAlarm: () => {},
  COLOR_OPTIONS: [],
  FONT_OPTIONS: [],
  ALARM_OPTIONS: [],
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
