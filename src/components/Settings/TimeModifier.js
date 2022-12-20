import React, { useContext } from "react";
import styled from "styled-components";
import SettingsContext from "../../store/Settings/settings-context";
import increment from "../../assets/icon-arrow-up.svg";
import incrementHover from "../../assets/icon-arrow-up-hover.svg";
import decrement from "../../assets/icon-arrow-down.svg";
import decrementHover from "../../assets/icon-arrow-down-hover.svg";

const TimeModifier = () => {
  const { phaseDurations, setPomodoro, setShortBreak, setLongBreak } = useContext(SettingsContext);

  const timerChangeHandler = e => {
    switch (e.target.name) {
      case "pomodoro":
        setPomodoro(e.target.value * 60);
        break;
      case "short-break":
        setShortBreak(e.target.value * 60);
        break;
      case "long-break":
        setLongBreak(e.target.value * 60);
    }
  };

  return (
    <TimerSettings>
      <h4>time (minutes)</h4>
      <Wrapper>
        <Timer>
          <Label htmlFor="pomodoro">pomodoro</Label>
          <InputGroup>
            <Input
              min={1}
              max={60}
              type="number"
              id="pomodoro"
              name="pomodoro"
              value={phaseDurations.pomodoro / 60}
              onChange={timerChangeHandler}
            />
            <ButtonGroup>
              <IncrementBtn
                icon={increment}
                hover={incrementHover}></IncrementBtn>
              <DecrementBtn
                icon={decrement}
                hover={decrementHover}></DecrementBtn>
            </ButtonGroup>
          </InputGroup>
        </Timer>
        <Timer>
          <Label htmlFor="short-break">short break</Label>
          <InputGroup>
            <Input
              type="number"
              id="short-break"
              name="short-break"
              value={phaseDurations["short-break"] / 60}
              onChange={timerChangeHandler}
            />
            <ButtonGroup>
              <IncrementBtn
                icon={increment}
                hover={incrementHover}></IncrementBtn>
              <DecrementBtn
                icon={decrement}
                hover={decrementHover}></DecrementBtn>
            </ButtonGroup>
          </InputGroup>
        </Timer>
        <Timer>
          <Label htmlFor="long-break">long break</Label>
          <InputGroup>
            <Input
              type="number"
              id="long-break"
              name="long-break"
              value={phaseDurations["long-break"] / 60}
              onChange={timerChangeHandler}
            />
            <ButtonGroup>
              <IncrementBtn
                icon={increment}
                hover={incrementHover}></IncrementBtn>
              <DecrementBtn
                icon={decrement}
                hover={decrementHover}></DecrementBtn>
            </ButtonGroup>
          </InputGroup>
        </Timer>
      </Wrapper>
    </TimerSettings>
  );
};

export default TimeModifier;

const TimerSettings = styled.div`
  padding: 0 var(--modal-padding);
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.3em;
  margin-bottom: 1.3em;
`;

const Timer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: var(--dark-blue);
  opacity: 0.4;
  font-size: 12px;
  margin-bottom: 0.5em;
`;

const InputGroup = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 107px;
  height: 48px;
  font-size: 14px;
  font-family: inherit;
  background-color: var(--washed-out-white);
  border: none;
  border-radius: 10px 0 0 10px;
  padding: 0 0 0.3em 1rem;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100%;

  & button {
    width: 33px;
    height: 50%;
    background-color: var(--washed-out-white);
    border: none;
    background-repeat: no-repeat;
    background-position-x: 30%;
    cursor: pointer;
  }
`;

const IncrementBtn = styled.button`
  border-radius: 0 10px 0 0;
  background-image: url(${props => props.icon});
  background-position-y: 80%;

  &:hover {
    background-image: url(${props => props.hover});
  }
`;

const DecrementBtn = styled.button`
  border-radius: 0 0 10px 0;
  background-image: url(${props => props.icon});
  background-position-y: 20%;

  &:hover {
    background-image: url(${props => props.hover});
  }
`;
