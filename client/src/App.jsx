import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<GameRules />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
