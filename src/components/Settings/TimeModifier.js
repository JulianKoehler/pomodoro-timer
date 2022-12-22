import styled from "styled-components";
import increment from "../../assets/images/icon-arrow-up.svg";
import incrementHover from "../../assets/images/icon-arrow-up-hover.svg";
import decrement from "../../assets/images/icon-arrow-down.svg";
import decrementHover from "../../assets/images/icon-arrow-down-hover.svg";

const TimeModifier = ({ settings, dispatch, actions }) => {
  /** In the following switch statement the 60 is represeting 60 seconds. Hence I have to multiply the thresholds until which the user can set a timer by 60 */
  const timerChangeHandler = e => {
    switch (e.target.name) {
      case "pomodoro++":
        if (settings.pomodoro >= 60 * 60) return;
        dispatch({ type: actions.CHANGE_POMODORO, value: 60 });
        break;
      case "pomodoro--":
        if (settings.pomodoro <= 60) return;
        dispatch({ type: actions.CHANGE_POMODORO, value: -60 });
        break;
      case "short-break++":
        if (settings["short-break"] >= 15 * 60) return;
        dispatch({ type: actions.CHANGE_SHORT, value: 60 });
        break;
      case "short-break--":
        if (settings["short-break"] <= 60) return;
        dispatch({ type: actions.CHANGE_SHORT, value: -60 });
        break;
      case "long-break++":
        if (settings["long-break"] >= 60 * 60) return;
        dispatch({ type: actions.CHANGE_LONG, value: 60 });
        break;
      case "long-break--":
        if (settings["long-break"] <= 5 * 60) return;
        dispatch({ type: actions.CHANGE_LONG, value: -60 });
        break;
      default:
        return;
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
              value={settings.pomodoro / 60}
              readOnly={true}
            />
            <ButtonGroup>
              <IncrementBtn
                name="pomodoro++"
                onClick={timerChangeHandler}
                icon={increment}
                hover={incrementHover}
              />
              <DecrementBtn
                name="pomodoro--"
                onClick={timerChangeHandler}
                icon={decrement}
                hover={decrementHover}
              />
            </ButtonGroup>
          </InputGroup>
        </Timer>
        <Timer>
          <Label htmlFor="short-break">short break</Label>
          <InputGroup>
            <Input
              min={1}
              max={15}
              type="number"
              id="short-break"
              name="short-break"
              value={settings["short-break"] / 60}
              readOnly={true}
            />
            <ButtonGroup>
              <IncrementBtn
                name="short-break++"
                onClick={timerChangeHandler}
                icon={increment}
                hover={incrementHover}
              />
              <DecrementBtn
                name="short-break--"
                onClick={timerChangeHandler}
                icon={decrement}
                hover={decrementHover}
              />
            </ButtonGroup>
          </InputGroup>
        </Timer>
        <Timer>
          <Label htmlFor="long-break">long break</Label>
          <InputGroup>
            <Input
              min={5}
              max={60}
              type="number"
              id="long-break"
              name="long-break"
              value={settings["long-break"] / 60}
              readOnly={true}
            />
            <ButtonGroup>
              <IncrementBtn
                name="long-break++"
                onClick={timerChangeHandler}
                icon={increment}
                hover={incrementHover}
              />
              <DecrementBtn
                name="long-break--"
                onClick={timerChangeHandler}
                icon={decrement}
                hover={decrementHover}
              />
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
  min-width: 20rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.3em;
  margin-bottom: 1.3em;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Timer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  color: var(--dark-blue);
  opacity: 0.4;
  font-size: 0.75em;
  margin-bottom: 0.5em;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

const InputGroup = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 6.6875rem;
  height: 3rem;
  font-size: 0.875rem;
  font-family: inherit;
  background-color: var(--washed-out-white);
  border: none;
  border-radius: 0.625rem 0 0 0.625rem;
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

  @media (max-width: 600px) {
    width: 5.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100%;

  & button {
    width: 2.0625rem;
    height: 50%;
    background-color: var(--washed-out-white);
    border: none;
    background-repeat: no-repeat;
    background-position-x: 30%;
    cursor: pointer;
  }
`;

const IncrementBtn = styled.button`
  border-radius: 0 0.625rem 0 0;
  background-image: url(${props => props.icon});
  background-position-y: 80%;

  &:hover {
    background-image: url(${props => props.hover});
  }
`;

const DecrementBtn = styled.button`
  border-radius: 0 0 0.625rem 0;
  background-image: url(${props => props.icon});
  background-position-y: 20%;

  &:hover {
    background-image: url(${props => props.hover});
  }
`;
