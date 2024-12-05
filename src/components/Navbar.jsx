import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0 text-2xl font-bold text-primary"
          >
            ElegantShop
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#" text="Home" />
              <NavLink href="#" text="Shop" />
              <NavLink href="#" text="Categories" />
              <NavLink href="#" text="About" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
            >
              <FiShoppingCart className="h-6 w-6 text-primary" />
              <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </motion.div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-secondary"
              >
                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <MobileNavLink href="#" text="Home" />
            <MobileNavLink href="#" text="Shop" />
            <MobileNavLink href="#" text="Categories" />
            <MobileNavLink href="#" text="About" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ href, text }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    className="text-primary hover:text-accent font-medium"
  >
    {text}
  </motion.a>
);

const MobileNavLink = ({ href, text }) => (
  <a
    href={href}
    className="block px-3 py-2 text-primary hover:text-accent font-medium"
  >
    {text}
  </a>
);

export default Navbar;