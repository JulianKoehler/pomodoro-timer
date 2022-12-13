import React, { useState, useReducer } from "react";
import TimerContext from "./timer-context";

const ACTIONS = {
  TIMER_STARTED: "TIMER_STARTED",
  TIMER_EXPIRED: "TIMER_EXPIRED",
  TIMER_PAUSED: "TIMER_PAUSED",
  CIRCLE_STROKE_CHANGED: "CIRCLE_STROKE_CHANGED",
};

const defaultState = {
  hasTimerStarted: false,
  isTimerExpired: false,
  isTimerPaused: false,
  strokeCircle: 0,
};

const timerReducer = (state, action) => {
  if (action.type === ACTIONS.TIMER_STARTED) {
    return {
      ...state,
      hasTimerStarted: action.value,
    };
  }
  if (action.type === ACTIONS.TIMER_EXPIRED) {
    return {
      ...state,
      isTimerExpired: action.value,
    };
  }
  if (action.type === ACTIONS.TIMER_PAUSED) {
    return {
      ...state,
      isTimerPaused: action.value,
    };
  }
  if (action.type === ACTIONS.CIRCLE_STROKE_CHANGED) {
    return {
      ...state,
      strokeCircle: action.value,
    };
  }

  return defaultState;
};

const TimerProvider = props => {
  const [timer, dispatchTimer] = useReducer(timerReducer, defaultState);

  const setHasTimerStarted = boolean => {
    dispatchTimer({ type: ACTIONS.TIMER_STARTED, value: boolean });
  };

  const setIsTimerExpired = boolean => {
    dispatchTimer({ type: ACTIONS.TIMER_EXPIRED, value: boolean });
  };

  const setIsTimerPaused = boolean => {
    dispatchTimer({ type: ACTIONS.TIMER_PAUSED, value: boolean });
  };

  const setStrokeCircle = number => {
    dispatchTimer({ type: ACTIONS.CIRCLE_STROKE_CHANGED, value: number });
  };

  const timerContext = {
    hasTimerStarted: timer.hasTimerStarted,
    setHasTimerStarted,
    isTimerExpired: timer.isTimerExpired,
    setIsTimerExpired,
    isTimerPaused: timer.isTimerPaused,
    setIsTimerPaused,
    strokeCircle: timer.strokeCircle,
    setStrokeCircle,
  };

  return <TimerContext.Provider value={timerContext}>{props.children}</TimerContext.Provider>;
};

export default TimerProvider;
