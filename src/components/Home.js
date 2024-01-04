import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '../Redux/Actions/postActions';
import { addCart } from '../Redux/Actions/cartAction';

const Home = () => {

    const {isLoading,data,error} = useSelector((state)=>state.post);
    const cart = useSelector((state => state.cart))

    const dispatch = useDispatch();
    console.log(data.products);
    console.log(cart);
    useEffect(()=>{
        dispatch(postRequest());
    },[])

    function calculateBuyPrice(actualPrice, discount){
            const discountAmnt = actualPrice * (discount/100);
            return Math.round(actualPrice - discountAmnt);
        }

        function addToCart(product){
            dispatch(addCart(product));
            alert("Product added to Cart");
        }

        //()=>dispatch(addCart(product))

  return (
    <div>
        <div className='header'><h1>All Items</h1></div>
        <div className='container'>

            {
                 data.products && data.products.length > 0 && data.products.map((product,index)=>(
                    
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
                            <button className='btn' onClick={()=>addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home