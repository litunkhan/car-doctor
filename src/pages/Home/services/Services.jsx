import { useEffect, useState } from "react";
import Servicecard from "./Servicecard";
import image from '../../../assets/icons/Group 44.png'


const Services = () => {
    const [services,setservices] = useState([])
    useEffect(()=>{
       fetch('http://localhost:4000/services')
       .then(res=>res.json())
       .then(data=>setservices(data))
    },[])
    return (
        <div className="my-11">
           <h2 className="text-center text-2xl text-orange-400">Servies</h2>  
           <h2 className="my-2 text-4xl text-center font-bold">Our services Area</h2>
           <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which dont look even slightly believable. </p>
           <div className="grid my-6 gap-6 grid-cols-1 md:grid-cols-3">
           {
            services.map(service=>{
                return <>
                   <Servicecard key={service._id} service={service}/>
                </>
            })
           }
           
           </div>
           <div className="text-center"><button className="btn btn-outline btn-warning">More services</button></div>
           <div className="my-12">
             <img className="w-full h-48" src={image} alt="" />
           </div>
        </div>
    );
};

export default Services;