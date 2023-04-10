import { useRoutes } from 'react-router-dom'

import Profile from '../pages/Student/components/content/Profile';




import StudentHome from '../pages/Student/StudentspageFile/StudentHome';
import Result from '../pages/Student/components/content/Result';

import Uchangepassword from '../pages/Uploader/components/Uchangepassword'
import QuestionDisplayCard from '../pages/Student/qmodule/QuestionDisplayCard';
import AllModules from '../pages/Student/components/content/Modules';


export const StuPageRoutes = () => {

    let route = useRoutes ([
        { 
          path: "/",
          element: <StudentHome />, 
        },
        { path: "/new-exam", element: <QuestionDisplayCard/> },
        { path: "/modules", element: <AllModules/> },
        { path: "/result", element: <Result /> },
        { path: "/profile", element: <Profile /> },
        { path: "edit/:id", element: <h1>Testing</h1>},
        { path: "change_password", element: <Uchangepassword /> },
        { path: "demo3", element: <h1>Testing the Third demo</h1> },
        

    ])
    
    return route;
}