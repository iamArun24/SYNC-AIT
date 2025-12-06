import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import Login from "./pages/Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";

export default function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="site-container">
          <main className="main">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
