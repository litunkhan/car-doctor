/* eslint-disable no-unused-vars */
import React from 'react';
import { AuthContext } from '../../providers/Authprobider';
import {useContext,useEffect,useState} from 'react'
import Bookingnow from './Bookingnow';


const Bookings = () => {
    const {user,loader} = useContext(AuthContext)
    const [booking,setbooking] = useState([])
    const [err,seterr] = useState('Unthorize login again')
    useEffect(() => {
        if (user && user.email) { // check if user is not null or undefined
          fetch(`http://localhost:4000/bookings?email=${user.email}`,{
            method:'GET',
            headers:{
               authorize:`Bearer ${localStorage.getItem('usertoken')}`
            }
          })
            .then(res => res.json())
            .then(data => {
              
               if(!data.error){
                setbooking(data);
               }
               else {
                return setbooking([])
              }
            });
        } 
      }, [user,err]);
      
      const handleDelete = (id)=>{
        const proced = confirm('Are you Sure')
        if(proced){
            fetch(`http://localhost:4000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                  alert('Deleted Successfull')
                  const remaindata = booking.filter(n=>n._id !== id)
                  setbooking(remaindata)
                }
            })
        }
      }

      const handleConfirm = id =>{
        fetch(`http://localhost:4000/bookings/${id}`,{
          method:'PATCH',
         headers:{
          'Content-Type':'application/json'
         },
         body:JSON.stringify({status:'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          const remaindata = booking.filter(n=>n._id !== id)
          const updated = booking.find(n=> n._id === id)
          updated.status='confirm'
          const newBookings =[updated,...remaindata]
          setbooking(newBookings)
        }
      })
      }
   
    return (
        <div>
           <p>{booking.length}</p>

           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service</th>
        <th>Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        booking.map(bookings=>{
           return  <Bookingnow key={bookings._id} booking={bookings} handleDelete={handleDelete} handleConfirm={handleConfirm}></Bookingnow>
        })
      }
     
      
    </tbody>
  
   
    
  </table>
</div>
        </div>
    );
  
};

export default Bookings;