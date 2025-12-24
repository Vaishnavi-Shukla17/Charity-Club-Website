import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from "./pages/About";
import Donation from "./pages/Donation";
import Feedback from "./pages/Feedback";
import Volunteer from "./pages/Volunteer";
import './App.css';

function App() {
  return (
    <div className="app-root">
      <div className="container">
      <div className="page-wrap">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>

        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
