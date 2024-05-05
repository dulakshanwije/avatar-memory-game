import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:episode" element={<Game />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
);

export default function App() {
  return <>{routes}</>;
}
