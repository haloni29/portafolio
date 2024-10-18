import React from "react";
import ReactDom from "react-dom/client"
import { cambioPagina } from "./app"

ReactDom.createRoot(document.getElementById("Content")).render(
    <React.StrictMode>
        <cambioPagina/>
    </React.StrictMode>
)