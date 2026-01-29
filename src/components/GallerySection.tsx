import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Stethoscope,
  Home,
  Leaf } from
'lucide-react';
const galleryCategories = [
{
  id: 'all',
  name: 'Todos',
  icon: Camera
},
{
  id: 'rescue',
  name: 'Rescates',
  icon: Heart
},
{
  id: 'care',
  name: 'Cuidados',
  icon: Stethoscope
},
{
  id: 'habitat',
  name: 'Hábitats',
  icon: Home
},
{
  id: 'release',
  name: 'Liberaciones',
  icon: Leaf
}];

const galleryItems = [
{
  id: 1,
  category: 'rescue',
  title: 'Rescate de ciervo herido',
  description: 'Encontrado en la carretera con una pata fracturada',
  color: 'from-amber-600 to-amber-800',
  image: '/images/f1.jpg'
},
{
  id: 2,
  category: 'care',
  title: 'Rehabilitación de búho',
  description: 'Sesión de fisioterapia para recuperar el vuelo',
  color: 'from-slate-600 to-slate-800',
  image: '/images/f2.jpg'
},
{
  id: 3,
  category: 'habitat',
  title: 'Nuevo recinto de aves',
  description: 'Espacio ampliado para aves en recuperación',
  color: 'from-emerald-600 to-emerald-800',
  image: '/images/f3.jpg'
},
{
  id: 4,
  category: 'release',
  title: 'Liberación de zorros',
  description: 'Tres zorros vuelven a su hábitat natural',
  color: 'from-orange-600 to-orange-800',
  image: '/images/f4.jpg'
},
{
  id: 5,
  category: 'rescue',
  title: 'Camada de erizos',
  description: 'Cinco crías huérfanas rescatadas',
  color: 'from-stone-600 to-stone-800',
  image: '/images/f5.jpg'
},
{
  id: 6,
  category: 'care',
  title: 'Alimentación de crías',
  description: 'Voluntarios alimentando a los más pequeños',
  color: 'from-rose-600 to-rose-800',
  image: '/images/f6.jpg'
},
{
  id: 7,
  category: 'habitat',
  title: 'Estanque renovado',
  description: 'Nuevo hogar para tortugas y anfibios',
  color: 'from-cyan-600 to-cyan-800',
  image: '/images/f7.jpg'
},
{
  id: 8,
  category: 'release',
  title: 'Águila recuperada',
  description: 'Después de 6 meses, vuela libre de nuevo',
  color: 'from-sky-600 to-sky-800',
  image: '/images/f8.jpg'
}];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const filteredItems =
  activeCategory === 'all' ?
  galleryItems :
  galleryItems.filter((item) => item.category === activeCategory);
  const currentIndex =
  selectedImage !== null ?
  filteredItems.findIndex((item) => item.id === selectedImage) :
  -1;
  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    const newIndex =
    direction === 'prev' ?
    (currentIndex - 1 + filteredItems.length) % filteredItems.length :
    (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex].id);
  };
  return (
    <section id="galeria" className="py-24 bg-cream-dark/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-forest/10 text-forest text-sm font-medium mb-6">
            <Camera className="h-4 w-4" />
            Nuestro Trabajo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-6">
            Galería de Rescates
          </h2>
          <p className="text-lg text-bark leading-relaxed">
            Cada imagen cuenta una historia de esperanza. Descubre el trabajo
            diario de nuestro equipo y los animales que hemos ayudado a lo largo
            de los años.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.4
          }}
          className="flex flex-wrap justify-center gap-3 mb-12">

          {galleryCategories.map((category) =>
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category.id ? 'bg-forest text-white shadow-lg shadow-forest/25' : 'bg-white text-bark hover:bg-cream-dark border border-cream-dark'}`}>

              <category.icon className="h-4 w-4" />
              {category.name}
            </button>
          )}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) =>
            <motion.div
              key={item.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05
              }}
              onClick={() => setSelectedImage(item.id)}
              className="group cursor-pointer">

                <div
                className={`aspect-square rounded-2xl bg-gradient-to-br ${item.color} overflow-hidden relative shadow-md group-hover:shadow-xl transition-shadow`}>

                  {/* Placeholder content */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                    <h3 className="font-bold text-white text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats bar */}
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
            duration: 0.6,
            delay: 0.3
          }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-forest">847</p>
              <p className="text-bark text-sm mt-1">Rescates documentados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-forest">92%</p>
              <p className="text-bark text-sm mt-1">Tasa de recuperación</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-forest">156</p>
              <p className="text-bark text-sm mt-1">Liberaciones este año</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-forest">45</p>
              <p className="text-bark text-sm mt-1">Especies diferentes</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-50 bg-earth/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>

            {/* Close button */}
            <button
            className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors"
            onClick={() => setSelectedImage(null)}>

              <X className="h-8 w-8" />
            </button>

            {/* Navigation */}
            <button
            className="absolute left-4 md:left-8 text-cream/80 hover:text-cream transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}>

              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
            className="absolute right-4 md:right-8 text-cream/80 hover:text-cream transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}>

              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Image content */}
            <motion.div
            key={selectedImage}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.9
            }}
            transition={{
              duration: 0.2
            }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}>

              {(() => {
              const item = galleryItems.find((i) => i.id === selectedImage);
              if (!item) return null;
              return (
                <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-h-[75vh] object-contain rounded-2xl"
                    />
                    <div className="mt-6 text-center">
                      <h3 className="font-serif text-2xl font-bold text-cream">
                        {item.title}
                      </h3>
                      <p className="text-cream/70 mt-2">{item.description}</p>
                    </div>
                  </>);

            })()}
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}