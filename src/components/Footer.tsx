import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-40 relative flex items-center">
                <img src="/logo.png" alt="Mecânica Alnajar Logo" className="w-full h-auto object-contain" />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Oficina mecânica premium especializada em Câmbios Manuais e Automáticos, PowerShift, CVT e Mecânica Geral.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/mecanica_alnajar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-dark-200 rounded-full flex items-center justify-center text-white hover:bg-brand transition-colors" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contato</h4>
            <div className="space-y-4">
              <a href="https://wa.me/5511965846438" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-brand transition-colors">
                <Phone className="w-5 h-5 mt-0.5 text-brand" />
                <span>(11) 96584-6438</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 text-brand flex-shrink-0" />
                <span>
                  Rua Miguel Arco e Flexa, 246<br />
                  Vila Euclides<br />
                  São Bernardo do Campo – SP<br />
                  CEP 09725-500
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Horário</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-gray-400 border-b border-white/5 pb-2">
                <span>Seg à Qui</span>
                <span className="text-white font-medium">08:00 – 18:00</span>
              </div>
              <div className="flex justify-between items-center text-gray-400 border-b border-white/5 pb-2">
                <span>Sexta</span>
                <span className="text-white font-medium text-right">08:00 – 12:00<br/>14:00 – 17:00</span>
              </div>
              <div className="flex justify-between items-center text-gray-400 border-b border-white/5 pb-2">
                <span>Sábado</span>
                <span className="text-white font-medium">08:30 – 14:00</span>
              </div>
              <div className="flex justify-between items-center text-gray-500">
                <span>Domingo</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
          
          {/* Map Link */}
          <div>
             <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Como Chegar</h4>
             <a 
                href="https://maps.google.com/?q=Rua+Miguel+Arco+e+Flexa,+246+-+Vila+Euclides,+São+Bernardo+do+Campo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-32 bg-dark-200 rounded-lg overflow-hidden group relative"
             >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-brand text-white px-4 py-2 rounded font-bold text-sm">Abrir Mapa</span>
                </div>
             </a>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-white/10 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Mecânica Alnajar. Todos os direitos reservados.</p>
          <p>São Bernardo do Campo - SP</p>
        </div>
      </div>
    </footer>
  );
}
