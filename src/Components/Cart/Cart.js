import React, {useState} from 'react';
import './Cart.css';
import images from'../../images/pexels-pixabay-260352.jpg';
import Swal from 'sweetalert2'


const Cart = (props) => {
   const {cart} = props;
   let seconds = 0;
   for(const exercises of cart){
     seconds = seconds + exercises.time;
   }
   const toast = () => {
    Swal.fire('Good job!','You clicked the button!','success')
   }

   const second = [10, 20, 30, 40, 50]
   const [addbreak, SetAddBreakTime] = useState(0);
   const handleClick = (y) => {
    SetAddBreakTime(y)
   }

   const restTime = (id) => {
    document.getElementById('rest').innerText= document.getElementById(id).innerText;

     const newTime = document.getElementById('rest').innerText;
     localStorage.setItem('time', newTime);
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
            <div className='peroson-info flex justify-between px-3 py-3 bg-base-300 rounded mt-10'>
                <div>
                    <p className='text-black'>79<small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div className='text-semibold text'>
                    <p className='text-black'>5.10</p>
                    <p>Height</p>
                </div><div>
                    <p className='text-black'>22<small>yr</small></p>
                    <p>Age</p>
                </div>

            </div>
            <div className='mt-10'>
                <p className='px-3 mb-4'>Add A Break</p>
                <div className='add-a-break flex gap-2 ml-3'>
                    {
                        second.map(t =><button onClick={() => handleClick(t)} key={t} className='btn' id='rest'>{t}<small>s</small></button>
                        )
                    }
                    {/* <button onClick={() => handleClick(addbreak)} className='btn btn-xl'>10<small>s</small></button>
                    <button onClick={() => handleClick(addbreak)} className='btn btn-xl'>20<small>s</small></button>
                    <button onClick={() => handleClick(addbreak)} className='btn btn-xl'>30<small>s</small></button>
                    <button onClick={() => handleClick(addbreak)} className='btn btn-xl'>40<small>s</small></button>
                    <button onClick={() => handleClick(addbreak)} className='btn btn-xl'>50<small>s</small></button> */}
                </div>
            </div>
            <div className='ed px-3 mt-16'>
                <p>Exercise Details</p>
                <div className='flex justify-between p-2 bg-base-300 rounded mt-3 py-3'>
                    <p>Exercise Time</p>
                    <p>{seconds}s</p>
                </div>
                <div className='flex justify-between p-2 bg-base-300 rounded mt-4 py-3'>
                    <p>Break Time</p>
                    <p>{localStorage.getItem('time')}{addbreak}s</p>
                </div>
            </div>
            <div onClick={toast} className='btn-completed'>
                <button className="btn btn-primary w-100 mt-10">Exercise Completed</button>  
            </div>
        </div>
    );
};

export default Cart;