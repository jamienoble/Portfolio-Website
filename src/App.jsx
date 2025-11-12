import React, { useState } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-bglight">
      <Menu 
        isOpen={menuOpen} 
        toggleMenu={toggleMenu} 
        navigateTo={navigateTo}
        currentPage={currentPage}
      />
      
      <div className="transition-all duration-300">
        {currentPage === 'home' ? <Home /> : <Contact />}
      </div>
    </div>
  );
}

export default App;
