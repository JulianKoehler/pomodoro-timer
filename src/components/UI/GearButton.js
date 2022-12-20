import React from "react";
import styled from "styled-components";
import settingsIcon from "../../assets/icon-settings.svg";

const GearButton = props => {
  return (
    <GearIcon
      onClick={props.onClick}
      src={settingsIcon}
      alt="settings"
    />
  );
};

export default GearButton;

const GearIcon = styled.img`
  display: block;
  margin: 2rem auto;
  cursor: pointer;
`;
