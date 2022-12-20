import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SettingsContext from "../../store/Settings/settings-context";

const Backdrop = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ModalOverlay = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 25px;
  background-color: var(--white);
  font-family: ${props => props.font};
  position: relative;
  z-index: 2;
`;

const Modal = props => {
  const { font } = useContext(SettingsContext);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <ModalOverlay
          font={font}
          className={props.className}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
