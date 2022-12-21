import React, { useContext, useState } from "react";
import styled from "styled-components";
import useTimer from "../../hooks/useTimer";
import SettingsContext from "../../store/Settings/settings-context";
import TimerContext from "../../store/Timer/timer-context";
import SkipPhaseModal from "./SkipPhaseModal";

const Phase = props => {
  const [skipModal, setSkipModal] = useState(false);

  const openModalHandler = () => {
    setSkipModal(true);
  };

  const closeModalHandler = () => {
    setSkipModal(false);
  };

  const { color, setPhase } = useContext(SettingsContext);
  const { setHasTimerStarted, setIsTimerExpired, setIsTimerPaused, hasTimerStarted } =
    useContext(TimerContext);
  const { resetTimer } = useTimer();

  const changePhaseHandler = () => {
    setPhase(props.children);
    setHasTimerStarted(false);
    setIsTimerExpired(false);
    setIsTimerPaused(false);
    setSkipModal(false);
    resetTimer();
  };

  return (
    <React.Fragment>
      <PhaseContainer
        onClick={
          hasTimerStarted && !props.active
            ? openModalHandler
            : !props.active
            ? changePhaseHandler
            : null
        }
        active={props.active}
        color={color}>
        <TextContent active={props.active}>{props.children.split("-").join(" ")}</TextContent>
      </PhaseContainer>
      {skipModal && (
        <SkipPhaseModal
          closeModal={closeModalHandler}
          skip={changePhaseHandler}
        />
      )}
    </React.Fragment>
  );
};

export default Phase;

const PhaseContainer = styled.div`
  width: 120px;
  height: 48px;
  margin: 8px 0 7px 0;
  border-radius: 26.5px;
  background-color: ${props => (props.active ? props.color : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => (props.active ? "default" : "pointer")};
`;

const TextContent = styled.p`
  color: ${props => (props.active ? "black" : "var(--gray)")};
  opacity: ${props => (props.active ? "1" : "0.4")};
  transition: all 0.35s;

  &:hover {
    color: ${props => (props.active ? "black" : "var(--white)")};
    opacity: 1;
  }
`;
