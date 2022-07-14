import React from "react";
import Components from "./Components/Components.js";
import * as Env from "./environments.js";
import Parse from "parse";
import DarkMode from "./Components/DarkMode.tsx";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return( 
    <><div className="App">
    <header className="App-header">
      <DarkMode />
    </header>
  </div>
  
  <Components /></>);
}

export default App;