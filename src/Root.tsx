import { ComponentType } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorLogging";
import { Provider } from "react-redux";
import { store, persister } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import "./styles/base/normalize.scss";
import "./styles/base/_fonts.scss";
import "./styles/base/_typography.scss";
// import './styles/base/globalStyles.scss'
import "./styles/base/input.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default render;
