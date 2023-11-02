import React from 'react';

export default function Header() {
    return(
        <div className='flex justify-between items-center w-[92%] mx-auto py-[20px]'>
            <img 
            className='w-[90px]'
            src='./src/assets/Ajabeng-black-logo-07-1-png.png' 
            alt='ajabeng logo' />
            <span className='flex justify-between w-[172px] h-[19.5px] font-[18px]'>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bars"></i>
            </span>
        </div>
    )
}