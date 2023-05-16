import { useContext } from "react";
import { AuthContext } from "../../../providers/Authprobider";


const Social = () => {
    const {googleSingIn} = useContext(AuthContext)
    const googlelogin =()=>{
        googleSingIn()
        .then(res=>{
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="text-center">
          
  <div className="divider">OR</div>
  <button onClick={googlelogin} className="btn btn-circle btn-outline">
    <span className="text-blue-300 text-3xl">G</span>
</button>
</div>
       
    );
};

export default Social;