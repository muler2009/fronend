import React from 'react'
import {useSpring, animated} from 'react-spring'
import rect from '../../../assets/images/rect.png'
import graduate from '../../../assets/images/graduate.png'
import register from '../../../assets/images/register.png'
import StartJourney from './StartJourney'
 


const Heros = () => {

  const fade = useSpring({ from: { opacity: 0, marginTop: '-100px'}, opacity: 1,  marginTop: '0px', delay: 100,}) ;

  return(
    <section className={`flex md:flex py-5 bg-[#f2eef8]`}>
      <div className={`flex-1 justify-start flex-col sm:px-16 px-6 xl:px-56`}>
        <div className="flex flex-row items-center py-[6px]">
          <p className="text-normal font-Poppins font-normal mb-5 text-indigo-500 text-smeibold">Be the first to get special Offer</p>
        </div>
        <animated.div className="flex flex-row justify-between items-center w-full" style={fade}>
          <h1 className="flex-1 font-Poppins font-semibold text-5xl ss:text-[62px] text-black ss:leading-[80px] md:text-[50px] md:leading-[60px] xs:leading-[100px]">
            Start Here for <br className="ss:block hidden" /> {" "}
            <span className="text-red-600">success Journey</span><br />
          </h1>
        </animated.div>
        <h1 className="flex-1 font-Poppins font-semibold ss:text-[62px] text-5xl text-black ss:leading-[80px] md:text-[50px]">
          to Ethio Exit !
        </h1>
        <p className="font-Poppins max-w-[470px] mt-5 leading-8">
            PI Education Consultancy Can Fulfill Your Education Dream
            As Per Your Best Fit bla bla bla``
        </p>  

        <div className="my-10 flex space-x-5">
            <button className="btn-md font-Poppins text-white ring-2 ring-black px-5 bg-black rounded-none hover:bg-white hover:text-black ">Register</button>
             <button 
              className="btn-md font-Poppins ring-2 text-black ring-black px-10 bg-white rounded-none
               hover:bg-black hover:text-white hover:ring-0">Start Journey</button>
        </div> 

      </div>
    </section>
  )
}

export default Heros;

// bg-[url('/src/assets/images/rect.png')] bg-cover bg-no-repeat w-full bg-black bg-opacity-20
{/* <img src={graduate} alt="Side Image" className="object-cover object-center w-full " /> */}