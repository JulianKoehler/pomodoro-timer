import { useState, useReducer } from "react";
import SettingsContext from "./settings-context";
import alarm1 from "../../assets/sounds/alarm-1.mp3";
import alarm2 from "../../assets/sounds/alarm-2.mp3";
import alarm3 from "../../assets/sounds/alarm-3.mp3";

const SettingsProvider = props => {
  // Color Boilerplate from index.css
  const COLOR_OPTIONS = ["var(--orange)", "var(--light-blue)", "var(--purple)"];

  const FONT_OPTIONS = ["var(--font-option-1)", "var(--font-option-2)", "var(--font-option-3)"];

  const ALARM_OPTIONS = [alarm1, alarm2, alarm3];

  const ACTIONS = {
    POMODORO: "pomodoro",
    SHORT_BREAK: "short-break",
    LONG_BREAK: "long-break",
  };

  const savedSettings = JSON.parse(localStorage.getItem("settings"));

  const [selectedColor, setSelectedColor] = useState(
    savedSettings ? savedSettings.color : COLOR_OPTIONS[0]
  );
  const [selectedFont, setSelectedFont] = useState(
    savedSettings ? savedSettings.font : FONT_OPTIONS[0]
  );
  const [selectedAlarm, setSelectedAlarm] = useState(
    savedSettings ? savedSettings.alarm : ALARM_OPTIONS[0]
  );

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

  // Timers are in seconds because the Interval decrementing the number is set to 1 second as well
  const timers = {
    pomodoro: savedSettings ? savedSettings.pomodoro : 1500,
    "short-break": savedSettings ? savedSettings["short-break"] : 300,
    "long-break": savedSettings ? savedSettings["long-break"] : 900,
  };

  const phaseReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.POMODORO:
        return {
          ...state,
          pomodoro: action.value,
        };
      case ACTIONS.SHORT_BREAK:
        return {
          ...state,
          "short-break": action.value,
        };
      case ACTIONS.LONG_BREAK:
        return {
          ...state,
          "long-break": action.value,
        };
      default:
        return {
          state,
        };
    }
  };

  const [phaseDurations, dispatchPhaseDurations] = useReducer(phaseReducer, timers);

  const [currentPhase, setCurrentPhase] = useState(PHASES[0]);

  const changePomodoroHandler = newDuration => {
    dispatchPhaseDurations({ type: ACTIONS.POMODORO, value: newDuration });
  };

  const changeShortBreakHandler = newDuration => {
    dispatchPhaseDurations({ type: ACTIONS.SHORT_BREAK, value: newDuration });
  };

  const changeLongBreakHandler = newDuration => {
    dispatchPhaseDurations({ type: ACTIONS.LONG_BREAK, value: newDuration });
  };

  const changePhaseHandler = phase => {
    setCurrentPhase(phase);
  };

  const changeColorHandler = color => {
    setSelectedColor(color);
  };

  const changeFontHandler = font => {
    setSelectedFont(font);
  };

  const changeAlarmHandler = alarm => {
    setSelectedAlarm(alarm);
  };

  const settingsContext = {
    color: selectedColor,
    font: selectedFont,
    alarm: selectedAlarm,
    setColor: changeColorHandler,
    setFont: changeFontHandler,
    setAlarm: changeAlarmHandler,
    COLOR_OPTIONS,
    FONT_OPTIONS,
    ALARM_OPTIONS,
    PHASES,
    phaseDurations,
    CYCLE,
    currentPhase,
    setPhase: changePhaseHandler,
    setPomodoro: changePomodoroHandler,
    setShortBreak: changeShortBreakHandler,
    setLongBreak: changeLongBreakHandler,
  };

  return (
    <SettingsContext.Provider value={settingsContext}>{props.children}</SettingsContext.Provider>
  );
};

export default SettingsProvider;
