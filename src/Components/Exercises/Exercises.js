import React from 'react';
import './Exercises.css';

const Exercises = (props) => {
    const {img,name,age,time} = props.exercises;
    return ( 
        <div className="mt-8">
            <div className="card w-100 bg-base-100 shadow-2xl">
                <figure><img className='rounded-2xl mt-5' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-normal">{name}!</h2>
                    <p>For age : {age}</p>
                    <p>Exercise Duration : {time}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Exercises;