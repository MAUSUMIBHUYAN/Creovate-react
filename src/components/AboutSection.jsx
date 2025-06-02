import { Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-yellow-900/20"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-200">Welcome to Creovate</span>
        </motion.h2>

        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <motion.div
            className="grid gap-6 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 font-medium">
                Where my creativity comes to life.&nbsp;
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-gray-200 to-yellow-400 font-medium">
                This platform showcases my animations, designs, and projects, reflecting my passion for blending art and technology.
              </span>
            </motion.p>

            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 font-medium">
                Through Creovate, I aim to inspire and push the boundaries of creativity.&nbsp;
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-gray-200 to-yellow-400 font-medium">
                Thank you for visiting—enjoy exploring my world of motion and imagination!
              </span>
            </motion.p>
          </motion.div>

          <motion.div 
            className="pt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button // Changed from a to button
              onClick={() => navigate("/showcase")} // Changed from href to onClick
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden text-xl font-medium transition-all duration-500 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-200 bg-[length:400%_400%] animate-gradient-flow-diagonal font-bold tracking-wide">
                  All Animations
                </span>
                <Wand2 className={`w-6 h-6 text-yellow-300 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`} />
              </span>
              <span className={`absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-yellow-400/20 bg-[length:400%_400%] animate-gradient-flow-diagonal rounded-full opacity-80 group-hover:opacity-100`}></span>
              <span className={`absolute inset-0 border-2 border-yellow-300/50 rounded-full transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 opacity-0 scale-95`}></span>
              <span className={`absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-30 opacity-0`}></span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};