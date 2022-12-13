import React, { useContext, useEffect, useState, useRef } from "react";
import useTimer from "../../hooks/useTimer";
import styled from "styled-components";
import classes from "./Clock.module.css";
import ColorContext from "../../store/Color/color-context";
import PhaseContext from "../../store/Phase/phase-context";

const Clock = () => {
  const colorCtx = useContext(ColorContext);

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

  return (
    <ClockContainer>
      <InnerClockCircle>
        <ProgressBar
          color={colorCtx.color}
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
              onClick={startTimer}
              color={colorCtx.color}>
              {controlText}
            </TimerController>
          )}
          {hasTimerStarted && !isTimerPaused && !isTimerExpired && (
            <TimerController
              onClick={pauseTimer}
              color={colorCtx.color}>
              pause
            </TimerController>
          )}
          {hasTimerStarted && isTimerPaused && !isTimerExpired && (
            <TimerController
              onClick={resumeTimer}
              color={colorCtx.color}>
              {controlText}
            </TimerController>
          )}
          {isTimerExpired && (
            <TimerController
              onClick={restartTimer}
              color={colorCtx.color}>
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
  width: 410px;
  height: 410px;
  border-radius: 50%;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
  margin: 5.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerClockCircle = styled.div`
  background-color: var(--very-dark-blue);
  width: 366px;
  height: 366px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProgressBar = styled.div`
  width: 339px;
  height: 339px;
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
  left: 18%;
  color: var(--gray);
  display: flex;
  width: 100%;
`;

const TimerController = styled.h3`
  position: absolute;
  padding-left: 1rem;
  color: var(--gray);
  top: 70%;
  cursor: pointer;

  &:hover {
    color: ${props => props.color};
    transition: color 0.35s;
  }
`;
