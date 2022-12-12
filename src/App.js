import React, { useContext } from "react";
import Clock from "./components/Clock/Clock";
import LogoImage from "./components/Header/Logo";
import PhaseBar from "./components/Header/PhaseBar";
import GearButton from "./components/UI/GearButton";

import ColorContext from "./store/Color/color-context";

function App() {
  const colorCtx = useContext(ColorContext);

  return (
    <React.Fragment>
      <LogoImage
        width="156px"
        height="32px"
        blockElement={true}
        margin={"3rem auto"}
      />
      <PhaseBar />
      <Clock />
      <GearButton />
    </React.Fragment>
  );
}

export default App;
