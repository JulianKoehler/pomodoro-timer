import React from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import classes from "./SkipPhaseModal.module.css";

const SkipPhaseModal = props => {
  return (
    <Modal className={classes.modal}>
      <h5>Skip this phase and move on?</h5>
      <ButtonGroup>
        <Button
          onClick={() => props.skip()}
          className={classes["btn-skip"]}>
          Skip
        </Button>
        <Button onClick={() => props.closeModal()}>Cancel</Button>
      </ButtonGroup>
    </Modal>
  );
};

export default SkipPhaseModal;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2em;
  gap: 1em;
`;
