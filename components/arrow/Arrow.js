import { motion, AnimatePresence } from "framer-motion";

const variants = {
  rotate: { rotate: [0, -30, 0], transition: { duration: 0.1 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 0.1 } },
};

const Arrow = ({ rotate }) => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          variants={variants}
          animate={rotate ? "rotate" : "stop"}
          id="monkeyFace"
          src="/assets/image/Vector.png"
        />
      </AnimatePresence>
    </div>
  );
};

export default Arrow;
