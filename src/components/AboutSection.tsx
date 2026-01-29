import { motion } from 'framer-motion';
import { Heart, Shield, Users, BookOpen, Activity, Sprout } from 'lucide-react';
const stats = [
{
  label: 'Rescates realizados',
  value: '2,500+',
  icon: Heart
},
{
  label: 'Atenciones a la comunidad',
  value: '1,200',
  icon: Shield
},
{
  label: 'Instituciones educativas alcanzadas',
  value: '150+',
  icon: Users
}];

const values = [
{
  title: 'Rescate',
  description: 'Respuesta y asistencia ante situaciones que afectan a la fauna silvestre.',
  icon: Activity
},
{
  title: 'Rehabilitación',
  description: 'Atención veterinaria, cuidados y procesos de recuperación adaptados a cada especie.',
  icon: Heart
},
{
  title: 'Liberación',
  description: 'Reinserción responsable de los animales recuperados en su hábitat natural.',
  icon: Sprout
},
{
  title: 'Educación',
  description: 'Concientización comunitaria, trabajo con escuelas y educación ambiental.',
  icon: BookOpen
}];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-cream overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            }}>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-8">
              Nuestra misión
            </h2>
            <div className="relative">
              <span className="absolute -top-6 -left-4 text-8xl text-forest/10 font-serif">
                "
              </span>
              <p className="text-xl md:text-2xl text-bark font-medium leading-relaxed italic">
                Creemos que conocer es el primer paso para cuidar.
                Por eso trabajamos en la concientización, el rescate y la conservación de la vida silvestre,
                protegiendo nuestro patrimonio natural y construyendo un futuro más justo para las personas y el planeta.
              </p>
              <span className="absolute -bottom-12 -right-4 text-8xl text-forest/10 font-serif leading-none">
                "
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
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
            className="bg-white p-8 rounded-2xl shadow-sm border border-cream-dark text-center group hover:border-forest/30 transition-colors">

              <div className="inline-flex p-4 rounded-full bg-forest/10 text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-earth mb-2">
                {stat.value}
              </h3>
              <p className="text-bark font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </p>
            </motion.div>
          )}
        </div>

        {/* Story & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            <h3 className="font-serif text-3xl font-bold text-earth mb-6">
              Años de compromiso con la vida silvestre
            </h3>
            <p className="text-bark leading-relaxed mb-6">
              Nuestro proyecto nace del trabajo constante y el compromiso con la conservación.
              A lo largo de los años, Granja Los Pibes se consolidó como un espacio dedicado al rescate,
              la atención y la protección de la fauna silvestre,
              articulando acciones ambientales, sociales y educativas con la comunidad.
            </p>
            <p className="text-bark leading-relaxed">
              Creemos que conocer es el primer paso para cuidar. Por eso,
              nuestro equipo y voluntarios trabajan día a día para brindar respuestas responsables ante situaciones de conflicto con la fauna,
              promoviendo la conservación y el respeto por la naturaleza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) =>
            <motion.div
              key={value.title}
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              className="bg-cream-dark/50 p-6 rounded-xl border border-transparent hover:border-forest/20 transition-colors">

                <value.icon className="h-6 w-6 text-sunset mb-3" />
                <h4 className="font-bold text-earth mb-2">{value.title}</h4>
                <p className="text-sm text-bark/80">{value.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Wavy Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] text-earth"
          data-name="Layer 1"
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