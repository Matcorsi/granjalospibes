import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export function GallerySection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const data = [
        { id: 1, image: '/images/f1.jpg', caption: 'Rescate de fauna silvestre 🐾' },
        { id: 2, image: '/images/f2.jpg', caption: 'Rehabilitación de animales 💚' },
        { id: 3, image: '/images/f3.jpg', caption: 'Trabajo diario en la granja 🌿' },
        { id: 4, image: '/images/f4.jpg', caption: 'Liberación en hábitat natural 🕊️' },
        { id: 5, image: '/images/f5.jpg', caption: 'Cuidado veterinario 🩺' },
        { id: 6, image: '/images/f6.jpg', caption: 'Educación ambiental 🌎' }
      ];

      setPosts(data);
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section id="novedades" className="py-24 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-pink-500/10 text-pink-600 text-sm font-medium mb-6">
            <Instagram className="h-4 w-4" />
            Novedades
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-6">
            Últimas publicaciones
          </h2>

          <p className="text-lg text-bark leading-relaxed">
            Seguinos en nuestro día a día. Rescates, liberaciones, educación ambiental y todo el trabajo que hacemos en la granja.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">

          {posts.slice(0, 6).map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/granja_los_pibes/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md bg-black"
            >
              {/* IMAGE */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">

                {/* ICON + TITLE */}
                <div className="flex items-start gap-2 mb-1">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                    <Instagram size={16} className="text-white" />
                  </div>

                  <div>
                    <p className="text-white font-semibold text-sm md:text-base leading-snug">
                      {post.caption}
                    </p>

                    <p className="text-white/60 text-xs mt-1">
                      Granja Los Pibes
                    </p>
                  </div>
                </div>

                {/* LABEL */}
                <span className="text-white/60 text-xs mt-2">
                  Ver publicación →
                </span>
              </div>
            </motion.a>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://instagram.com/granja_los_pibes/"
            target="_blank"
            className="inline-flex items-center gap-2 bg-verde text-white px-7 py-3 rounded-full transition shadow-md hover:shadow-lg"
          >
            <Instagram size={18} />
            Ver más de nuestro trabajo
          </a>
        </div>

      </div>
    </section>
  );
}