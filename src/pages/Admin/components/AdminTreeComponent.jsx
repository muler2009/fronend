import React from "react";
import {links} from '../link/links'
import AdminTree from "./AdminTree";

const AdminTreeComponent = () => {
    return (
      <React.Fragment>
          <div className="flex flex-col"> 
            <div className="px-5 flex-col font-Poppins text-sm mt-10">
                <AdminTree data={links} />
            </div>
          </div>
      </React.Fragment>
    );
  };
  
export default AdminTreeComponent