import React, { useEffect } from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const SuccessMessage = () => {

    const showSuccessAlert = 

        MySwal.fire({
          width: 600,
          heightAuto: true,
          padding: 0,
          position: "top",
          showConfirmButton: false,
          icon: 'success',
          iconColor: 'green',
          timerProgressBar: true,
          padding: 10,
          footer: <p className='font-Poppins'>Best place to learn</p>,
          html: (
            <div className={`w-full flex flex-col gap-5 h-full relative`}>
                <div className={`py-2`}>
                    <h1 className={`font-Oswald text-4xl tracking-wide text-green-400 `}>Successfully Registered!</h1>
                </div>
                <div className={`py-5 w-3/4 mx-auto before:absolute before:bg-[#ddd] before:content[""] before:h-[1px] before:w-full before:left-0 before:my-2 `}>
                    <h1 className={`text-center mt-5 font-Oswald tracking-wide text-2xl`}>Congratulations<br/>
                        <span className={`font-Poppins text-[15px]`}>your account has been successfully created.</span>
                        </h1>
                </div>                  

                <div className={`mx-auto w-2/3 font-Poppins leading-9`}>
                    <h1 className={`text-sm py-4`}>we have sent an 
                        <span>
                            <a href='/login' className={`font-Poppins text-blue-500 hover:underline text-sm mr-2`} onClick={() => Swal.close()}> activation link</a>
                        </span> 
                        to your email account to complete the registration process
                    </h1>
                </div>            
            </div>
          ),
         
        });
    
    

    return (
        <React.Fragment>
            {showSuccessAlert}

        </React.Fragment>
        // <React.Fragment>

        //  <button className={`btn-sm px-5`} onClick={showSuccessAlert}>Test</button>
            
        //     {/* <div className={`w-1/3 h-2/3 mt-4 mx-auto flex flex-col shadow-lg bg-white`}>
        //         <div className={`bg-green-400 py-20 flex flex-col justify-center items-center`}>
        //             <div className={`py-3`}>
        //                 <BsIcon.BsCheckCircle size={50} color="white" />
        //             </div>
        //             <div className={`py-2`}>
        //                 <h1 className={`font-Oswald text-4xl tracking-wide text-zinc-50 `}>Successfully Registered!</h1>
        //             </div>
        //         </div>
        //         <div className={`py-10 w-3/4 mx-auto font-Poppins`}>
        //             <h1 className={`leading-8 text-center`}>Congratulations <br/>
        //                 <span>your account has been successfully created</span> .</h1>
        //         </div>
        //         <div className={`mx-auto font-Poppins`}>
        //             <button className={`px-10 text-sm rounded-none`}>
        //                 <Link to='/login'>Login</Link>
        //             </button>
        //         </div>
        //     </div> */}

        // </React.Fragment>
    )
}

export default SuccessMessage