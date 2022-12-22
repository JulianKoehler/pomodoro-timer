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
  margin: 3.5rem auto 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 0.5rem;
`;
