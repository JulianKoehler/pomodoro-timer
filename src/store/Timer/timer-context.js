import React from "react";

const TimerContext = React.createContext({
  hasTimerStarted: false,
  isTimerExpired: false,
  isTimerPaused: false,
  strokeCircle: 0,
  setHasTimerStarted: () => {},
  setHasTimerStarted: () => {},
  setIsTimerPaused: () => {},
  setStrokeCircle: () => {},
});

export default TimerContext;
