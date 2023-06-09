import { motion, useAnimationControls } from "framer-motion";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div>
        <h1 className="text-6xl">Kalvstigssamlingen</h1>
        <p className="text-3xl">av Lars Landegren</p>
      </motion.div>
    </div>
  );
};

export { Header };
