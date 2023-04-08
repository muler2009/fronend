
import { 
    AiFillLock, 
    AiFillQuestionCircle, 
    AiOutlineUnorderedList,
    AiOutlineImport, 
    AiOutlineDashboard
} from 'react-icons/ai'
import { 
    MdOutlineViewModule,
    MdViewModule,
    MdAccountCircle,
    MdCategory

} from 'react-icons/md'
import { RiArrowDownSFill, RiArrowUpSFill, RiFileUserFill } from 'react-icons/ri'
import { IoAddCircleSharp } from 'react-icons/io5'


import { IoSettings } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa'
import Table from '../ucommon/DataTable'
import ListOfModules from '../components/ListOfModules'

export const u_sidebar_link = [
    {
        path: '/upload',
        label: "Dashboard",
        icon: <AiOutlineDashboard />,
    },
    {
        label: "Module",
        path: "module_access",
        icon: <MdViewModule />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />},
    {
       
        label: "Manage Account",
        icon: <MdAccountCircle />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        submenu: [
           
            {
                path: 'password',
                label: 'Change Password',
                icon: <AiFillLock />,
            }
        ]
    },
    {
       
        label: "Question",
        icon: <AiFillQuestionCircle />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        submenu: [
            {
                path: 'questions',
                label: 'Questions List',
                icon: <AiOutlineUnorderedList size={18} />,
            },
            {
                path: 'add-exam',
                label: 'New Question',
                icon: <IoAddCircleSharp size={18}/>,
            },
            
          
           
        ]
    },

]


export const module_links = [
   
    {
        label: 'Module List',
        icon: <AiOutlineUnorderedList size={18} />,
        content: <ListOfModules  />
        
    },
    {
        label: 'Module Category',
        icon: <MdCategory />,
        content: <h1>3</h1>
    },
]


