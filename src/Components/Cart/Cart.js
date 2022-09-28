import React from 'react';
import './Cart.css';
import images from'../../images/pexels-pixabay-260352.jpg';
const Cart = () => {
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
                    <span>10<small>s</small></span>
                    <span>20<small>s</small></span>
                    <span>30<small>s</small></span>
                    <span>40<small>s</small></span>
                    <span>50<small>s</small></span>

                </div>
            </div>
            <div className='ed px-3'>
                <p>Exercise Details</p>
                <div className='flex justify-between p-2 bg-base-300 rounded mt-3'>
                    <p>Exercise Time</p>
                    <p>200Seconds</p>
                </div>
                <div className='flex justify-between p-2 bg-base-300 rounded mt-4'>
                    <p>Break Time</p>
                    <p>200Seconds</p>
                </div>
            </div>
            <div className='btn-completed'>
                 <button className="btn btn-primary w-100 mt-10">Exercise Completed</button>
            </div>
        </div>
    );
};

export default Cart;