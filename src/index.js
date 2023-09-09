import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AppContextProvider>
  </>
);

// export const server = "http://localhost:5000";

export const server = "https://pb-backend.vercel.app";
