import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useAddModuleMutation,
  useDeleteModuleMutation,
} from "../features/module/moduleApiSlice";

const useAddModule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addModule] = useAddModuleMutation();
  const [deleteModule] = useDeleteModuleMutation();

  const [moduleAddingAttributes, setModuleAddingAttributes] = useState({
    moduleCode: "",
    moduleName: "",
    moduleForDepartment: "",
    moduleCategory: "",
    totalQuestion: "",
    moduleStatus: false,
  });

  const handleChangesOnModuleAdding = (event) => {
    const { name, type } = event.target;
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    setModuleAddingAttributes((moduleAddingAttributes) => ({
      ...moduleAddingAttributes,
      [name]: value,
    }));
  };

  const onCreateModuleClicked = async (dispatch) => {
    try {
      dispatch(addModule(moduleAddingAttributes));
      setModuleAddingAttributes("");
    } catch (error) {
      // console.log(error)
    }
  };

  return {
    moduleAddingAttributes,
    setModuleAddingAttributes,
    handleChangesOnModuleAdding,
    onCreateModuleClicked,
  };
};

export default useAddModule;
