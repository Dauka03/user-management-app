import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./utils/DataContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </DataProvider>
);
