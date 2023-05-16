/* eslint-disable no-unused-vars */
import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-[900px] md:min-h-[700px] bg-base-200  my-14 ">
  <div className="hero-content gap-24 flex-col justify-between lg:flex-row">
    <div className=' relative'>
    <img src={person} className='md:h-5/6'/>
    <img src={parts} alt="" className='w-[400px] rounded-lg  border-8 border-white absolute  md:-right-20 bottom-[-130px] '/>
    </div>
    <div>
        <h3 className='text-4xl text-orange-500'>About us</h3>
      <h1 className="text-5xl font-bold">We are qulified & of expariance of in this field</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis incidunt minima, ea sapiente amet sint eius dolor optio? Ipsa?</p>
      <button className="btn btn-secondary">Get more info</button>
    </div>
  </div>
</div>
    );
};

export default About;