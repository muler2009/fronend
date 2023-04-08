import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { module_links } from "./links";
import { Link, Outlet } from "react-router-dom";
import ModuleAdderModal from "../components/ModuleAdderModal";
import { FaFolderPlus } from "react-icons/fa";

const ModuleTaskNavigator = ( props ) => {
  
  const [addModuleLauncher, setAddModuleLauncher] = useState(false)
  const [importcsv, setImportcsv] = useState(false)

  return (
    <section className={`w-full `}>
      <div className={`flex flex-col bg-white`}>
        <Tabs className={`font-Poppins `}>
          <TabList className={`flex space-x-5 p- border-b-2 border-[#c9c9c9] py-5 px-5 relative`}>
            {
              module_links.map((modules, index) => {
                  return(
                      <Tab className={`flex space-x-3 relative focus:text-red-600 cursor-pointer`}  key={index} >
                      

                          <Link 
                           
                            to={modules.path}
                            className={`text-sm flex items-center space-x-3 focus:after:content-[" "] focus:after:absolute focus:after:h-[3px] focus:after:w-full focus:after:top-10 focus:after:left-0 focus:after:bg-[#8a2424]`} 
                          >
                              <div className={`text-lg`}>{modules.icon}</div>
                              <div className={``}>{modules.label}</div>
                          </Link>
                        
                      </Tab>
                  )
              })
            }

          <div className={`relative flex space-x-3 cursor-pointer`} >
                  <Link className={`text-sm flex items-center space-x-2 focus:after:content-[" "] focus:after:absolute focus:after:h-[3px] focus:after:w-full focus:after:top-10  focus:after:left-0 focus:after:bg-[#8a2424]`}  onClick={() => setAddModuleLauncher(prev => !prev)}>
                    <FaFolderPlus />
                    <span>
                    Add module
                    </span>
                    
                  </Link>
              </div>
          </TabList>

          <div className={`px-10`}>
            {
              module_links.map((modules, index) => {
                return(
                  <TabPanel className={``} key={index}>
                      {modules.content}
                  </TabPanel>

                )
              })
            }
          </div>
        </Tabs>

      </div>

      <ModuleAdderModal addModuleLauncher={addModuleLauncher} setAddModuleLauncher={setAddModuleLauncher} />

      
    </section>
  );
 }
  
export default ModuleTaskNavigator