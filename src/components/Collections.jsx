import React from 'react';
import CollectionsData from './CollectionsData'

export default function Collections() {
    return(<div className='min-h-screen text-center'>
            <h1 className='text-[57px] pt-[85px] mb-[28px]'>COLLECTIONS</h1>
            <div className='mx-auto '>
                {CollectionsData.map(item => (<div className='w-[31%] inline-block align-top '>
                        <img 
                        src={item.Img} 
                        alt={item.title}
                        key={item.title} 
                        className='w-[95%] hover:bg-[#fff] cursor-pointer'/>
                        <h4 className='pb-[35px] pt-[20px] text-[16px] font-["Century Gothic", sans-serif]'>{item.title}</h4>
                    </div>))}
            </div>
        </div>)
}