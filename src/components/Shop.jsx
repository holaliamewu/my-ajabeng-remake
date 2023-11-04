import React from 'react';
import { Link } from 'react-router-dom';
import ShopData from './ShopData';

export default function Shop() {
    return(<div>
            <h1 className='text-[56px] text-center mt-[60px] pb-[35px]'>Shop</h1>
            <nav className='w-fit mx-auto'>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>AFROROMANCE</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>GHANA AWAKE</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>MAAME YAA</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>PRIDE OF GHANA</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>AJABENG X OKUNTAKINTE</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>MENSWEAR</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>WOMENSWEAR</Link>
            </nav>

            <div className='flex justify-between align-center w-[90%] mx-auto mt-[50px] pb-8'>
                <span
                className='text-[10px]'
                >
                    <Link 
                    className='hover:underline'
                    to='/home'
                    >HOME </Link>/ SHOP
                </span>
                <span className='text-[13px] font-semibold border p-2 '>DEFAULT SORTING</span>
                </div>
                <div className="w-screen">
                    {ShopData.map(item => (<div 
                        className="inline-block mx-6 w-[29%] mb-[20px]">
                            <img 
                            src={item.Img} 
                            alt={item.name} 
                            className="w-full"/>
                            
                            <div className="flex justify-between items-end">
                                <h3 className="text-[13px] mt-[17px]">{item.name}</h3>
                                <i class="fa-regular fa-heart"></i>
                                </div>
                                <h4 className="text-[13px] text-[#545454cc] mt-[4px] font-[500]">{item.price}</h4>
                        </div>))}
                </div>
        </div>)
}