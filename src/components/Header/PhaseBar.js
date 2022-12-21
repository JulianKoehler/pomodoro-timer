import React, { useContext, useState } from "react";
import styled from "styled-components";
import Phase from "./Phase";

import SettingsContext from "../../store/Settings/settings-context";
import SkipPhaseModal from "./SkipPhaseModal";

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
  border-radius: 31.5px;
  background-color: var(--very-dark-blue);
  margin: 4.5rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 0.5rem;
`;
