import React, { useContext } from "react";
import styled from "styled-components";
import Phase from "./Phase";

import PhaseContext from "../../store/Phase/phase-context";

const PhaseBar = () => {
  const phaseCtx = useContext(PhaseContext);

  return (
    <Bar>
      {phaseCtx.PHASES.map(phase => {
        return (
          <Phase
            key={phase}
            active={phaseCtx.currentPhase === phase}>
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
  border-radius: 31.5px;
  background-color: var(--very-dark-blue);
  margin: 4.5rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 0.5rem;
`;
