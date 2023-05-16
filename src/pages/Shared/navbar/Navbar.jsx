/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logos from '../../../assets/logo.svg'
import { AuthContext } from '../../../providers/Authprobider';
const Navbar = () => {
  const {user,logout,loader} = useContext(AuthContext)
    const navbar = <>
     <li><Link to={'/'}>Home</Link></li>
     <li><Link to={'/about'}>About</Link></li>
     <li><Link to={'services'}>Services</Link></li>
     <li><Link to={'/blog'}>Blog</Link></li>
     <li><Link to={'/contact'}>Contact</Link></li>
     
    </>
    
    return (
        
      <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {navbar}
    </ul>
  </div>
 <Link to={'/'}><img className='h-12' src={logos} alt="logo" /></Link>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
    {navbar}
  </ul>
</div>
<div className="navbar-end gap-2">
{loader?<div><p>Loading...</p></div>:<div className="navbar-end gap-2 flex items-center">
{user&& (
<><div className='flex gap-3'><p>{user.displayName}</p> <p><Link to={'/bookings'}>Booking</Link></p></div></>)}
 

 {user? <button onClick={()=>{
  logout()
  .then(res=>{
    localStorage.removeItem('usertoken')
    alert('logout Successfull')
  })
  .catch(err=>{
    console.log(err.message)
  })
}} className='btn btn-outline'>LogOut</button>:<button className='btn btn-outline'><Link to={'/login'}>LogIn</Link></button>}
 
 </div>}
 <button className='btn btn-outline btn-warning '>Appointment</button>
</div>
</div>
   
  );
};

export default Navbar;