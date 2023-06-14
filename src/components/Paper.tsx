import { motion } from "framer-motion";
import { useState } from "react";

const Paper = () => {
  const [isClicked, setIsClicked] = useState(false);

  const variants = {
    clicked: { height: 840, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="bg-[#F0E8D8] h-[430px] w-[922px] flex flex-col items-start pt-8 pl-12"
        variants={variants}
        animate={isClicked ? "clicked" : ""}
      >
        <div>
          <p className={"text-xl " + (isClicked ? "text-black/30	" : "")}>
            Hej{" "}
            <strong
              onClick={() => {
                setIsClicked(true);
              }}
            >
              Alex,
            </strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export { Paper };

//#D0B8A6
