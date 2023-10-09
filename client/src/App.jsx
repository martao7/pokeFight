import { useState } from "react";
import Welcome from "./components/Welcome"
import Game from "./components/Game"
import Finish from "./components/Finish"

import "./App.css";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
