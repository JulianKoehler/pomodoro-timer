import React, { useContext, useState, useRef, useEffect } from "react";
import PhaseContext from "../store/Phase/phase-context";

let invtervalID;

const timersInMs = {
  pomodoro: 1_500_100,
  "short-break": 6_100,
  "long-break": 900_100,
};

const useTimer = () => {
  const { currentPhase, PHASES, setPhase } = useContext(PhaseContext);
  const isFirstRender = useRef(true);

  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const timerDuration = timersInMs[currentPhase];
  const timerDurationMinutes = `0${Math.floor(timerDuration / (1000 * 60))}`.slice(-2);
  const timerDurationSeconds = `0${Math.round((timerDuration / 1000) % 60)}`.slice(-2);
  const timerDurationFormatted = `${timerDurationMinutes}:${timerDurationSeconds}`;

  const startTime = new Date().getTime();
  const endTime = startTime + timerDuration;

  const [timer, setTimer] = useState(timerDurationFormatted);

  const countDown = () => {
    const timeLeft = endTime - new Date().getTime();
    const minutes = `0${Math.floor(timeLeft / (1000 * 60))}`.slice(-2);
    const seconds = `0${Math.floor((timeLeft / 1000) % 60)}`.slice(-2);

    setTimer(`${minutes}:${seconds}`);

    if (timeLeft <= 1000) {
      clearInterval(invtervalID);
      setIsTimerExpired(true);
    }
  };

  const startTimer = () => {
    setHasTimerStarted(true);
  };

  const pauseTimer = () => {
    setIsTimerPaused(prevState => !prevState);
    clearInterval(invtervalID);
  };

  const resumeTimer = () => {
    setIsTimerPaused(prevState => !prevState);
    invtervalID = setInterval(countDown, 1000);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      setTimeout(() => (isFirstRender.current = false), 100);
    } else {
      invtervalID = setInterval(countDown, 1000);
    }
  }, [hasTimerStarted]);

  return {
    timer,
    timerDuration,
    hasTimerStarted,
    isTimerExpired,
    isTimerPaused,
    startTimer,
    pauseTimer,
    resumeTimer,
  };
};

export default useTimer;
