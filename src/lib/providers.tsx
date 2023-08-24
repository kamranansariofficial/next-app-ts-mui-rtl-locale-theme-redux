"use client";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import { reduxStore, persistor } from "@/lib/redux";
import { PersistGate } from "redux-persist/integration/react";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={false} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};
