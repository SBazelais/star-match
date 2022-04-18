import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import StarMatch from "./StarMatch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StarMatch />
  </StrictMode>
);
