import React from 'react'
import ReactDOM from 'react-dom/client'

import {
 
  RouterProvider
} from "react-router-dom";
import './index.css'
import router from './Routes/route.jsx';
import Authprobider from './providers/Authprobider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <React.StrictMode>
  <Authprobider> 
    <RouterProvider router={router} />
  </Authprobider>
  </React.StrictMode>,
  </div>
)
