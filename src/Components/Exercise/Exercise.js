import React, {useEffect, useState}from 'react';
import Exercises from '../Exercises/Exercises';
import './Exercise.css';
import Cart from '../Cart/Cart';


const Exercise = () => {
    const [exercise, setExercises] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    const addToCart = (exercises) => {
         const newCart = [...cart, exercises]
         setCart(newCart);
    }

    return (
        <div className='exercise grid lg:grid-flow-col-dense md:grid-cols-1 grid-cols-1'>
            <div className='exercise-container pt-10'>
                <h2 className='font-semibold text-2xl text-emerald-500 md:text-center'>Select Your Exercises</h2>
                <div className='exercises  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid gap-5'>
                   {
                      exercise.map(exercises => <Exercises key={exercises._id} exercises={exercises} addToCart={addToCart}></Exercises>)
                   }
                </div>

            </div>
            <div className='grid-cols-1 md:grid-cols-2'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Exercise;