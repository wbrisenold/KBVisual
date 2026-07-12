import { createRoot } from "react-dom/client";
import { Theme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";
import App from "./App";
import "@astryxdesign/core/astryx.css";
import "@astryxdesign/theme-neutral/theme.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Theme theme={neutralTheme} mode="light">
    <App />
  </Theme>,
);
