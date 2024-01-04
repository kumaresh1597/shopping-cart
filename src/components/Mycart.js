import React,{useEffect, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getData,removeCart } from '../Redux/Actions/cartAction';



const Mycart = () => {

    const cart = useSelector((state => state.cart))

    const [total,setTotal] = useState(0);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (cart.length === 0) {
            setTotal(0);
          }
          else{
            const newTotal = cart.reduce((acc, item) => acc + calculateBuyPrice(item.price,item.discountPercentage),0);
            setTotal(newTotal);
          }
    },[cart])

    console.log(cart);

    function calculateBuyPrice(actualPrice, discount){
        const discountAmnt = actualPrice * (discount/100);
        return Math.round(actualPrice - discountAmnt);
    }

  return (
    <div>
        <div><h1>My Cart</h1></div>
        <div className='main-container'>
            <div className='container-cart'>
             {
                cart.length > 0 && cart.map((product,index)=>(
                    
                    <div key={index} className='card'>
                        <div className='img-div'> 
                            <img src={product.thumbnail} alt=''/> 
                        </div>
                        <div className='description'> 
                            <div class="title-div"><p class="title">${product.title} &nbsp;  <span class="brand">{product.brand}</span></p></div>
                            <p class="price">Price : $. {product.price} <span class="discount"> - {product.discountPercentage} %</span></p>
                            <p class="buy-price">Buy Price : $. {calculateBuyPrice(product.price,product.discountPercentage)}</p>
                        </div>
                        <div className='btn-div'>
                            <button className='btn' onClick={()=>(dispatch(removeCart(product)))}>Remove from cart</button>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className='checkout-container'>
                <h1>checkout List</h1>
               {
                cart.length > 0 && cart.map((product,index)=>(
                    
                    <div key={index} className='list'>
                        <div class="title-div"><p class="title">{product.title}</p></div>
                        <div><p class="buy-price">$. {calculateBuyPrice(product.price,product.discountPercentage)}</p></div>
                    </div>
                    ))
                }
                <div className='border-line'></div>
                <div className='total'>
                    <div>Total</div>
                    <div>${total}</div>
                </div>
                <div className='border-line'></div>
            </div>
        </div>
        
    </div>
  )
}

export default Mycart