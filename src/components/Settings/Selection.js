import React, { useContext } from "react";
import styled from "styled-components";
import SettingsContext from "../../store/Settings/settings-context";

const Selection = ({ type }) => {
  const {
    COLOR_OPTIONS,
    FONT_OPTIONS,
    color: currentColor,
    font: currentFont,
    setColor,
    setFont,
  } = useContext(SettingsContext);

  const colorOptions = COLOR_OPTIONS.map(color => {
    return (
      <Option
        onClick={() => setColor(color)}
        backgroundColor={color}>
        {color === currentColor && <i class="fa-solid fa-check"></i>}
      </Option>
    );
  });

  const fontOptions = FONT_OPTIONS.map(font => {
    const active = font === currentFont;
    return (
      <Option
        onClick={() => setFont(font)}
        backgroundColor={active ? "var(--very-dark-blue)" : "var(--washed-out-white)"}
        color={active ? "var(--white)" : "var(--very-dark-blue)"}
        font={font}>
        Aa
      </Option>
    );
  });

  return (
    <SelectionWrapper>
      <Category>{type}</Category>
      {type === "color" && colorOptions}
      {type === "font" && fontOptions}
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
`;

const Category = styled.h4`
  margin-right: auto;
`;

const Option = styled.div`
  width: 40px;
  height: 40px;
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
