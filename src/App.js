import { useContext, useState } from "react";
import Clock from "./components/Clock/Clock";
import LogoImage from "./components/Header/Logo";
import PhaseBar from "./components/Header/PhaseBar";
import SettingsModal from "./components/Settings/SettingsModal";
import GearButton from "./components/UI/GearButton";

import SettingsContext from "./store/Settings/settings-context";
import GlobalStyles from "./styles/Global";

function App() {
  const { font } = useContext(SettingsContext);

  const [showSettings, setShowSettings] = useState(false);

  const closeModalHandler = () => {
    setShowSettings(false);
  };

  return (
    <>
      <GlobalStyles font={font} />
      <LogoImage
        width="156px"
        height="32px"
        blockElement={true}
        margin={"2.5rem auto 3.4375rem"}
      />
      <PhaseBar />
      <Clock />
      <GearButton onClick={() => setShowSettings(true)} />
      {showSettings && <SettingsModal closeModal={closeModalHandler} />}
    </>
  );
}

export default App;
