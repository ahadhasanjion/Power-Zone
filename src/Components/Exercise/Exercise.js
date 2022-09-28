import React, {useEffect, useState}from 'react';
import Exercises from '../Exercises/Exercises';
import './Exercise.css';
import Cart from '../Cart/Cart';


const Exercise = () => {
    const [exercise, setExercises] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    return (
        <div className='exercise'>
            <div className='exercise-container pt-10'>
                <h2 className='font-semibold text-2xl text-emerald-500'>Select Your Exercises</h2>
                <div className='exercises'>
                   {
                      exercise.map(exercises => <Exercises key={exercises._id} exercises={exercises}></Exercises>)
                   }
                </div>

            </div>
            <div>
                <Cart></Cart>
            </div>
            
        </div>
    );
};

export default Exercise;