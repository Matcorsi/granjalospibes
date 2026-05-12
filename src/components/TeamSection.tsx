import { motion } from 'framer-motion';

const featuredTeam = [
  {
    name: 'Emilio Fernandez',
    role: 'Encargado',
    image: '/images/f1.jpg'
  },
  {
    name: 'Juan',
    role: 'Veterinario',
    image: '/images/f2.jpg'
  },
  {
    name: 'Julio',
    role: 'Ambiental',
    image: '/images/f3.jpg'
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-6">
            Nuestro Equipo
          </h2>

          <p className="text-bark text-lg leading-relaxed">
            Somos un equipo comprometido con el rescate, la rehabilitación y la conservación
            de la fauna silvestre, trabajando cada día para generar conciencia y proteger
            nuestro entorno natural.
          </p>
        </motion.div>

        {/* FOTO GRUPAL (PROTAGONISTA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            
            <img
              src="/images/f5.jpg"
              alt="Equipo de Granja Los Pibes"
              className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover"
            />

            {/* Overlay suave tipo cinematográfico */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
              <div className="p-6 sm:p-10 text-white max-w-3xl">
                <h3 className="text-2xl sm:text-4xl font-serif font-bold mb-3">
                  Personas comprometidas con la vida silvestre
                </h3>

                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Cada rescate, cada rehabilitación y cada acción educativa
                  es posible gracias al trabajo colectivo de quienes forman parte
                  de este proyecto.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Integrantes destacados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="font-serif text-2xl font-bold text-earth mb-1">
                  {member.name}
                </h4>

                <p className="text-bark">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}