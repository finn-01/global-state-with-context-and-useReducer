import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
  rootElement
);
