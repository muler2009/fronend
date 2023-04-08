import {RiAdminLine} from 'react-icons/ri'
import {MdCreateNewFolder, MdRemoveCircle ,MdEdit} from 'react-icons/md'
export const links = [
    {
        key: 0,
        label: "Admin",
        isFolder: true,
        children: [
           {
                key: 0,
                label: "Create User",
                icon: <MdCreateNewFolder />,
                path: "add_admin"
            },
            {
                key: 1,
                label: "Remove User",
                icon: <MdRemoveCircle />,
                path: "delete"
            },
            {
                key: 2,
                label: "Edit User",
                icon: <MdEdit />,
                path: "edit"
            },
            

        ],

    }, {
        key: 0,
        label: "Student",
        isFolder: true,
        children: [
            {
                key: 0,
                label: "Create Student",
                icon: <MdCreateNewFolder />,
                path: "add_student"
            },
            {
                key: 1,
                label: "Remove Student",
                icon: <MdRemoveCircle />,
                path: "remove_student"
            },
            {
                key: 2,
                label: "Edit Student",
                icon: <MdEdit />,
                path: "edit_student"
            },
        ]

    }, {
        key: 0,
        label: "Uploader",
        isFolder: true,
        children: [
            {
                key: 0,
                label: "Create Uploader",
                icon: <MdCreateNewFolder />,
                path: "add_uploader"
            },
            {
                key: 1,
                label: "Remove Uploader",
                icon: <MdRemoveCircle />,
                path: "add_uploader"
            },
            {
                key: 2,
                label: "Edit Uploader",
                icon: <MdEdit />,
                path: "add_uploader"
            },
        ]

    },

    
]