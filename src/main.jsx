import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Mycontaxt from "../context/Mycontaxt.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Mycontaxt>
        <App />
      </Mycontaxt>
    </BrowserRouter>
  </StrictMode>
);
