import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppRoutes } from "@routes/AppRoutes";
import { store, persistor } from "@store/index";
import { PersistGate } from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);
