import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Logo = props => {
  return (
    <LogoImage
      width={props.width}
      height={props.height}
      blockElement={props.blockElement}
      margin={props.margin}
      src={logo}
      alt="pomodoro-logo"
    />
  );
};

export default Logo;

const LogoImage = styled.img`
  display: ${props => (props.blockElement ? "block" : "inline-block")};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
`;
