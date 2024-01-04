import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getData,removeCart } from '../Redux/Actions/cartAction';


const Mycart = () => {

    const cart = useSelector((state => state))

    const dispatch = useDispatch();

    console.log(cart);

    useEffect(()=>{

        dispatch(getData());

    },[])

    function calculateBuyPrice(actualPrice, discount){
        const discountAmnt = actualPrice * (discount/100);
        return Math.round(actualPrice - discountAmnt);
    }

  return (
    <div>
        <div><h1>All Items</h1></div>
        <div className='container'>

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
    </div>
  )
}

export default Mycart