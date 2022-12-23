import { useContext, useState, useRef, useEffect } from "react";
import SettingsContext from "../store/Settings/settings-context";
import TimerContext from "../store/Timer/timer-context";

let intervalID;

const useTimer = () => {
  const { currentPhase, phaseDurations } = useContext(SettingsContext);
  const {
    hasTimerStarted,
    setHasTimerStarted,
    isTimerExpired,
    setIsTimerExpired,
    isTimerPaused,
    setIsTimerPaused,
    strokeCircle,
    setStrokeCircle,
  } = useContext(TimerContext);

  const isFirstRender = useRef(true);

  /** startBtnClicked is purely for triggering the useEffect which starts a new Timer.
   * hasTimerStarted is not appropriate for that since it can change back to false and when
   * it becomes false I dont want to set another Interval, so I just created a variable that increments each click
   */
  const [startBtnClicked, setStartBtnClicked] = useState(0);

  const timerDuration = phaseDurations[currentPhase];

  const [timer, setTimer] = useState(timerDuration);

  const countDown = () => {
    setTimer(prevTime => prevTime - 1);
  };

  const startTimer = () => {
    setHasTimerStarted(true);
    setStartBtnClicked(startBtnClicked + 1);
  };

  const pauseTimer = () => {
    setIsTimerPaused(true);
    clearInterval(intervalID);
  };

  const resumeTimer = () => {
    setIsTimerPaused(false);
    intervalID = setInterval(countDown, 1000);
  };

  const resetTimer = () => {
    clearInterval(intervalID);
  };

  const restartTimer = () => {
    setIsTimerExpired(false);
    setHasTimerStarted(true);
    setStrokeCircle(0);
    setTimer(timerDuration);
    setStartBtnClicked(startBtnClicked + 1);
  };

  /** To prevent the timer from running on page load I have to use this workaround by creating a ref with value true.
   *  By doing that I am able to check on the first run of the effect if it is the first render and
   * if so (since in Strict Mode effects are running twice) I will set a very small Timeout which sets isFirstRender to false.
   * Without the timeout due to React running the effect twice on page load it wouldn't work.
   */
  useEffect(() => {
    if (isFirstRender.current) {
      setTimeout(() => (isFirstRender.current = false), 10);
    } else {
      if (intervalID) clearInterval(intervalID);
      intervalID = setInterval(countDown, 1000);
    }
    return () => clearInterval(intervalID);
  }, [startBtnClicked]);

  /** This effect is handling the check if the timer is running out, because the callback function of setInterval is
   * only created once and does not receive any state updates of the timer.
   */

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalID);
      setIsTimerExpired(true);
      setHasTimerStarted(false);
    }
  }, [timer]);

  /** When the phase is being changed the state of the timer wont be updated allthough its variable value is changing.
   * That's why I need to listen for changes on timerDuration to setTimer with its changed value.
   */

  useEffect(() => {
    setTimer(timerDuration);
  }, [timerDuration]);

  return {
    timer,
    timerDuration,
    hasTimerStarted,
    isTimerExpired,
    isTimerPaused,
    strokeCircle,
    startTimer,
    pauseTimer,
    resumeTimer,
    restartTimer,
    resetTimer,
  };
};

export default useTimer;
