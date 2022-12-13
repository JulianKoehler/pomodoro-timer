import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ColorProvider from "./store/Color/ColorProvider";
import PhaseProvider from "./store/Phase/PhaseProvider";
import TimerProvider from "./store/Timer/TimerProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <PhaseProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </PhaseProvider>
    </ColorProvider>
  </React.StrictMode>
);
