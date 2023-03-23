import React from "react";
import ComponentA from "./component/ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={"Deep"}>
      <ChannelContext.Provider value={"Patel"}>
        <ComponentA />
      </ChannelContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
