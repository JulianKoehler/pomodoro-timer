import { useContext } from "react";
import styled from "styled-components";
import SettingsContext from "../../store/Settings/settings-context";

const Selection = ({ type, settings, dispatch, actions }) => {
  const { COLOR_OPTIONS, FONT_OPTIONS, ALARM_OPTIONS } = useContext(SettingsContext);

  const fontOptions = FONT_OPTIONS.map(font => {
    const active = font === settings.font;
    return (
      <Option
        key={font}
        onClick={() => dispatch({ type: actions.CHANGE_FONT, value: font })}
        backgroundColor={active ? "var(--very-dark-blue)" : "var(--washed-out-white)"}
        color={active ? "var(--white)" : "var(--very-dark-blue)"}
        font={font}>
        Aa
      </Option>
    );
  });

  const colorOptions = COLOR_OPTIONS.map(color => {
    return (
      <Option
        key={color}
        onClick={() => dispatch({ type: actions.CHANGE_COLOR, value: color })}
        backgroundColor={color}>
        {color === settings.color && <i className="fa-solid fa-check"></i>}
      </Option>
    );
  });

  const alarmPlayHandler = alarm => {
    const audio = new Audio(alarm);
    audio.play();
  };

  let alarmNumber = 0; // This variable makes it easy to label each alarm with a consecutive number
  const alarmOptions = ALARM_OPTIONS.map(alarm => {
    alarmNumber++;
    const active = alarm === settings.alarm;
    return (
      <Option
        key={alarm}
        onClick={() => {
          alarmPlayHandler(alarm);
          dispatch({ type: actions.CHANGE_ALARM, value: alarm });
        }}
        backgroundColor={active ? "var(--very-dark-blue)" : "var(--washed-out-white)"}
        color={active ? "var(--white)" : "var(--very-dark-blue)"}>
        {alarmNumber}
      </Option>
    );
  });

  return (
    <SelectionWrapper>
      <Category>{type}</Category>
      {type === "font" && <Options>{fontOptions}</Options>}
      {type === "color" && <Options>{colorOptions}</Options>}
      {type === "audio" && <Options>{alarmOptions}</Options>}
    </SelectionWrapper>
  );
};

export default Selection;

const SelectionWrapper = styled.div`
  margin: 0 var(--modal-padding);
  height: 5.5em;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border-bottom);

  @media (max-width: 600) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 7.5em;
  }
`;

const Category = styled.h4`
  margin-right: auto;

  @media (max-width: 600) {
    margin: 0 0 1rem 0;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Option = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  margin-left: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.8s;
  font-family: ${props => props.font};

  &:hover {
    transform: scale(1.15);
  }
`;
