import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalProvider } from "./shared/hooks/useGlobalContext";
import {DataProvider} from "./shared/hooks/useDataContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <GlobalProvider>
        <DataProvider>
      <App />
        </DataProvider>
    </GlobalProvider>
);
