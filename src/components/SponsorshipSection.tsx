import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import {Heart, PawPrint, TreePine, Bird } from 'lucide-react';
import { Button } from './ui/Button';
const sponsorshipPlans = [
{
  icon: PawPrint,
  name: 'Padrino Amigo',
  price: '5000$',
  period: '/mes',
  description:
  'Ayuda a cubrir la alimentación básica de un animal rescatado.',
  features: [
  'Certificado digital de padrino',
  'Actualizaciones mensuales por email',
  'Nombre en el muro de padrinos'],

  popular: false
},
{
  icon: Bird,
  name: 'Padrino Protector',
  price: '10000$',
  period: '/mes',
  description: 'Cubre alimentación y cuidados veterinarios básicos.',
  features: [
  'Todo lo del plan Amigo',
  'Foto personalizada de tu ahijado',
  'Visita guiada anual a la granja',
  'Kit de bienvenida físico'],

  popular: true
},
{
  icon: TreePine,
  name: 'Padrino Guardián',
  price: '15000$',
  period: '/mes',
  description: 'Apoyo integral: alimentación, veterinario y rehabilitación.',
  features: [
  'Todo lo del plan Protector',
  'Videollamada trimestral con cuidadores',
  'Acceso a eventos exclusivos',
  'Reconocimiento especial en redes'],

  popular: false
}];


export function SponsorshipSection() {
  return (
    <section id="apadrinar" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sunset/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />

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
          className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-sunset/10 text-sunset text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            Hazte Padrino
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-6">
            Apadrina a la granja
          </h2>
          <p className="text-lg text-bark leading-relaxed">
            Con tu aporte, apoyás la educación de niños y el rescate de fauna silvestre, contribuyendo de forma directa a su cuidado y recuperación.
            Sumate como padrino y ayudanos a seguir generando impacto.
          </p>
        </motion.div>

        {/* Sponsorship Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {sponsorshipPlans.map((plan, index) =>
          <motion.div
            key={plan.name}
            initial={{
              opacity: 0,
              y: 30
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
            className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${plan.popular ? 'border-forest shadow-xl scale-105' : 'border-cream-dark hover:border-forest/30'}`}>

              {plan.popular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-forest text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Más Popular
                  </span>
                </div>
            }

              <div
              className={`inline-flex p-3 rounded-xl mb-6 ${plan.popular ? 'bg-forest text-white' : 'bg-forest/10 text-forest'}`}>

                <plan.icon className="h-7 w-7" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-earth mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-forest">
                  {plan.price}
                </span>
                <span className="text-bark">{plan.period}</span>
              </div>

              <p className="text-bark/80 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) =>
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-bark">

                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sunset shrink-0" />
                    {feature}
                  </li>
              )}
              </ul>

              <Button
              variant={plan.popular ? 'primary' : 'outline'}
              className="w-full justify-center">

                Elegir Plan
              </Button>
            </motion.div>
          )}
        </div>

        {/* Other Donation Methods */}
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
          className="bg-earth rounded-3xl p-8 md:p-12 text-cream">

          <section className="relative py-20 px-6">
            {/* Fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A0F] via-[#2B2B2B] to-[#3E2723] rounded-3xl"></div>
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

            <div className="relative max-w-6xl mx-auto">
              
              {/* Header */}
              <div className="text-center mb-16">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-cream drop-shadow-hero">
                  Únete a Nuestra Misión
                </h3>

                <div className="w-20 h-1 bg-verde mx-auto rounded-full mb-6"></div>

                <p className="text-cream/80 max-w-2xl mx-auto">
                  En Granja Los Pibes creemos en el poder de la comunidad para generar un impacto real 
                  en la vida de los niños y en la conservación de la fauna silvestre. 
                  Sumate y sé parte del cambio.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Card 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                  
                  <div className="h-56 overflow-hidden">
                    <img 
                      src="/images/f1.jpg" 
                      alt="Difusión"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-2 text-cream">
                      Corre la Voz
                    </h4>
                    <p className="text-cream/70 text-sm">
                      Comparte nuestra misión en tus redes sociales y en tu comunidad.
                      Cuantas más personas conozcan nuestra labor, más impacto podremos generar.
                      Síguenos en nuestras redes sociales, comparte nuestras publicaciones y etiqueta a tus amigos y familiares.
                      Juntos podemos crear conciencia y llegar a más personas dispuestas a hacer la diferencia.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                  
                  <div className="h-56 overflow-hidden">
                    <img 
                      src="/images/f6.jpg" 
                      alt="Naturaleza"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-2 text-cream">
                      Cuidar y Conservar
                    </h4>
                    <p className="text-cream/70 text-sm">
                      El cuidado del medio ambiente es responsabilidad de todos. Te invitamos a tomar conciencia y seguir buenas prácticas en tu día a día.
                      Recuerda la importancia de respetar y proteger la naturaleza que nos rodea. No seas parte del tráfico ilegal de animales,
                      reduce tu huella ecológica, apoya la conservación de los espacios naturales y promueve el respeto hacia todas las formas de vida.
                      Cada pequeña acción suma en la preservación de nuestro entorno.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              

                <div className="mt-16 text-center">
                  <p className="text-cream/80 max-w-xl mx-auto mb-6">
                    También podés apoyarnos difundiendo nuestra misión en redes sociales.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">

                    <a
                      href="https://instagram.com/granja_los_pibes/" 
                      target="_blank"
                      className="flex items-center gap-2 bg-white/5 hover:bg-verde/20 border border-white/10 px-5 py-3 rounded-full text-cream transition"
                    >
                      <Instagram size={18} />
                      Instagram
                    </a>

                    <a
                      href="https://www.facebook.com/GranjaLosPibes/"
                      target="_blank"
                      className="flex items-center gap-2 bg-white/5 hover:bg-verde/20 border border-white/10 px-5 py-3 rounded-full text-cream transition"
                    >
                      <Facebook size={18} />
                      Facebook
                    </a>

                    <a
                      href="https://www.youtube.com/@granjalospibes/"
                      target="_blank"
                      className="flex items-center gap-2 bg-white/5 hover:bg-verde/20 border border-white/10 px-5 py-3 rounded-full text-cream transition"
                    >
                      <Youtube size={18} />
                      YouTube
                    </a>

                    <a
                      href="https://wa.me/message/MGKRGV2LBP5CK1"
                      target="_blank"
                      className="flex items-center gap-2 bg-verde hover:bg-verde/80 px-5 py-3 rounded-full text-white font-semibold transition"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>

                  </div>

                <p className="mt-6 text-cream font-semibold text-xl">
                  ¡Juntos podemos marcar la diferencia!
                </p>
              </div>

            </div>
          </section>
        </motion.div>
      </div>
    </section>);
}