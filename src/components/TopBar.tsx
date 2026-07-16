import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-50 text-gray-500 border-b border-gray-100 text-[10px] font-bold py-3 px-10 flex justify-between items-center hidden md:flex uppercase tracking-widest">
      <div className="flex space-x-6 items-center">
        <a href="tel:+9109078958414" className="hover:text-black transition-colors flex items-center gap-2">
          <Phone className="w-3 h-3" />
          Call: 090789 58414
        </a>
        <a href="#" className="hover:text-black transition-colors flex items-center gap-2">
          <Mail className="w-3 h-3" />
          info@gautammarble.com
        </a>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-black transition-colors">Export</a>
        <a href="#" className="hover:text-black transition-colors">Investors</a>
        <a href="#" className="hover:text-black transition-colors">Media</a>
        <a href="#" className="hover:text-black transition-colors">Careers</a>
        <a href="#" className="hover:text-black transition-colors">Contact Us</a>
      </div>
    </div>
  );
}
