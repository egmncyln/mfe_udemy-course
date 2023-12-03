import App from "./App";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Mount function to start up the app
const mount = (el: Element) => {
  const root = createRoot(el);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root");
  devRoot && mount(devRoot);
}

// We are running through container
// and we should export the mount function
export { mount };
