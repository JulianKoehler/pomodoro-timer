import React from "react";
import Clock from "./components/Clock/Clock";
import Logo from "./components/Header/Logo";
import PhaseBar from "./components/Header/PhaseBar";
import GearButton from "./components/UI/GearButton";

function App() {
  return (
    <React.Fragment>
      <Logo />
      <PhaseBar />
      <Clock />
      <GearButton />
    </React.Fragment>
  );
}

export default App;
