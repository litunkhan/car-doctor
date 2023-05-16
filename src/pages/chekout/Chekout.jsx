/* eslint-disable no-unused-vars */
import React from 'react';
import {useLoaderData} from 'react-router-dom'
import banner from '../../assets/images/banner/4.jpg'
import { useContext } from "react";
import { AuthContext } from '../../providers/Authprobider';
import Swal from 'sweetalert2'
const Chekout = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails)
    const {user,loader} = useContext(AuthContext)
    
    const handleSubmits = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.Name.value
        const date = form.date.value
        const phone= form.phone.value
        const price = form.price.value
        const message = form.message.value
        const service_id = serviceDetails._id
        const service = serviceDetails.title
        const image = serviceDetails.img
        const email = form.email.value
        const bookDetails ={name,date,phone,price,service_id,message,service,image,email }
        console.log(bookDetails)
        fetch('http://localhost:4000/bookings',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(bookDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
              Swal.fire({
         position: 'top-end',
           icon: 'success',
          title: 'Booking complete',
           showConfirmButton: false,
          timer: 1500
          } )
            }
        })
       
    }
    if(loader){
        return <div><h3>Loding...</h3></div>
    }
   else{
    return (
        <div>
            <img className='h-80 w-full rounded-lg my-20' src={banner} alt="" />
             <div className='text-center mb-4'><h2 className='font-bold text-3xl'>Book Now: {serviceDetails.title}</h2></div>
            <form onSubmit={handleSubmits} className="max-w-[1000px] mb-20 mx-auto bg-[#F3F3F3] p-8">
            <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label htmlFor="firstName" className="block mb-2 font-bold text-gray-700">
            Name:</label>
          <input
            type="text"
            id="firstName"
            name="Name"
           defaultValue={user.displayName}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            required
           
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label htmlFor="date" className="block mb-2 font-bold text-gray-700">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            required
            
          />
        </div>
      </div>
      <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label htmlFor="phone" className="block mb-2 font-bold text-gray-700">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            required
            
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            required
        
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-2">
          <label htmlFor="price" className="block mb-2 font-bold text-gray-700">Amout</label>
          <input
            type="text"
            id="price"
            name="price"
            readOnly
            defaultValue={'$'+serviceDetails.price}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            required
        
          />
        </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Message:</label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
          rows="8"
          required
         
        ></textarea>
      </div>
      <div className="mb-4">
        <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus">
            Submit
        </button>
      </div>
    </form>
        </div>
    );
   }
};

export default Chekout;