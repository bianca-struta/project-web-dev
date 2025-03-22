import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="font-alegreya text-xl font-bold">ModernSolutions</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  clsx(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  clsx(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  clsx(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;