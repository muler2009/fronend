import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const rqLinks = [

    {rqkey: 1, path: 'getstarted', name: 'Overview'},
    {rqkey: 2, path: 'rqtodo',    name: 'Basic Query'},
    {rqkey: 3, path: 'rqfakeuser',  name: 'RQ-Fakeusers'},  

]


const Navbar = () => {
    const [active, setActive] = useState('')

  return (
    <>
        <section className='my-5 p-2 bg-white mx-3'>
            <div className='flex flex-row space-x-4 py-3 w-full'>
                {
                    rqLinks.map(link => (
                        <div className=' font-Poppins block' onClick={() => setActive(link.name)}>
                            <Link 
                                to={link.path} 
                                key={link.rqkey}
                                className={`${link.name === active ? 'flex text-green-600  border-green-600 border-b-4 pb-2.5' : 'text-black'}`}>
                                {link.name}
                            </Link>
                        </div>
                    ))
                }  
            </div>          
        </section>
    </>
  )
}


export default Navbar
