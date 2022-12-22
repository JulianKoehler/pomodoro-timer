import { useContext, useReducer } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import SettingsHeader from "./SettingsHeader";
import TimeModifier from "./TimeModifier";
import Selection from "./Selection";
import SettingsContext from "../../store/Settings/settings-context";

import classes from "./SettingsModal.module.css";

/** The Reducer for the settings in this component is necessary to store the changes the user makes interimswise.
 * Only after clicking the apply button the settings are sent to the actual state variables in the store.
 */

const ACTIONS = {
  CHANGE_POMODORO: "pomodoro",
  CHANGE_SHORT: "short",
  CHANGE_LONG: "long",
  CHANGE_FONT: "font",
  CHANGE_COLOR: "color",
  CHANGE_ALARM: "alarm",
};

const settingsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_POMODORO:
      return {
        ...state,
        pomodoro: state.pomodoro + action.value,
      };
    case ACTIONS.CHANGE_SHORT:
      return {
        ...state,
        "short-break": state["short-break"] + action.value,
      };
    case ACTIONS.CHANGE_LONG:
      return {
        ...state,
        "long-break": state["long-break"] + action.value,
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
    case ACTIONS.CHANGE_ALARM:
      return {
        ...state,
        alarm: action.value,
      };
    default:
      return;
  }
};

const SettingsModal = props => {
  const {
    phaseDurations,
    font,
    color,
    alarm,
    setPomodoro,
    setShortBreak,
    setLongBreak,
    setFont,
    setColor,
    setAlarm,
  } = useContext(SettingsContext);

  const currentSettings = {
    pomodoro: phaseDurations.pomodoro,
    "short-break": phaseDurations["short-break"],
    "long-break": phaseDurations["long-break"],
    font: font,
    color: color,
    alarm: alarm,
  };

  const [settings, dispatchSettings] = useReducer(settingsReducer, currentSettings);

  const onApplyHandler = () => {
    setPomodoro(settings.pomodoro);
    setShortBreak(settings["short-break"]);
    setLongBreak(settings["long-break"]);
    setFont(settings.font);
    setColor(settings.color);
    setAlarm(settings.alarm);

    localStorage.setItem("settings", JSON.stringify(settings));

    props.closeModal();
  };

  return (
    <Modal className={classes.settings}>
      <SettingsHeader closeModal={props.closeModal} />
      <TimeModifier
        settings={settings}
        dispatch={dispatchSettings}
        actions={ACTIONS}
      />
      <Selection
        settings={settings}
        actions={ACTIONS}
        dispatch={dispatchSettings}
        type="font"
      />
      <Selection
        settings={settings}
        actions={ACTIONS}
        dispatch={dispatchSettings}
        type="color"
      />
      <Selection
        settings={settings}
        actions={ACTIONS}
        dispatch={dispatchSettings}
        type="audio"
      />
      <Button
        onClick={onApplyHandler}
        className={classes["apply-settings-btn"]}>
        Apply
      </Button>
    </Modal>
  );
};

export default SettingsModal;
