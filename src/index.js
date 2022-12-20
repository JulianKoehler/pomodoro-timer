import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import SettingsProvider from "./store/Settings/SettingsProvider";
import TimerProvider from "./store/Timer/TimerProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <TimerProvider>
        <App />
      </TimerProvider>
    </SettingsProvider>
  </React.StrictMode>
);
