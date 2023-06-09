import { motion } from "framer-motion";

const Paper = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div className="bg-[#D0B8A6] h-[444px] w-[922px]">
        <h2 className="text-xl">Papper</h2>
      </motion.div>
    </div>
  );
};

export { Paper };
