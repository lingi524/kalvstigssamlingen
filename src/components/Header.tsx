import { motion, useAnimationControls } from "framer-motion";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div>
        <h1 className="text-5xl">Kalvstigssamlingen</h1>
        <p className="text-2xl">av Lars Landegren</p>
      </motion.div>
    </div>
  );
};

export { Header };
