import React from "react";
import * as Bs from "react-icons/bs";
import * as Fa from "react-icons/fa";
import { motion } from "framer-motion";

const ContactAddress = () => {
  const contactContainer = {
    init: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };
  const contactChildrens = {
    init: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="relative my-5">
      <div className="container mx-auto flex flex-col gap-10">
        <h1 className="text-[30px] font-Oswald uppercase flex justify-center items-center mt-5 xxs:text-[35px]">
          Line <span className="text-[#00bdff] ml-2">of Contact</span>
        </h1>
        <motion.div
          variants={contactContainer}
          initial="init"
          animate="visible"
          className="flex justify-center items-center xxs:space-x-0 xxxs:flex-wrap xxxs:gap-7 md:space-x-5 "
        >
          {/* Phone number 0913802977 */}
          <motion.div
            variants={contactChildrens}
            className="flex space-x-3 items-center cursor-pointer xxxs:mr-7 md:px-10"
          >
            <Fa.FaMobileAlt size={35} />
            <div className="flex flex-col gap-1">
              <h1 className="font-Poppins">Phone Number</h1>
              <p className="font-Poppins text-sm">+251-913-802977</p>
            </div>
          </motion.div>

          {/* Telegram Account 0913802977 */}
          <motion.div
            variants={contactChildrens}
            className="flex space-x-3 items-center cursor-pointer md:px-10"
            onClick={() => window.open("https://t.me/lefetena_1", "_blank")}
          >
            <Bs.BsTelegram size={35} color="#00bdff" />
            <div className="flex flex-col xxxs:pr-16">
              <h1 className="font-Poppins">Telegram</h1>
              <p className="font-Poppins text-sm text-[#00bdff] hover:underline">
                lefetena_1
              </p>
            </div>
          </motion.div>

          {/* Phone number 0923321962 */}
          <motion.div
            variants={contactChildrens}
            className="flex space-x-3 items-center cursor-pointer xxxs:mr-7 xxs:pr-10 xs:pr-6 md:px-10"
          >
            <Fa.FaMobileAlt size={35} />
            <div className="flex flex-col gap-1">
              <h1 className="font-Poppins">Phone Number</h1>
              <p className="font-Poppins text-sm">+251-923-321962</p>
            </div>
          </motion.div>

          {/* Telegram Account 0923322162 */}
          <motion.div
            variants={contactChildrens}
            className="flex space-x-3 items-center cursor-pointer md:px-10"
            onClick={() => window.open("https://t.me/lefetena_2", "_blank")}
          >
            <div className="flex justify-start items-start">
              <Bs.BsTelegram size={35} color="#00bdff" />
            </div>
            <div className="flex flex-col xxxs:pr-16">
              <h1 className="font-Poppins">Telegram</h1>
              <p className="font-Poppins text-sm text-[#00bdff] hover:underline">
                lefetena_2
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactAddress;
