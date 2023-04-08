import React from 'react'
import { useRoutes } from "react-router-dom";
import DashboardForUploader from '../pages/Uploader/Uhome/DashboardForUploader';
import UaddQuestion from '../pages/Uploader/components/UaddQuestion'
import UQuestions from '../pages/Uploader/components/UQuestions';
import Uchangepassword from '../pages/Uploader/components/Uchangepassword';
import ModuleTaskNavigator from '../pages/Uploader/navigations/ModuleTaskNavigator'
import ModuleEditModal from '../pages/Uploader/components/ModuleEditModal'
import EditModule from '../pages/Uploader/components/EditModule';

const UploaderRoutes = () => {

    let uploaders_route = useRoutes([

      { 
        path: "/", 
        element: <DashboardForUploader /> ,
      },
      { path: "edit/:id", element: <h1>Test</h1>},
      { path: "module_access", element: <ModuleTaskNavigator /> },
      { path: 'module-list', element: <h1>Testing the Module List</h1>},
      { path: 'add-exam', element: <UaddQuestion />},
      { path: 'questions', element: <UQuestions /> },
      { path: 'password', element: <Uchangepassword />},
    

    ])

  return uploaders_route
}

export default UploaderRoutes;