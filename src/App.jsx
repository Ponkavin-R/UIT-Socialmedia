import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StatsTotal from "./components/StatsTotal";
import StatsToday from "./components/StatsToday";
import Login from "./components/Login";
import Home from "./components/Home";
import StatsProvider from "./context/StatsProvider";
import RegisterForm from "./components/RegisterForm"; // Import the StatsProvider

function App() {
  return (
    <Router>
      <StatsProvider> {/* Wrap your components with StatsProvider */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todayuse" element={<StatsToday />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />

        </Routes>

      </StatsProvider>
    </Router>
  );
}

export default App;
