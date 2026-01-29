import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-earth text-cream-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-forest" />
              <span className="font-serif text-xl font-bold text-cream">
                WildHaven
              </span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed mb-6">
              Dedicated to the rescue, rehabilitation, and release of injured
              and orphaned wildlife since 2012.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-sunset transition-colors">

                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a
                  href="#about"
                  className="hover:text-forest transition-colors">

                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="hover:text-forest transition-colors">

                  Our Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-forest transition-colors">

                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-cream mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Found an Animal?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Wildlife Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Education Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-cream mb-6">Stay Wild</h4>
            <p className="text-sm text-cream/60 mb-4">
              Subscribe to our newsletter for rescue stories and updates.
            </p>
            <form
              className="flex flex-col space-y-3"
              onSubmit={(e) => e.preventDefault()}>

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-cream focus:outline-none focus:border-forest transition-colors" />

              <button className="bg-forest text-white text-sm font-medium py-2 rounded-lg hover:bg-forest-light transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} WildHaven Rescue Center. All
            rights reserved.
          </p>
          <p className="mt-2 md:mt-0">Designed with nature in mind.</p>
        </div>
      </div>
    </footer>);

}