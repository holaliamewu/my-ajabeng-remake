import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className='flex sticky top-0 bg-white h-[63px] justify-between items-center w-full px-[4%] mx-auto py-[20px]'>
            <img 
            className='w-[90px]'
            src='./src/assets/Ajabeng-black-logo-07-1-png.png' 
            alt='ajabeng logo' />
            <span className='flex gap-6'>
                <nav className='flex'>
                    <Link 
                    className='px-[15px] text-[13px] font-[500]'
                    to='/'>HOME</Link>
                    <Link 
                    className='px-[15px] text-[13px] font-[500]'
                    to='/about'>ABOUT US</Link>
                    <Link 
                    className='px-[15px] text-[13px] font-[500]'
                    to='/shop'>SHOP</Link>
                    <Link 
                    className='px-[15px] text-[13px] font-[500]'
                    to='/prideofghana'>PRIDE OF GHANA</Link>
                    <Link 
                    className='px-[15px] text-[13px] font-[500]'
                    to='/collections'>COLLECTIONS</Link>
                    <Link 
                    className='px-[15px] text-[13px] font-[500]'
                    to='/sizeguide'>SIZE GUIDE</Link>
                    <Link 
                    className='px-[15px] text-[13px] font-[500]'
                    to='/contact'>CONTACT</Link>
                </nav>
                <span className='flex justify-between w-[122px] h-[19.5px] font-[18px]'>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </span>
        </div>
    )
}