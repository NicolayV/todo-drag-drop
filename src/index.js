import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

import { store, persistor } from "./store";
import { App } from "./components/app/App";
// import { TestApp } from "./learnTest/TestApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      {/* <TestApp /> */}
    </PersistGate>
  </Provider>
);

// test
// story book

// typeScript

// public on git pages
