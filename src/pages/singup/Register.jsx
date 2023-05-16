
import {Link, useNavigate} from 'react-router-dom'
import singup from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/Authprobider'
import {useContext,useState} from 'react'
import { updateProfile } from "firebase/auth";
import Social from '../Shared/sociallogin/Social';
const Register = () => {
    const {createUser} = useContext(AuthContext)
   const [err,seterr] = useState('')
   const navigate = useNavigate()

    const handleSingUp =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const users = {name,email,password}
        console.log(users)

        if(!name || !email || !password){
          seterr('Fill up all input')
          setTimeout(()=>{
             seterr('')  
          },3000)
          return
      }

        if(password.length<6){
            seterr('Password must be 6 charecter')
             setTimeout(()=>{
               seterr('')  
            },3000)
            return
        }
       
        createUser(email,password)
        .then(res=>{
            console.log(res.user)
            updateProfile(res.user,{displayName:name})
            navigate('/login')
        })
        .catch(err=>{
           console.log(err.message)
        })
    }
    return (
        <div className="hero my-20">
        <div className="hero-content lg:gap-10 flex-col lg:flex-row">
          <div className=" w-full lg:w-1/2">
           <img src={singup} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <form onSubmit={handleSingUp}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="UserName" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {
                err&&(
                    <div><p className='text-red-700'>{err}</p></div>
                )
              }
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Singup</button>
              </div>
              </form>
              <p>Already user in card-Doctors? <Link className='text-blue-700 font-bold' to={'/login'}>Login</Link></p>
              <Social></Social>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;