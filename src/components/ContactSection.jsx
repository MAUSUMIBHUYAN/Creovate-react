import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export const ContactSection = () => {
  const sectionRef = useRef(null);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-yellow-900/20"
          style={{ willChange: 'opacity' }}
        ></div>
        <div 
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl animate-float-slow"
          style={{ willChange: 'transform' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl animate-float-delay"
          style={{ willChange: 'transform' }}
        ></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, type: 'tween' }
          }}
          viewport={{ once: true, margin: "100px" }}
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-200">Touch</span>
        </motion.h2>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2, type: 'tween' }
          }}
          viewport={{ once: true, margin: "100px" }}
        >
          <p className="text-white/80 mb-6 max-w-2xl mx-auto text-lg">
            Want to know more about me? Check out my portfolio.
          </p>
          <motion.a
            href="#portfolio"
            className="inline-block px-6 py-3 text-lg font-medium rounded-md bg-gradient-to-r from-yellow-600/30 to-yellow-400/20 border-2 border-yellow-300/50 text-white hover:opacity-90 transition-opacity"
            whileHover={{ 
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
            aria-label="View Portfolio"
          >
            View Portfolio
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { duration: 0.5, delay: 0.4, type: 'tween' }
          }}
          viewport={{ once: true, margin: "100px" }}
        >
          <div className="max-w-2xl w-full space-y-10">
            {/* Contact Information - Optimized with reduced motion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email",
                  content: (
                    <a
                      href="mailto:mausumibhuyan02@gmail.com"
                      className="text-white/70 hover:text-yellow-300 transition-colors"
                      aria-label="Email me"
                    >
                      mausumibhuyan02@gmail.com
                    </a>
                  )
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Phone",
                  content: (
                    <a
                      href="tel:+917749902629"
                      className="text-white/70 hover:text-yellow-300 transition-colors"
                      aria-label="Call me"
                    >
                      +91 7749902629
                    </a>
                  )
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Location",
                  content: <span className="text-white/70">Gajapati, Odisha</span>
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 500, damping: 10 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: 0.1 * index,
                      type: 'tween' 
                    }
                  }}
                  viewport={{ once: true, margin: "50px" }}
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-yellow-900/20 text-yellow-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <div>{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links - Optimized */}
            <motion.div 
              className="pt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 0.5, delay: 0.6, type: 'tween' }
              }}
              viewport={{ once: true, margin: "100px" }}
            >
              <h4 className="font-medium text-white mb-6 text-xl">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {[
                  {
                    icon: <Linkedin className="h-6 w-6" />,
                    href: "https://www.linkedin.com/in/mausumi-bhuyan-a60a68291/",
                    color: "hover:text-yellow-300"
                  },
                  {
                    icon: <Instagram className="h-6 w-6" />,
                    href: "https://www.instagram.com/_mau_sumi__/",
                    color: "hover:text-pink-300"
                  }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-yellow-900/30 hover:border-yellow-500/50 text-white/80 ${social.color} transition-all`}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: 'spring', stiffness: 500, damping: 10 }
                    }}
                    aria-label={index === 0 ? "LinkedIn profile" : "Instagram profile"}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};