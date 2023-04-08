import React from "react";
import { link_data } from "../../../../common/sideBarData";
import Tree from "./Tree";
import Treee from "./Tree";

const TreeList = () => {
    return (
      <React.Fragment>
          <div className="flex flex-col">
            <h2 className="font-Oswald text-xl text-center">Free Demo exams</h2>
            <div className="px-5 flex-col font-Poppins text-sm mt-10">
                <Tree data={link_data} />
            </div>
          </div>
      </React.Fragment>
    );
  };
  
  export default TreeList;