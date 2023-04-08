import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import { 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider
} from 'react-router-dom';
import Admin from './pages/Admin/layout/Admin';
import UploaderStructure from './layout/UploaderStructure';
import { StudentDashboardStructure } from './layout/StudentDashboardStructure';
import store from './store/store';
import { Provider } from 'react-redux';
import Layout from './layout/Layout';
import Public from './pages/public/Public';
import RequiredAuthentication from './features/auth/RequiredAuthentication';

const router = 
  createBrowserRouter(
    createRoutesFromElements
      (
        <Route element={<Layout />} >

          {/* Public Route */}

          <Route path='/*' element={<Public />} />
          <Route path='upload/*' element={<UploaderStructure />} />            
          <Route path='student/*' element={<StudentDashboardStructure />} />           

          {/* Protected routes */}
          <Route element={<RequiredAuthentication />}>
              {/* <Route path='student/*' element={<StudentDashboardStructure />} />            */}
          </Route> 
        
        </Route>
          
      )
  )


  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


