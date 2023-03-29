import React from "react";
import Counter1 from "./component/Counter1";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <Counter1 />
  );
}

export default App;
