import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";

export function DocumentarySection() {
  return (
    <section id="preservar" className="py-20 bg-cream-dark/30 relative overflow-hidden">

      <div className="absolute inset-0">
        <img
          src="/images/fond.jpg"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-verde bg-forest/10 px-4 py-1 rounded-full text-sm mb-4">
            <Film className="h-4 w-4" />
            Documental
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
            Preservar para vivir
          </h2>

          <p className="text-cream mt-4 max-w-2xl mx-auto">
            Te invitamos a mirar nuestro documental para poder conocer,
            cuidar y conservar el lugar del cual somos parte.
          </p>
        </motion.div>

        {/* layout principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2"
        >
          

          {/* video */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px] bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AHZFRtVyC48"
              title="Preservar para vivir"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* texto */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-forest mb-3">
              Cortometraje documental
            </span>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-earth mb-4">
              Preservar para vivir
            </h3>

            <p className="text-bark leading-relaxed mb-6">
              Cortometraje documental sobre el ambiente de Tandil, para mirarnos
              y reconocernos en lo nuestro, en lo próximo, en lo cercano que,
              al fin de cuentas, nos constituye.
            </p>

            <a
              href="https://www.youtube.com/watch?v=AHZFRtVyC48"
              target="_blank"
              className="inline-flex items-center gap-2 text-forest font-semibold hover:gap-3 transition-all"
            >
              Ver en YouTube
              <Play className="h-4 w-4" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}