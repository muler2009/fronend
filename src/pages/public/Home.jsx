import React, { useEffect, useRef } from "react";
import { Heros, Subscribe, FAQ } from "./components";
import Signup from "../signup/Signup";
import Aboutus from "./components/Aboutus";

export const Home = () => {
  return (
    <React.Fragment>
      <Heros />
      <Subscribe />
      <section className="flex md:flex space-x-5 bg-[#f7f9fa]">
        <div className="flex flex-1 flex-wrap justify-start md:container md:mx-auto md:px-10 ">
          <div className="w-full md:w-1/2 px-5 ">
            <Aboutus />
            <FAQ />
          </div>
          <div className="w-full md:w-1/2">
            <Signup id="#register" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
