import React from "react";
import RouterPath from "./routes/RouterPath";
import ShowEmp from "./Compnents/showEmp/ShowEmp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      {/* <ShowEmp /> */}

      <RouterPath />
      <Toaster />
    </div>
  );
}

export default App;
