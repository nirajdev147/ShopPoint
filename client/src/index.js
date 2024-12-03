import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SnackbarProvider } from "notistack";

// Only one render call is necessary
ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      autoHideDuration={2000} // Set the duration for 2 seconds
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root") // Ensure that this is pointing to the correct div in your index.html
);
