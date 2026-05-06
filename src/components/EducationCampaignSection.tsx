import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Leaf, Users } from 'lucide-react';
import { Button } from './ui/Button';

export function EducationCampaignSection() {
  return (
    <section className="relative pt-24 pb-32 bg-earth text-cream overflow-hidden">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/dique.png"
          alt="Conocer para Cuidar"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase bg-verde/20 border border-verde/30 rounded-full text-verde">
            Nuevo proyecto educativo
          </span>

          <div className="flex items-center gap-3 mt-4 mb-6">
            <img
              src="/images/conocer.png"
              alt="Icono Conocer para Cuidar"
              className="w-9 h-9 md:w-12 md:h-12 object-contain relative top-[2px]"
            />

            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-none">
              Conocer para <span className="text-verde">Cuidar</span>
            </h2>
          </div>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto lg:mx-0"
          >

            <p className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed">
              Una iniciativa que nace de la unión entre{" "}
              <span className="text-verde font-semibold">Granja Los Pibes</span>{" "}
              y{" "}
              <span className="text-verde font-semibold">Valle de los Ciervos</span>,{" "}
              para crear experiencias educativas que conecten a las personas con la
              naturaleza, promoviendo el respeto por la flora y fauna silvestre.
            </p>

            {/* FEATURES (REEMPLAZO) */}
            <div className="space-y-6 mb-10">

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-verde/10">
                  <BookOpen className="h-6 w-6 text-verde" />
                </div>
                <div>
                  <h4 className="font-semibold text-cream">
                    Educación ambiental
                  </h4>
                  <p className="text-sm text-cream/70">
                    Programas educativos para público en general.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-verde/10">
                  <Leaf className="h-6 w-6 text-verde" />
                </div>
                <div>
                  <h4 className="font-semibold text-cream">
                    Conexión con la naturaleza
                  </h4>
                  <p className="text-sm text-cream/70">
                    Experiencias responsables con flora y fauna nativa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-verde/10">
                  <Users className="h-6 w-6 text-verde" />
                </div>
                <div>
                  <h4 className="font-semibold text-cream">
                    Impacto comunitario
                  </h4>
                  <p className="text-sm text-cream/70">
                    Concientización y participación activa de la comunidad.
                  </p>
                </div>
              </div>

            </div>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-verde text-white hover:bg-forest"
                onClick={() => {
                  window.open("https://conocerparacuidar.com.ar", "_blank");
                }}
              >
                Visitar proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-cream text-cream hover:bg-cream hover:text-earth"
                onClick={() => {
                  window.open("https://conocerparacuidar.com.ar/lagodelfuerte", "_blank");
                }}
              >
                Lago del Fuerte
              </Button>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/dique.png"
                alt="Conocer para Cuidar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-verde/30 rounded-3xl -z-10" />
          </motion.div>

        </div>

      </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
                className="relative block w-[calc(100%+1.3px)] h-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                d="M0,0V46.29c47.79,22,103.59,32,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08C862.77,72,924.84,40,985.66,26.77c66.67-14.5,133.91-4.61,214.34,13.08V0Z"
                fill="#F5E6D3"
                />
            </svg>
        </div>

    </section>
  );
}