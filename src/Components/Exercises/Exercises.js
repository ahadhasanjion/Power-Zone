import React from 'react';
import './Exercises.css';

const Exercises = ({exercises, addToCart}) => {
    const {img,name,age,time} = exercises;
    return ( 
        <div className="py-8">
            <div className="card w-100 bg-base-100 shadow-2xl">
                <figure><img className='rounded-2xl mt-5' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-normal">{name}!</h2>
                    <p>For age : {age}</p>
                    <p>Exercise Duration : {time}s</p>
                    <button onClick={() => addToCart(exercises)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Exercises;