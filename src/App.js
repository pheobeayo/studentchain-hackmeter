import React from "react";
import AllRoutes from "./config/AllRoutes";
import { configureWeb3Modal } from "./connection";
import 'reactjs-popup/dist/index.css'


configureWeb3Modal();

function App() {

  return (
    <div>
      <AllRoutes />
    </div>

  );
}

export default App;
