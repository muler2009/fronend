import React from 'react'

const Aboutus = () => (
    <div className={`flex flex-col md:flex space-x-4`}>
        <div className="flex-1 my-16 relative">
            <h1 className="px-5 py-5 font-Oswald text-[25px] after:content-[''] after:absolute after:top-11 after:right-1 after:w-2/3 after:h-[1px] after:bg-white">PI Educational Consultancy</h1>
            <div className="">
                <p className="font-Poppins text-sm leading-8 px-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

            </div>

        </div>
    </div>
  )

export default Aboutus