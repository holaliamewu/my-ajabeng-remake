import React from 'react';

export default function Footer() {
    return(
        <div className='flex flex-col justify-center items-center h-[321px]'>
        <span className='flex justify-around bg-red-500 w-[100px] text-[18px]'>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
        </span>

        <h4>&copy; Ajabeng 2021. All Right Reserved.</h4>
        </div>
    )
}