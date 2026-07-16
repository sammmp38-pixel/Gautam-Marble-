import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8 space-x-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold">G</div>
              <span className="text-xl font-bold tracking-tighter uppercase text-black">Gautam Marble</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-gray-500 max-w-sm">
              Transforming spaces with unparalleled quality and design. India's finest manufacturer of premium marble, vitrified tiles, and luxury bathware.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base text-gray-900 font-medium mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Bathroom</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Kitchen</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Living Room</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Bedroom</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Outdoor</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Commercial Spaces</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Staircases</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Countertops Slabs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Elevation Tiles</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base text-gray-900 font-medium mb-6">Categories</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Glazed Vitrified Tiles</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Gres Tiles</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Polished Vitrified Tiles</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Ceramic Wall Tiles</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Faucets and Sanitaryware</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Tile Adhesive</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-base text-gray-900 font-medium mb-6">Corporate Office</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="space-y-5 text-sm text-gray-500">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Barapali Town, Barpali, Odisha 768029</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>090789 58414</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>info@gautammarble.com</span>
                </li>
              </ul>
              <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-200">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.951011048895!2d83.57523173007671!3d21.176461947230232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a273fbac7792695%3A0xea8fcdaedbc1b1c7!2sBarapali%20Town%2C%20Barpali%2C%20Odisha%20768029!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gautam Marble Limited</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-black transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
