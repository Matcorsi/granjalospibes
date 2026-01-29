import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Gift,
  CreditCard,
  Repeat,
  PawPrint,
  TreePine,
  Bird } from
'lucide-react';
import { Button } from './ui/Button';
const sponsorshipPlans = [
{
  icon: PawPrint,
  name: 'Padrino Amigo',
  price: '15€',
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
  price: '30€',
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
  price: '50€',
  period: '/mes',
  description: 'Apoyo integral: alimentación, veterinario y rehabilitación.',
  features: [
  'Todo lo del plan Protector',
  'Videollamada trimestral con cuidadores',
  'Acceso a eventos exclusivos',
  'Reconocimiento especial en redes'],

  popular: false
}];

const donationMethods = [
{
  icon: CreditCard,
  title: 'Tarjeta de Crédito',
  description: 'Donación segura con Visa, Mastercard o American Express.'
},
{
  icon: Repeat,
  title: 'Domiciliación Bancaria',
  description: 'Configura una donación recurrente desde tu cuenta.'
},
{
  icon: Gift,
  title: 'Donación Puntual',
  description: 'Contribuye con la cantidad que desees, cuando quieras.'
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
            Apadrina un Animal
          </h2>
          <p className="text-lg text-bark leading-relaxed">
            Tu apoyo mensual nos permite cuidar de los animales rescatados
            mientras se recuperan. Cada padrino es parte fundamental de nuestra
            familia y de la vida de estos animales.
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

          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Otras Formas de Donar
            </h3>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Si prefieres hacer una donación puntual o de otra manera, también
              puedes ayudarnos así:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donationMethods.map((method, index) =>
            <motion.div
              key={method.title}
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
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">

                <method.icon className="h-8 w-8 text-sunset mb-4" />
                <h4 className="font-bold text-lg mb-2">{method.title}</h4>
                <p className="text-cream/60 text-sm">{method.description}</p>
              </motion.div>
            )}
          </div>

          <div className="mt-10 text-center">
            <p className="text-cream/60 text-sm mb-4">
              Cuenta bancaria para transferencias:{' '}
              <span className="text-cream font-mono">
                ES12 3456 7890 1234 5678 9012
              </span>
            </p>
            <Button variant="secondary" size="lg">
              Hacer Donación Puntual
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

}