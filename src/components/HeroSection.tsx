import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-earth">
        
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.webm" type="video/webm" />
      </video>


      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Decorative Organic Shapes/Silhouettes - Wavy bottom effect */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto text-black"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg">

          <path
            fill="currentColor"
            fillOpacity="0.5"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-auto text-cream"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg">

          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="max-w-4xl mx-auto">

          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cream text-xs sm:text-sm font-medium tracking-wider mb-6">
            DESDE 2012 • CUIDANDO Y PROTEGIENDO LA VIDA SILVESTRE
          </span>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-cream mb-2 leading-tight">
            CONOCER PARA <br />
            <span className="text-green-500 italic">CUIDAR Y CONSERVAR</span>
          </h1>

          <p className="text-sm md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Promovemos el conocimiento para cuidar y conservar la flora y la fauna silvestre,
            concientizando a la comunidad a través del rescate, la rehabilitación y la liberación responsable de animales,
            y fortaleciendo el vínculo entre las personas, la naturaleza y las futuras generaciones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto group bg-green-500 hover:bg-green-700">

              Apoyá nuestra misión
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-green-500 text-green-500 hover:bg-green-700 hover:text-cream">

              Conocé más
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-cream/60 flex flex-col items-center">

        <span className="text-xs text-green-600 uppercase tracking-widest mb-2">
          Deslizá para explorar
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut'
          }}>

          <ChevronDown className="text-green-600 h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>);

}