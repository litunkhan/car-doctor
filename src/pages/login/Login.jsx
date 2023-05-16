/* eslint-disable no-unused-vars */
import React from 'react';
import login from '../../assets/images/login/login.svg'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../providers/Authprobider';
import { useContext,useState } from "react";
import {useLocation} from 'react-router-dom'
import Social from '../Shared/sociallogin/Social';
const Login = () => {
  const { singIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const [error,seterror] = useState('')
const location = useLocation()
const from = location.state?.from?.pathname ||'/'
    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = {email,password}
        console.log(user)
        singIn(email,password)
        .then(res=>{
           
           const user = res.user
           const logedUser = {
             email:user.email
           }
           console.log(logedUser)
        
        fetch(`http://localhost:4000/jwt`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(logedUser)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('jwt response'+ ' '+data)
          localStorage.setItem('usertoken',data.token)
           navigate(from,{replace:true})
        })

        })
        .catch(err=>{
          seterror(err.message)
          setTimeout(()=>{
              seterror('')
          },3000)
        })

    }
    return (
        <div className="hero my-20">
  <div className="hero-content lg:gap-10 flex-col lg:flex-row">
    <div className=" w-full lg:w-1/2">
     <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered"required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          {error&&(
            <div> <p className='text-red-600'>{error}</p></div>
          )}
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
        </form>
        <p>New to card-Doctors? <Link className='text-blue-700 font-bold' to={'/register'}>Sing-up</Link></p>
        <Social></Social>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;