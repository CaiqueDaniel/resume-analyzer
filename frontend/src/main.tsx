import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./views/pages/HomePage";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
