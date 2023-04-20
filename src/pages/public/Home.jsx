import React from 'react'
import { Heros, Subscribe, FAQ} from './components'
import Signup from '../signup/Signup'
import Aboutus from './components/Aboutus'

const Home = () => (
    <>
        <Heros />
        <Subscribe />
        <section className="flex md:flex space-x-5">
          <div className="flex flex-1 flex-wrap justify-start ">
              <div className="w-full md:w-1/2 px-5 bg-[#e3edf7] ">
                <Aboutus />
                <FAQ />
              </div>
              <div className="w-full md:w-1/2 bg-[#e3edf7] ">
                <Signup />
              </div>
          </div>
        </section>

     
    </>
  )


export default Home