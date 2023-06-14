import { motion } from "framer-motion";

const Paper = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div className="bg-[#F0E8D8] h-[430px] w-[922px] flex flex-col items-start pt-8 pl-12">
        <div>
          <p className="text-xl">
            Hej <strong>Alex,</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export { Paper };

//#D0B8A6
