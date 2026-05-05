import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const partners = [
  { name: 'Valle de los Ciervos', logo: '/images/valle.png' },
  { name: 'Mundo Marino', logo: '/images/mundo.png' },
  { name: 'Greenpeace', logo: '/images/green.png' },
  { name: 'Temaiken', logo: '/images/temaiken.png' },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-4">
            Socios corporativos
          </h2>
          <p className="text-bark max-w-2xl mx-auto">
            Empresas y organizaciones que apoyan nuestra misión de rescate,
            rehabilitación y conservación de la fauna silvestre.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-16">
          {partners.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-cream-dark hover:shadow-md transition group"
            >
            <div className='flex flex-col'>
                <img
                src={p.logo}
                alt={p.name}
                className="max-h-16 object-contain group-hover:grayscale-0 transition duration-300 opacity-80 group-hover:opacity-100"
              />
              <span className="mt-3 text-sm text-bark text-center font-medium group-hover:text-earth transition-colors">
                {p.name}
              </span>
            </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-forest rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Convertite en socio corporativo
              </h3>
              <p className="text-white/80 max-w-xl">
                Sumate a marcar la diferencia. Las alianzas corporativas ofrecen
                oportunidades únicas de integración de equipos y compromiso con la comunidad.
              </p>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="shrink-0"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Aliate con nosotros
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}