import Image from "next/image";
import {useState} from 'react';
import {StarIcon} from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING=5;
const MIN_RATING=1;

function Products({id,price,description,category,image,title}) {
    const dispatch=useDispatch();

    const addItemToBasket=()=>{
        const product={id,price:price*60,description,category,image,title,hasPrime,rating}
        dispatch(addToBasket(product))
    }

    const [rating]=useState(
        Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
    );
    
    const [hasPrime]=useState(Math.random()>0.5);
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
           <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
           <Image src={image} height={200} width={200} objectFit='contain' /> 
           <h4>{title}</h4>
           <div className="flex">
            {Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarIcon key={i} className='h-5 text-yellow-500' />
                ))
            }
           </div>
           <p className='text-xs my-2 line-clamp-2'>{description}</p>
           <div>
                <Currency quantity={price*60} currency='INR' />
           </div>
           {hasPrime && (
               <div className='flex items-center space-x-2 '>
                    <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
               </div>
           )}
           <button className='mt-auto button' onClick={addItemToBasket}>Add to Basket</button>
        </div>
    )
}

export default Products
