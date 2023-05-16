/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Bookingnow = ({booking,handleDelete,handleConfirm}) => {
    const {image,name,price,date,service,_id,status} = booking

  
    return (
        <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              
              <div className="text-sm ">{service}</div>
            </div>
          </div>
        </td>
      
        <td>
          <div className="flex items-center space-x-3">
           
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
         {price}
        </td>
        <td>{date}</td>
        <th>
          {status==='confirm'?<span className='font-bold text-secondary'>Confirmed</span>:
          <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirme</button>}
        </th>
      </tr>
    );
};

export default Bookingnow;