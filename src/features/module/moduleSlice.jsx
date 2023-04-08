import { createSlice } from "@reduxjs/toolkit";

const moduleSlice = createSlice({
    name: "moduleslice",
    initialState: {
        moduleCode: "",
        moduleName: "",
        moduleForDepartment: "",
        moduleCategory: "",
        moduleTotalQuestion: null,
        moduleStatus: false,
    },
    reducers: {},

})


export const currentModuleCode =  (state) => state.moduleslice.moduleCode;
export const currentModuleName =  (state) => state.moduleslice.moduleName;
export const totalNumberOfQuestion =  (state) => state.moduleslice.moduleTotalQuestion;


export default moduleSlice.reducer;