import { useContext } from "react";
import styled from "styled-components";
import Phase from "./Phase";

import SettingsContext from "../../store/Settings/settings-context";

const PhaseBar = () => {
  const { PHASES, currentPhase } = useContext(SettingsContext);

  return (
    <Bar>
      {PHASES.map(phase => {
        return (
          <Phase
            key={phase}
            active={currentPhase === phase}>
            {phase}
          </Phase>
        );
      })}
    </Bar>
  );
};

export default PhaseBar;

const Bar = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 1.96875rem;
  background-color: var(--very-dark-blue);
  margin: 0 auto 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 0.5rem;

  @media (max-width: 390px) {
    transform: scale(0.9);
  }

  @media (max-width: 360px) {
    transform: scale(0.8) translateX(-0.8rem);
  }
`;
