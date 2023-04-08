import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditProfileModal from '../pages/Student/components/ui/EditProfileModal'
import useLogout from '../hooks/useLogout'
import { dropDownMenu } from './attributes'
import ChangePassword from '../components/common/ChangePassword'
import ChangePasswordModal from './ChangePasswordModal'



const DropDownProfile = (props) => {

    const { setDrop } = props
    const [changePwdModal, setChangePwdModal] = useState(false)

    const { onLogoutClicked } = useLogout()
    
    const triggerModal = () => {
    
    }
   
    return (
        <React.Fragment>
            <div className={`flex flex-col dropdown py-5`}>
                <div className={`flex flex-col text-sm`}>
                    {
                        dropDownMenu?.map((menu_item, index) => {
                            return(
                                <div className={``} onClick={() => setDrop(prev => !prev)} >
                                    <Link to={menu_item.path} 
                                          className={`flex space-x-2 items-center hover:bg-gray-100 px-4 py-3`} 
                                          onClick={() => setChangePwdModal(true)  }>
                                          <span>{menu_item.icon}</span>
                                          <p>{menu_item.label}</p>
                                    </Link>
                                </div>


                            )
                        })
                    }

                   
                    
                    {/* <div to={'/login'} className={`flex space-x-2 items-center hover:bg-gray-100 px-4 py-3`} onClick={onLogoutClicked}>
                        <fi.FiPower />
                        <p>Logout</p>
                    </div> */}
        
                </div>        
            </div>
            
            <ChangePasswordModal changePwdModal={changePwdModal} setChangePwdModal={setChangePwdModal} />
        
        </React.Fragment>

    )
}

export default DropDownProfile