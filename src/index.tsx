import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersonalPortfolio } from "./screens/PersonalPortfolio";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PersonalPortfolio />
  </StrictMode>,
);
