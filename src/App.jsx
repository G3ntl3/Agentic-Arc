// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Router
import Navbar from './components/Navbar'; // Adjust path
import Home from './pages/Home'; // Example pages—add yours
import EducationHub from './pages/Educationhub';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

// ... other imports

function App() {
  return (
    <>
    <Router> {/* Wrap here—Navbar and Routes become children */}
      <div className="App">
        <Navbar /> {/* Now in Router context */}
        
        {/* Your Routes—add all pages here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> If you have this
          <Route path="/education" element={<EducationHub />} />
          <Route path="/services" element={<Services />} /> {/* If you have this */}
          <Route path="*" element={<div>404: Not Found</div>} /> {/* Optional catch-all */}
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;