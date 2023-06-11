import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/img-1.png";
import { motion } from "framer-motion";

const Heros = () => {
  const heroVariants = {
    init: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
  };

  const heroChildVariants = {
    init: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const heroImage = {
    init: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <div className="bg-hero-bg bg-[#effafa] bg-right-top bg-no-repeat bg-cover shadow-sm h-full">
      <div className="container mx-auto py-10 xxs:px-0 lg:px-10 flex xxs:flex-wrap-reverse xs:flex-wrap-reverse md:flex-nowrap justify-center items-center">
        <motion.div
          variants={heroVariants}
          initial="init"
          animate="visible"
          className="xs:px-5 lg:w-1/2 py-5"
        >
          <motion.p className="xxs:pt-3 md:pt-10 text-[#5c727d] text-bold font-Poppins text-sm xx:w-full">
            Great place to hug a knowledge
          </motion.p>
          <motion.h1
            variants={heroChildVariants}
            className="flex-1 font-Oswald font-[700] text-5xl xxs:px-0 xxs:text-[40px] xxs:leading-[3rem] xs:text-[50px] ss:text-[60px] text-[#071c1f] xs:leading-[70px] ss:leading-[80px] sm:text-[70px] md:text-[60px] md:leading-[70px] py-5"
          >
            Start Your Journey to <br className="xxs:hidden ss:block hidden" />{" "}
            <span className="text-[#00bdff]">success with Us!</span>
            <br />{" "}
          </motion.h1>
          <motion.div
            variants={heroChildVariants}
            className="pt-5 pb-10 leading-7"
          >
            <p className="font-Poppins max-w-[470px] border-l-[2px] border-[#5c727d] px-5 text-[#5c727d] text-justify text-[15px]">
              Our Online platform is built to Fulfill Your Education Dream by
              our experienced expertise in different domain
            </p>
          </motion.div>
          {/* Contact us button */}
          <motion.div variants={heroChildVariants} className="">
            <Link to="signup">
              <button className="btn-md font-Poppins bg-[#00bdff] rounded-none text-white w-[50%] hover:bg-[#01b0f0]">
                Register
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroImage}
          initial="init"
          animate="visible"
          className="xxs:hidden xs:hidden xxxs:hidden md:flex"
        >
          <img src={img} alt="SOmething" />
        </motion.div>
      </div>
    </div>
  );
};

export default Heros;
