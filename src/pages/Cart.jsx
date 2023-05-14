import { Col,Row, } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { decrementItems, incrementItems } from '../reduxStore/Reducer';


function Cart() {

  // **** Get productReducre -> store *** //
  const cartItem = useSelector(state => state.product);

  // **** Get Methods -> productReducre ***//
  const dispatch = useDispatch();

  // **** Decrement the Items **** //
  const decrement = (itemId) =>{
       console.log(itemId);
      dispatch(decrementItems(itemId))
  }

  // **** Increment the Items **** //
  const increment = (itemId) =>{
    console.log(itemId);
   dispatch(incrementItems(itemId))
}

  return (
    <main className='mt-[90px] p-10'>
      <Row className='w-full mx-auto'>
        { cartItem.products.length > 0?
          (
          <>
            <Col span={16} className='p-8 border-r-2'>
              <ul className=' overflow-y-scroll'>
                 {
                  cartItem.products.map((item,index)=>{
                    return(
                    <li className='flex my-10 justify-between' key={index}>

                      <div  className='flex'>
                          <div className='p-4 w-[200px] '>
                            <img src={item.item.image} alt="product " className='w-full object-cover'/>
                          </div>

                          <div className='p-4'>
                            <h3 className='text-lg text-slate font-bold'>{item.item.title}</h3>
                            <p className='text-base text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis w-[200px]'>{item.item.description}</p>
                            <div className='flex items-center my-2 text-zinc-800 font-medium'> 
                              <span className='mr-2'>Price : ₹{item.item.price}</span>
                            </div>
                            <p className=' text-crimson hover:underline cursor-pointer text-base'>Delete the item</p>
                          </div>
                      </div>
                       <div className='p-4 flex justify-center items-center text-lg font-medium'>
                           <button className='py-1 px-4 rounded text-whiteSmoke bg-slate' onClick={()=> decrement(item.item.id)}>-</button>
                           <span className='text-base text-center mx-4'>{item.quantity}</span>
                           <button className='py-1 px-4 rounded text-whiteSmoke bg-slate' onClick={()=> increment(item.item.id)}>+</button>
                      </div>
                  </li>)
                  })
                 }
              </ul>
            </Col>

            <Col span={8} className='p-8 flex justify-center'>
                    <aside className='rounded'>
                        <div className=" bg-zinc-200 border p-6 w-[500px] text-[18px]">

                          <div className="item_total mt-4 overflow-hidden py-2 flex justify-between">
                            <div className="itemtotal-title">Item Total</div>
                            <div className="itemtotal-value">00</div>
                          </div>

                          <div className="delivertotal my-2 overflow-hidden py-2 flex justify-between">
                            <div className="delivertotal-title">Delivery Charge</div>
                            <div className="delivertotal-value">00</div>
                          </div>

                          <div className="total border-t-2 border-black my-4 overflow-hidden py-2 flex justify-between pt-4">
                            <div className="total-title"> Grand Total</div>
                            <div className="total-value">00</div>
                          </div>

                          <div className="checkout w-full bg-slate hover:bg-black text-whiteSmoke py-4 px-8 text-center rounded">
                            <button className="checkout-cta">Order Now</button>
                          </div>

                        </div>
                    </aside>
            </Col>
          </>
        ):
        (
          <Col className='flex justify-center items-center border-2 py-20 flex-col' span={24}>
            <p className='text-slate text-center font-semibold italic text-2xl'> Your Bag is too Light</p>
            <Link to='/'>
               <button className='py-4 px-5 text-whiteSmoke bg-slate hover:bg-black mt-10 rounded'> Continue to Shopping</button>
            </Link>
          </Col>
        )
      }
    </Row>
        
    </main>
  )
}

export default Cart