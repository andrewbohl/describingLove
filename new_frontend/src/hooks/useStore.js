import React from "react";
import {useLocalStore, observer} from "mobx-react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => {
    theme: {
      background: "#FFFFF";
    }
  });
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export default observer(StoreProvider);