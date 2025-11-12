import React from 'react';

function Menu({ isOpen, toggleMenu, navigateTo, currentPage }) {
  return (
    <>
      {/* Menu Icon Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-gradient-to-b from-indigo-600 to-purple-700 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="container mx-auto px-6 py-20">
          <ul className="space-y-6 text-center">
            <li>
              <button
                onClick={() => navigateTo('home')}
                className={`text-3xl font-bold hover:text-indigo-200 transition-colors ${
                  currentPage === 'home' ? 'text-yellow-300' : ''
                }`}
              >
                Home / Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('contact')}
                className={`text-3xl font-bold hover:text-indigo-200 transition-colors ${
                  currentPage === 'contact' ? 'text-yellow-300' : ''
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
}

export default Menu;
