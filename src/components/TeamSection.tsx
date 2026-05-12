import { motion } from 'framer-motion';

const featuredTeam = [
  {
    name: 'Emilio Fernandez',
    role: '',
    image: '/images/f1.jpg'
  },
  {
    name: 'Juan',
    role: '',
    image: '/images/f2.jpg'
  },
  {
    name: 'Julio',
    role: '',
    image: '/images/f3.jpg'
  },
  {
    name: 'Lucía',
    role: '',
    image: '/images/f4.jpg'
  },
  {
    name: 'Martina',
    role: '',
    image: '/images/f5.jpg'
  },
  {
    name: 'Pedro',
    role: '',
    image: '/images/f6.jpg'
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-24 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-earth mb-5 md:mb-6">
            Nuestro Equipo
          </h2>

          <p className="text-bark text-base md:text-lg leading-relaxed">
            Somos un equipo comprometido con el rescate, la rehabilitación y la conservación
            de la fauna silvestre, trabajando cada día para generar conciencia y proteger
            nuestro entorno natural.
          </p>
        </motion.div>

        {/* FOTO GRUPAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/equipo.png"
              alt="Equipo de Granja Los Pibes"
              className="
                w-full
                h-auto
                object-contain
                          "
            />

          {/* MOBILE */}
          <div className="relative block md:hidden">

            {/* Degradé */}
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />

            {/* Texto */}
            <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">

              <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                Cada rescate, cada rehabilitación y cada acción educativa
                es posible gracias a ellos.
              </p>

            </div>

          </div>

        {/* DESKTOP */}
        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent items-end">
          <div className="p-10 text-white max-w-3xl">

            <h3 className="text-4xl font-serif font-bold mb-3 leading-tight">
              Nuestro equipo
            </h3>

            <p className="text-white/90 text-base leading-relaxed max-w-2xl">
              Cada rescate, cada rehabilitación y cada acción educativa
              es posible gracias al trabajo colectivo de quienes forman parte
              de este proyecto.
            </p>

          </div>
        </div>

          </div>
        </motion.div>

{/* COLLAGE EQUIPO */}
<div className="columns-2 md:columns-3 gap-4 space-y-4">

  {featuredTeam.map((member, index) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        break-inside-avoid
        group
        shadow-lg
      "
    >

      {/* Imagen */}
      <img
        src={member.image}
        alt={member.name}
        className={`
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-105

          ${
            index % 3 === 0
              ? 'h-[420px]'
              : index % 2 === 0
              ? 'h-[300px]'
              : 'h-[240px]'
          }
        `}
      />

      {/* Overlay */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/20
        to-transparent
      " />

      {/* Texto */}
      <div className="absolute bottom-0 left-0 p-4 md:p-5 text-white">

        <h4 className="font-serif text-base md:text-xl font-semibold leading-tight">
          {member.name}
        </h4>

        <p className="text-[11px] md:text-sm text-white/75">
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