import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import MyProjects from './MyProjects';
import MyServices from './MyServices';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Footer from './Footer'; // Import Footer

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/my-projects" element={<MyProjects />} />
                <Route path="/my-services" element={<MyServices />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer /> {/* Add Footer */}
        </Router>
    );
}

export default App;
