import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/Button';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-earth text-cream relative overflow-hidden">

      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
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

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
               Contactanos
            </h2>
            <p className="text-cream/70 mb-12 text-lg">
              ¿Encontraste un animal herido? ¿Querés dejarnos algun mensaje? Nos encantaría escucharte.
              Ante emergencias, comunicate de inmediato con nuestra línea telefónica.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-forest p-3 rounded-full shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Visitá nuestro centro</h3>
                  <p className="text-cream/70">
                    1234 Wilderness Way
                    <br />
                    Redwood Valley, CA 95470
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-forest p-3 rounded-full shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Línea de emergencias</h3>
                  <p className="text-cream/70">
                    (555) 123-4567{' '}
                    <span className="text-sunset font-medium ml-2">
                      • 24/7 Available
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-forest p-3 rounded-full shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Escribinos</h3>
                  <p className="text-cream/70">help@wildhaven.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-forest p-3 rounded-full shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Horarios de visita</h3>
                  <p className="text-cream/70">
                    Mon-Fri: 10am - 4pm
                    <br />
                    Sat-Sun: 9am - 5pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
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
            className="bg-cream p-8 md:p-10 rounded-2xl shadow-xl text-earth">

            <h3 className="font-serif text-2xl font-bold mb-6">
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-bark mb-2">

                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-cream-dark/30 border border-cream-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
                    placeholder="Jane Doe" />

                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-bark mb-2">

                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-cream-dark/30 border border-cream-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
                    placeholder="jane@example.com" />

                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-bark mb-2">

                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-cream-dark/30 border border-cream-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors">

                  <option>General Inquiry</option>
                  <option>Volunteer Opportunities</option>
                  <option>Report Wildlife Sighting</option>
                  <option>Donation Question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-bark mb-2">

                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-cream-dark/30 border border-cream-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors resize-none"
                  placeholder="How can we help?">
                </textarea>
              </div>

              <Button type="submit" className="w-full justify-center">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}