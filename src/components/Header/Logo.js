import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const Logo = props => {
  return (
    <div>
      <LogoImage
        width={props.width}
        height={props.height}
        blockElement={props.blockElement}
        margin={props.margin}
        src={logo}
        alt="pomodoro-logo"
      />
    </div>
  );
};

export default Logo;

const LogoImage = styled.img`
  display: ${props => (props.blockElement ? "block" : "inline-block")};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};

  @media (max-width: 600) {
    margin: 2rem auto 3rem;
  }
`;
