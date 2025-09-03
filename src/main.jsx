import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ValueContextProvider from "./Context/ValueContextProvider.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ValueContextProvider>
      <App />
    </ValueContextProvider>
  </StrictMode>
);
