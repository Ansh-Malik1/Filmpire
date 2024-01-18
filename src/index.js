import React from "react";
import  ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createTheme , ThemeProvider  } from "@mui/material";
import { createRoot } from 'react-dom/client';
const theme = createTheme({})
const root =createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme = {theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)