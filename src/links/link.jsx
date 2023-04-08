import { FaHome } from 'react-icons/fa'
import { FcSupport, FcAbout} from 'react-icons/fc'
import * as Icon from 'react-icons/io'
import * as MdIcon from 'react-icons/md'


export const link = [
    { 
        label: 'Login',
        path: '/login',
        icon: <Icon.IoMdLogIn size={20} /> 
    },
    { 
        label: 'SignUp', 
        path: '/signup',
        icon:  <MdIcon.MdOutlineAppRegistration size={20}/> 
    }
]

export const weblink = [
    {wbelinkId: '1', label: 'Home', path: '/', icon: <MdIcon.MdHome /> },
    {wbelinkId: '2', label: 'About us', path: '/about', icon: <FcAbout /> },
    {wbelinkId: '3', label: 'Pricing', path: '/pricing', icon: <MdIcon.MdOutlinePriceCheck /> },
    {wbelinkId: '4', label: 'Support', path: '/support', icon: <FcSupport /> }

]

