import React, { useEffect, useRef } from "react";
import {
  Heros,
  Subscribe,
  FAQ,
  FAQImage,
  FAQCard,
  ContactAddress,
} from "./components";
import Signup, { SignupHome } from "../signup/Signup";
import Aboutus from "./components/Aboutus";
import { motion, useInView, useAnimation } from "framer-motion";

const HomeX = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainContols = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainContols.start("visible");
    }
    console.log(isInView);
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          init: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="init"
        animate={mainContols}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Home = () => {
  return (
    <HomeX>
      <Heros />
      <ContactAddress />
      <Subscribe />
      <div className="xxs:w-full xxs:mx-auto xxs:px-5 md:container md:mx-auto md:flex md:flex-wrap">
        <div className="xs:w-full sm:px-10 md:w-1/2">
          <FAQCard />
        </div>
        <div className="xs:w-full md:w-1/2 lg:px-10 lg:mx-auto">
          <SignupHome id="#register" />
        </div>
      </div>
      <Aboutus />
    </HomeX>
  );
};

// export const Home = () => {
//   return (
//     <React.Fragment>
//       <Heros />
//       <Subscribe />
//       <section className="flex md:flex space-x-5 bg-[#f7f9fa]">
//         <div className="flex flex-1 flex-wrap justify-start md:container md:mx-auto md:px-10 ">
//           <div className="w-full md:w-1/2 px-5 ">
//             <Aboutus />
//             <FAQ />
//           </div>
//           <div className="w-full md:w-1/2">
//             <Signup id="#register" />
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   );
// };
