import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
const timeline = [
{
  year: '2008',
  title: 'Los Primeros Pasos',
  description:
  'Todo comenzó con un pequeño terreno y el sueño de crear un refugio para animales en peligro. María y Juan, los fundadores, rescataron sus primeros 5 animales.',
  icon: MapPin
},
{
  year: '2012',
  title: 'Crecimiento y Comunidad',
  description:
  'La granja se expandió a 10 hectáreas. Se unieron los primeros voluntarios y comenzamos a recibir apoyo de la comunidad local.',
  icon: Users
},
{
  year: '2018',
  title: 'Reconocimiento Oficial',
  description:
  'Obtuvimos el reconocimiento como ONG oficial y establecimos alianzas con veterinarios y organizaciones de conservación.',
  icon: Award
},
{
  year: '2024',
  title: 'Hoy',
  description:
  'Más de 200 animales rescatados, un equipo de 50 voluntarios activos y programas educativos que llegan a miles de personas cada año.',
  icon: Calendar
}];

export function HistorySection() {
  return (
    <section
      id="historia"
      className="py-24 bg-earth text-cream relative overflow-hidden">

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
          className="max-w-3xl mb-20">

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Nuestra Historia
          </h2>
          <p className="text-xl text-cream/70 leading-relaxed">
            Desde un pequeño sueño hasta convertirnos en un refugio de esperanza
            para cientos de animales. Esta es la historia de cómo la pasión y el
            compromiso pueden cambiar vidas.
          </p>
        </motion.div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            {/* Image placeholder - organic shape */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-forest to-forest-dark overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <img
                      src="/images/granja.jpg"
                      alt="Granja Los Pibes"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sunset/30 rounded-3xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="flex flex-col justify-center">

            <blockquote className="relative mb-8">
              <span className="absolute -top-4 -left-2 text-6xl text-forest font-serif">
                "
              </span>
              <p className="text-2xl md:text-3xl font-serif italic text-cream/90 leading-relaxed pl-8">
                Cada animal que llega a nuestra granja tiene una historia.
                Nuestra misión es darles un nuevo capítulo lleno de amor y
                cuidado.
              </p>
              <span className="absolute -bottom-8 right-0 text-6xl text-forest font-serif">
                "
              </span>
            </blockquote>
            <div className="pl-8 mt-8">
              <p className="font-bold text-cream">Emilio Fernandez</p>
              <p className="text-cream/60 text-sm">Encargado</p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-forest/50 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) =>
            <motion.div
              key={item.year}
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
                duration: 0.5,
                delay: index * 0.1
              }}
              className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sunset border-4 border-earth z-10" />

                {/* Content */}
                <div
                className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>

                  <div
                  className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                    <item.icon className="h-5 w-5 text-sunset" />
                    <span className="text-sunset font-bold text-lg">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Wavy divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FDF8F0">
          </path>
        </svg>
      </div>
    </section>);

}