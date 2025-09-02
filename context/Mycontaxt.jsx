import React, { createContext, useState } from "react";

export const mycontext = createContext();

function Mycontaxt({ children }) {
  const [user, setUser] = useState(null);

  const initialstate = { user, setUser};

  return (
    <mycontext.Provider value={initialstate}>{children}</mycontext.Provider>
  );
}

export default Mycontaxt;
