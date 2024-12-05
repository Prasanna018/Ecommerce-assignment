import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl pt-12 md:text-6xl font-bold text-primary mb-4">
              Discover Your Style
            </h1>
            <p className="text-secondary text-lg mb-8">
              Explore our curated collection of premium fashion items that define elegance
              and sophistication.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-3  rounded-md font-medium text-center"
            >
              Shop Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3"
                alt="Fashion"
                className="w-full h-full object-cover rounded-lg mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;