import { motion } from 'framer-motion';
import { Button } from './ui/Button';
const partners = [
{
  name: 'EcoSystems Inc',
  tier: 'Gold'
},
{
  name: 'GreenEarth Foundation',
  tier: 'Gold'
},
{
  name: 'WildLife Gear Co',
  tier: 'Silver'
},
{
  name: 'Forest Friends',
  tier: 'Silver'
},
{
  name: 'Nature Photography',
  tier: 'Bronze'
},
{
  name: 'Local Vet Clinic',
  tier: 'Bronze'
},
{
  name: 'Organic Market',
  tier: 'Bronze'
},
{
  name: 'Trail Runners Club',
  tier: 'Bronze'
}];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          className="mb-16">

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth mb-6">
            Our Partners in Conservation
          </h2>
          <p className="text-bark text-lg max-w-2xl mx-auto">
            We are grateful for the generous support of these organizations who
            share our commitment to wildlife preservation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {partners.map((partner, index) =>
          <motion.div
            key={partner.name}
            initial={{
              opacity: 0,
              scale: 0.9
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
            className="bg-white aspect-[3/2] rounded-xl shadow-sm border border-cream-dark flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow group">

              <div
              className={`w-12 h-12 rounded-full mb-3 flex items-center justify-center ${partner.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' : partner.tier === 'Silver' ? 'bg-gray-100 text-gray-600' : 'bg-orange-100 text-orange-700'}`}>

                <span className="font-bold text-xs uppercase">
                  {partner.tier[0]}
                </span>
              </div>
              <span className="font-serif font-bold text-earth group-hover:text-forest transition-colors">
                {partner.name}
              </span>
            </motion.div>
          )}
        </div>

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
            duration: 0.6,
            delay: 0.4
          }}
          className="bg-forest rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Become a Corporate Partner
              </h3>
              <p className="text-white/80 max-w-xl">
                Join us in making a difference. Corporate partnerships offer
                unique opportunities for team building and community engagement.
              </p>
            </div>
            <Button variant="secondary" size="lg" className="shrink-0">
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

}