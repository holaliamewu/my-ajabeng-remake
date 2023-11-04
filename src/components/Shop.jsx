import React from 'react';
import { Link } from 'react-router-dom';
import ShopData from './ShopData'

export default function Shop() {
    return(<div>
            <h1 className='text-[56px] text-center pb-[35px]'>Shop</h1>
            <nav className='w-fit mx-auto'>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>AFROROMANCE</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>GHANA AWAKE</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>MAAME YAA</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>PRIDE OF GHANA</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>AJABENG X OKUNTAKINTE</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>MENSWEAR</Link>
                <Link className='text-[13px] mx-[12px] py-[5px] border-b font-semibold'>WOMENSWEAR</Link>
            </nav>

            <div className='flex justify-between w-[90%] mx-auto mt-[50px]'>
                <span
                className='text-[10px]'
                >
                    <Link 
                    className='hover:underline'
                    to='/home'
                    >HOME </Link>/ SHOP
                </span>
                <span className='text-[13px] font-semibold border p-2 '>DEFAULT SORTING</span>
                <div className="relative">
                    {ShopData.map(item => (<div 
                        className="inline-block mr-6">
                            <img 
                            src={item.Img} 
                            alt={item.name} 
                            className="w-[273px]"/>
                            
                            <div className="flex justify-between items-end">
                                <h3 className="text-[13px] mt-[17px]">{item.name}</h3>
                                <i class="fa-regular fa-heart"></i>
                                </div>
                                <h4 className="text-[13px] text-[#545454cc] mt-[4px] font-[500]">{item.price}</h4>
                        </div>))}
                </div>
            </div>
        </div>)
}