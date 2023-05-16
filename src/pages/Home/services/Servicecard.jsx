/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBeer,FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Servicecard = ({service}) => {
    const {title,price} = service
    return (
        <div className='mb-2 p-4 bg-slate-100 rounded-lg '>
             <img className="mb-2 h-52 shadow-lg rounded-lg mx-auto" src={service.img} alt="" />
             <h3 className='text-2xl'>{title}</h3>
             <p>Price: ${price}</p>
            <div className='flex justify-between items-center'>
            <button className='btn btn-primary btn-outline mt-2'>
               <Link to={`/chekout/${service._id}`}> Book Now</Link>
                </button>
            <FaArrowAltCircleRight className='text-3xl mt-2 cursor-pointer'></FaArrowAltCircleRight>
            </div>
        </div>
    );
};

export default Servicecard;