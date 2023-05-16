/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useContext} from 'react';
import { AuthContext } from '../../providers/Authprobider';
import {useLocation} from 'react-router-dom'
import {Navigate} from 'react-router'

const Private = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children
    }
    else if(loader){
       return <div><p>Loading...</p></div>
    }
    return <Navigate to={'/login'} state={{from:location}}></Navigate>
    
};

export default Private;