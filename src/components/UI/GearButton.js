import styled from "styled-components";
import settingsIcon from "../../assets/images/icon-settings.svg";

const GearButton = props => {
  return (
    <IconContainer>
      <img
        onClick={props.onClick}
        src={settingsIcon}
        alt="settings"
      />
    </IconContainer>
  );
};

export default GearButton;

const IconContainer = styled.div`
  width: 3.125em;
  height: 3.125em;
  display: flexbox;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 3px 0 0 1px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.35s;

  &:hover {
    background-color: var(--very-dark-blue);
  }
`;
