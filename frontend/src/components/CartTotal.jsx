import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full '>
      <div className='text-2xl'>
           <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'> 
           <div className='flex justify-between '>
               <p>Subtotal</p>
               <p>{currency} {getCartAmount()}.00</p>
           </div>
           <hr />
           <div className='flex justify-between '>
              <p>Shipping Fee</p>
              <p>{}{delivery_fee}</p>   
              {/* want to charge delivery fee then in the empty object use (currency).00 for rupee symbol and delivery fee(update from shopcontext) will be change*/}
           </div>
           <hr />
           <div className='flex justify-between '>
               <b>
                Total
               </b>
               <b>
                {currency}{getCartAmount() === 0 ? 0 : getCartAmount() }.00
                {/* (+ delivery_fee) use this after (getCartAmount()) to charge delivery fee */}
               </b>
           </div>
      </div>
    </div>
  )
}

export default CartTotal