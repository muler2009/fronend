import { FcFolder } from "react-icons/fc"
export const link_data = [
    {
        key: 0,
        label: "Module-1",
        icon: <FcFolder />,
        title: "Module Test",
        isModuleFolder: true,
        children: [
          {
            key: "0-1   ",
            label: "Demo 1-1",
            icon: <FcFolder />,
            title: "Demo 1-1",
            isModuleFolder: true,
            children: [
              {
                key: "0-1-1",
                label: "demo-0-1.doc",
                path: "demo",
                icon: <FcFolder />,
                title: "Documents Folder",
                isModuleFolder: false
              },
              {
                key: "0-1-2",
                label: "demo-0-2.doc",
                path: "demo2",
                icon: <FcFolder />,
                title: "Documents Folder",
                isModuleFolder: false
              },
              {
                key: "0-1-3",
                label: "demo-0-3.doc",
                path: "demo3",
                icon: <FcFolder />,
                title: "Documents Folder",
                isModuleFolder: false
              },
            ],
          },
        ],
      },

      {
        key: 2,
        label: "Module-2",
        icon: <FcFolder />,
        title: "Module Test",
        isModuleFolder: true,
        children: [
              {
                key: "2-1",
                label: "demo-2-1.doc",
                icon: <FcFolder />,
                title: "Documents Folder",
                isModuleFolder: false,
              },
              {
                key: "2-2",
                label: "demo-2-2.doc",
                icon: <FcFolder />,
                title: "Documents Folder",
                isModuleFolder: false,
              },
              {
                key: "2-3",
                label: "demo-02-3.doc",
                icon: <FcFolder />,
                title: "Documents Folder",
                isModuleFolder: false,
              },
            ],
        }, 

        {
            key: 3,
            label: "Module-3",
            icon: <FcFolder />,
            title: "Module Test",
            isModuleFolder: true,
            children: [
                  {
                    key: "3-1",
                    label: "demo-3-1.doc",
                    icon: <FcFolder />,
                    title: "Documents Folder",
                    isModuleFolder: false,
                  },
                  {
                    key: "3-1-2",
                    label: "demo-3-2.doc",
                    icon: <FcFolder />,
                    title: "Documents Folder",
                    isModuleFolder: false,
                  },
                  {
                    key: "3-3",
                    label: "demo-3-3.doc",
                    icon: <FcFolder />,
                    title: "Documents Folder",
                    isModuleFolder: false,
                  },
                ],
            }, 
    

]