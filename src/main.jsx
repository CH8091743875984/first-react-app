import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Greeting, FavoriteFood } from "./Greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
  </StrictMode>
);

//run npm run dev to launch the server
//go to localhost:5173
