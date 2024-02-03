import React from "react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createTheme , ThemeProvider  } from "@mui/material";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./app/store";
import './index.css';
import ToggleColorMode from './utils/colorMode';
const theme = createTheme({})
const root =createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <ToggleColorMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ToggleColorMode>
</Provider>,

)