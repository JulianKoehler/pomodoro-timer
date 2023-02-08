import { useContext } from "react";
import useTimer from "../../hooks/useTimer";
import styled from "styled-components";
import classes from "./Clock.module.css";
import SettingsContext from "../../store/Settings/settings-context";

let alarmID;

const Clock = () => {
  const { color, alarm } = useContext(SettingsContext);
  const alarmSound = new Audio(alarm);

  const {
    timer,
    timerDuration,
    hasTimerStarted,
    isTimerExpired,
    isTimerPaused,
    startTimer,
    pauseTimer,
    resumeTimer,
    restartTimer,
  } = useTimer();

  const controlText = isTimerExpired
    ? "restart"
    : isTimerPaused
    ? "resume"
    : hasTimerStarted
    ? "pause"
    : "start";
  const minutes = `0${Math.floor(timer / 60)}`.slice(-2);
  const seconds = `0${timer % 60}`.slice(-2);

  const setAlarmSound = () => {
    alarmSound.play();
    alarmSound.pause();
    alarmID = setTimeout(() => alarmSound.play(), timer * 1000);
  };

  const startTimerHandler = () => {
    startTimer();
    setAlarmSound();
  };

  const pauseTimerHandler = () => {
    pauseTimer();
    clearTimeout(alarmID);
  };

  const resumeTimerHandler = () => {
    resumeTimer();
    setAlarmSound();
  };

  const restartTimerHandler = () => {
    restartTimer();
    setAlarmSound();
  };

  return (
    <ClockContainer>
      <InnerClockCircle>
        <ProgressBar
          color={color}
          time={timerDuration}
          paused={isTimerPaused}
          started={hasTimerStarted}>
          <svg
            className={hasTimerStarted ? classes["clock-animation"] : null}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px">
            <circle
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
          <Time>
            {minutes}:{seconds}
          </Time>
          {!hasTimerStarted && !isTimerExpired && (
            <TimerController
              onClick={startTimerHandler}
              color={color}>
              {controlText}
            </TimerController>
          )}
          {hasTimerStarted && !isTimerPaused && !isTimerExpired && (
            <TimerController
              onClick={pauseTimerHandler}
              color={color}>
              pause
            </TimerController>
          )}
          {hasTimerStarted && isTimerPaused && !isTimerExpired && (
            <TimerController
              onClick={resumeTimerHandler}
              color={color}>
              {controlText}
            </TimerController>
          )}
          {isTimerExpired && (
            <TimerController
              onClick={restartTimerHandler}
              color={color}>
              restart
            </TimerController>
          )}
        </ProgressBar>
      </InnerClockCircle>
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  width: 25.625em;
  height: 25.625em;
  border-radius: 50%;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -3.125rem -3.125rem 6.25rem #272c5a, 3.125rem 3.125rem 6.25rem #121530;
  margin: 0 auto 3.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    transform: scale(0.8);
    margin: 0 auto 4.9375rem;
  }
  @media (max-width: 390px) {
    transform: scale(0.75) translateX(-0.8rem);
    margin: 0;
  }
  @media (max-width: 360px) {
    transform: scale(0.7) translateX(-2rem);
    margin: 0;
  }
`;

const InnerClockCircle = styled.div`
  background-color: var(--very-dark-blue);
  width: 22.875rem;
  height: 22.875rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProgressBar = styled.div`
  width: 21.1875rem;
  height: 21.1875rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: none;
    stroke: ${props => props.color};
    stroke-width: 7px;
    transform: scale(2.25) rotate(-89.5deg);
    stroke-dasharray: 440;
    stroke-dashoffset: 0;
    animation-duration: ${props => props.time}s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-play-state: ${props => (props.started && !props.paused ? "running" : "paused")};
  }
`;

const Time = styled.h1`
  position: absolute;
  top: 15%;
  left: 0;
  color: var(--gray);
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TimerController = styled.h3`
  position: absolute;
  color: var(--gray);
  top: 15%;
  cursor: pointer;
  padding: 12rem 4rem 2rem 5rem;

  &:hover {
    color: ${props => props.color};
    transition: color 0.35s;
  }
`;
