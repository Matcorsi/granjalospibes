import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-earth text-cream-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div>
                <img src='/images/logo.jpg' alt='Logo - Granja Los Pibes' className="h-10 w-full" />
              </div>
              <span className="font-serif text-xl font-bold text-cream">
                Granja Los Pibes
              </span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed mb-6">
              Comprometidos con el rescate, la rehabilitación y la liberación de fauna silvestre.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-cream mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a
                  href="#about"
                  className="hover:text-forest transition-colors">

                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="hover:text-forest transition-colors">

                  Nuestros aliados
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-forest transition-colors">

                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Voluntarios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Donar
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-cream mb-6">Recursos educativos</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  ¿Encontraste un animal silvestre?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Consejos de fauna
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Centro educativo de fauna silvestre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Informes anuales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Politicas de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-cream mb-6">Mantenete salvaje</h4>
            <p className="text-sm text-cream/60 mb-4">
              Suscribite a nuestro boletín para conocer historias de rescate y actualizaciones.
            </p>
            <form
              className="flex flex-col space-y-3"
              onSubmit={(e) => e.preventDefault()}>

              <input
                type="email"
                placeholder="Ingresa tu email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-cream focus:outline-none focus:border-forest transition-colors" />

              <button className="bg-forest text-white text-sm font-medium py-2 rounded-lg hover:bg-forest-light transition-colors">
                Subscribite
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} Granja Los Pibes. All
            rights reserved.
          </p>
          <p className="mt-2 md:mt-0">Designed with Matco.</p>
        </div>
      </div>
    </footer>);

}