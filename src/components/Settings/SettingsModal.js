import React, { useContext, useReducer } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import SettingsHeader from "./SettingsHeader";
import TimeModifier from "./TimeModifier";
import Selection from "./Selection";
import SettingsContext from "../../store/Settings/settings-context";

import classes from "./SettingsModal.module.css";

const ACTIONS = {
  CHANGE_POMODORO: "pomodoro",
  CHANGE_SHORT: "short",
  CHANGE_LONG: "long",
  CHANGE_FONT: "font",
  CHANGE_COLOR: "color",
};

const settingsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_POMODORO:
      return {
        ...state,
        pomodoro: action.value,
      };
    case ACTIONS.CHANGE_SHORT:
      return {
        ...state,
        "short-break": action.value,
      };
    case ACTIONS.CHANGE_LONG:
      return {
        ...state,
        "long-break": action.value,
      };
    case ACTIONS.CHANGE_FONT:
      return {
        ...state,
        font: action.value,
      };
    case ACTIONS.CHANGE_COLOR:
      return {
        ...state,
        color: action.value,
      };
    default:
      return;
  }
};

const SettingsModal = props => {
  const { phaseDurations, font, color } = useContext(SettingsContext);

  const currentSettings = {
    pomodoro: phaseDurations.pomodoro,
    "short-break": phaseDurations["short-break"],
    "long-break": phaseDurations["long-break"],
    font: font,
    color: color,
  };

  const [settings, dispatchSettings] = useReducer(settingsReducer, currentSettings);

  const onSubmitHandler = () => {
    // hier werden die Settings angewendet
    console.log(settings);
  };

  return (
    <Modal className={classes.settings}>
      <SettingsHeader closeModal={props.closeModal} />
      <TimeModifier />
      <Selection
        settings={settings}
        dispatch={dispatchSettings}
        type="font"
      />
      <Selection
        settings={settings}
        dispatch={dispatchSettings}
        type="color"
      />
      <Selection
        settings={settings}
        dispatch={dispatchSettings}
        type="audio"
      />
      <Button
        onClick={onSubmitHandler}
        className={classes["apply-settings-btn"]}>
        Apply
      </Button>
    </Modal>
  );
};

export default SettingsModal;
