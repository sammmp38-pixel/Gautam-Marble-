import React, { useState } from 'react';
import { Search, MapPin, Menu, User, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      setSearchQuery('');
      // Using console.log instead of alert which causes issues in iframes/mobile previews
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer space-x-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold">G</div>
            <span className="text-lg md:text-xl font-bold tracking-tighter uppercase text-black">Gautam Marble</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
            <a href="#" className="text-black border-b-2 border-black py-5">TILES</a>
            <a href="#" className="hover:text-black transition-colors py-5 border-b-2 border-transparent">BATHWARE</a>
            <a href="#" className="hover:text-black transition-colors py-5 border-b-2 border-transparent">MARBLE</a>
            <a href="#" className="hover:text-black transition-colors py-5 border-b-2 border-transparent">PLYWOOD</a>
            <a href="#" className="hover:text-black transition-colors py-5 border-b-2 border-transparent">EXPERIENCE CENTER</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 relative z-50">
            <button type="button" aria-label="Location" className="text-gray-400 hover:text-black transition-colors hidden md:block">
              <MapPin className="w-5 h-5" />
            </button>
            <button type="button" aria-label="User Profile" className="text-gray-400 hover:text-black transition-colors hidden md:block">
              <User className="w-5 h-5" />
            </button>
            <button 
              type="button"
              aria-label="Search"
              onClick={toggleSearch}
              className="text-gray-400 hover:text-black transition-colors pl-4 lg:border-l border-gray-200 cursor-pointer p-2"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              type="button"
              aria-label="Mobile Menu"
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-400 hover:text-black ml-2 cursor-pointer p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 md:px-10 py-6">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for tiles, marbles, bathware..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                    autoFocus
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded hover:bg-gray-800 transition-colors">
                    Search
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden"
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold">G</div>
                <span className="text-lg font-bold tracking-tighter uppercase text-black">Menu</span>
              </div>
              <button onClick={toggleMobileMenu} className="p-2 text-gray-500 hover:text-black">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-6">
              <nav className="flex flex-col space-y-6 text-sm font-bold uppercase tracking-widest text-gray-900 mb-8">
                <a href="#" className="border-b border-gray-100 pb-4">Tiles</a>
                <a href="#" className="border-b border-gray-100 pb-4">Bathware</a>
                <a href="#" className="border-b border-gray-100 pb-4">Marble</a>
                <a href="#" className="border-b border-gray-100 pb-4">Plywood</a>
                <a href="#" className="border-b border-gray-100 pb-4">Experience Center</a>
              </nav>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Contact Us</h4>
                <a href="tel:+9109078958414" className="flex items-center gap-3 text-sm text-gray-600 hover:text-black">
                  <Phone className="w-4 h-4" />
                  090789 58414
                </a>
                <a href="mailto:info@gautammarble.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-black">
                  <Mail className="w-4 h-4" />
                  info@gautammarble.com
                </a>
              </div>

              <div className="mt-8">
                <a 
                  href="https://wa.me/9109078958414?text=Hello, I would like to make an inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white py-4 flex justify-center text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
