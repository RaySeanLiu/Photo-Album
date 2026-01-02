import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer touch-manipulation"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={() => {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-editorial sm:w-6 sm:h-6"
      >
        <path
          d="M12 4L12 20M12 20L6 14M12 20L18 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-serif text-xs sm:text-sm lowercase text-editorial">more!</span>
    </motion.div>
  );
};

export default ScrollIndicator;
