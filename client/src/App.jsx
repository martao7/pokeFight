import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Game from "./components/Game";
import Finish from "./components/Finish";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <header>header</header>
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
