import React, { useState } from "react";
import * as fi from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/auth/myAuthSlice";
import useLogout from "../hooks/useLogout";
import ChangePasswordModal from "./ChangePasswordModal";
import { dropDownMenu } from "./attributes";

const DropDownProfile = (props) => {
  const { setDrop } = props;
  const dispatch = useDispatch();
  const [changePwdModal, setChangePwdModal] = useState(false);

  const { onLogoutClicked } = useLogout();

  const triggerModal = () => {};

  return (
    <React.Fragment>
      <div className={`flex flex-col dropdown py-5`}>
        <div className={`flex flex-col text-sm`}>
          {dropDownMenu?.map((menu_item, index) => {
            return (
              <div className={``} onClick={() => setDrop((prev) => !prev)}>
                <Link
                  to={menu_item.path}
                  className={`flex space-x-2 items-center hover:bg-gray-100 px-4 py-3`}
                  onClick={() => setChangePwdModal(true)}
                >
                  <span>{menu_item.icon}</span>
                  <p>{menu_item.label}</p>
                </Link>
              </div>
            );
          })}

          <div
            // to={"/login"}
            className={`flex space-x-2 items-center hover:bg-gray-100 px-4 py-3`}
            onClick={() => dispatch(logout())}
          >
            <fi.FiPower />
            <p>Logout</p>
          </div>
        </div>
      </div>

      <ChangePasswordModal
        changePwdModal={changePwdModal}
        setChangePwdModal={setChangePwdModal}
      />
    </React.Fragment>
  );
};

export default DropDownProfile;
