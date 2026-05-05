import { motion } from 'framer-motion';
const team = [
  {
    name: 'Emilio Fernandez',
    role: 'Encargado',
    image: '/images/f1.jpg'
  },
  {
    name: 'Marcelito',
    role: 'Rescate y Rehabilitación',
    image: '/images/f2.jpg'
  },
  {
    name: 'German',
    role: 'Educación Ambiental',
    image: '/images/f3.jpg'
  },
  {
    name: 'Yani',
    role: 'Voluntariado',
    image: '/images/f4.jpg'
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-16">

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-6">
            Nuestro equipo de trabajo
          </h2>
          <p className="text-bark text-lg max-w-2xl mx-auto">
            Profesionales comprometidos que dedican su esfuerzo al rescate,
            cuidado y conservación de la fauna silvestre, trabajando cada día por un futuro más consciente y sostenible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {team.map((member, index) =>
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-cream-dark flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow group"
          >

            {/* Imagen */}
            <div className="w-56 h-56 mb-3 rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Nombre */}
            <span className="font-serif font-bold text-earth group-hover:text-forest transition-colors text-center">
              {member.name}
            </span>

            {/* Rol */}
            <span className="text-sm text-bark text-center">
              {member.role}
            </span>

          </motion.div>
        )}
        </div>

    
      </div>
    </section>);

}