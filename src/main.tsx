import ReactDOM from "react-dom/client";
import App from "./App.js";
import { AppProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
