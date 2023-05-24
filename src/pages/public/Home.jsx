import React, {useEffect, useRef} from 'react'
import { Heros, Subscribe, FAQ, FAQImage, FAQCard} from './components'
import Signup from '../signup/Signup'
import Aboutus from './components/Aboutus'
import { motion, useInView, useAnimation} from 'framer-motion'

const HomeX = ({ children }) => {
  const ref =useRef(null)
  const isInView = useInView(ref, { once: true }) ;
  const mainContols = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainContols.start("visible")
    }
    console.log(isInView);
  }, [isInView]);


  return(
    
    <div ref={ref} className="relative">
      <motion.div 
        variants={{
          init: {opacity: 0, y: 75},
          visible: { opacity: 1, y: 0}
        }}
        initial="init"
        animate={mainContols}
        transition={{ duration: 0.5, delay: 0.5}}
      >
           {children}
      </motion.div>      

    </div>
     
    )

} 

const Home = () => {
  return(
    <HomeX>
      <Heros />
      <Subscribe /> 
      <div className="container mx-auto flex">
        <div className="xs:w-full xs:px-5 sm:px-10 md:w-1/2"><FAQCard /></div>
        <div className="xs:w-full xs:px-5 md:w-1/2"><Signup id="#register"/></div>
      </div>    
      <Aboutus />
    </HomeX>
    
  )
}



export default Home