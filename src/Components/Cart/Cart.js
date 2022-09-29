import React from 'react';
import './Cart.css';
import images from'../../images/pexels-pixabay-260352.jpg';
import Swal from 'sweetalert2';


const Cart = (props) => {
   const {cart} = props;
   let seconds = 0;
   for(const exercises of cart){
     seconds = seconds + exercises.time;
   }
    
    return (
        <div className="cart bg-gray-400">
            <div className="cart-name">
                <img className="cart-image" src={images} alt="" />
                <div className='niallhoran text-dark'>
                    <p>Niall Horan</p>
                    <p>Mullinger, Ireland</p>
                </div>
            </div>
            <div className='my-6'>
                <p className='px-3 mb-4'>Add A Break</p>
                <div className='add-a-break flex'>
                    <ul className='grid grid-cols-5'>
                        <li>10s</li>
                        <li>20s</li>
                        <li>30s</li>
                        <li>40s</li>
                        <li>50s</li>
                    </ul>
                </div>
            </div>
            <div className='ed px-3'>
                <p>Exercise Details</p>
                <div className='flex justify-between p-2 bg-base-300 rounded mt-3 py-3'>
                    <p>Exercise Time</p>
                    <p>{seconds}s</p>
                </div>
                <div className='flex justify-between p-2 bg-base-300 rounded mt-4 py-3'>
                    <p>Break Time</p>
                    <p>seconds</p>
                </div>
            </div>
            <div className='btn-completed'>
                <button className="btn btn-primary w-100 mt-10">
                Swal.fire('Good job!','You clicked the button!','success');

                    Exercise Completed
                </button>
            </div>
        </div>
    );
};

export default Cart;