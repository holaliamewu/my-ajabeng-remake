import React from 'react';

export default function Footer() {
    return(<div className='bg-gray-200'>
            <div className='flex mx-auto mt-[80px] mb-[20px] py-[50px]'>
                
                <div className='flex flex-col md:w-[22vw] ml-[50px]'>
                    <h3 className='mt-[15px] font-[300] text-[13px]'>LEGAL</h3>
                    <span className='mt-[10px] text-[15px] font-[600]'>Privacy Policy</span>
                    <span className='mt-[10px] text-[15px] font-[600]'>Terms of Sale</span>
                </div>
                <div className='flex flex-col md:w-[22vw]'>
                    <h3 className='mt-[15px] font-[300] text-[13px]'>ASSISTANCE</h3>
                    <span className='mt-[10px] text-[15px] font-[600]'>Ordering</span>
                    <span className='mt-[10px] text-[15px] font-[600]'>Shipping Information</span>
                    <span className='mt-[10px] text-[15px] font-[600]'>Size Guide</span>
                </div>
                <div className='flex flex-col md:w-[22vw]'>
                    <h3 className='mt-[15px] font-[300] text-[13px]'>COMPANY</h3>
                    <span className='mt-[10px] text-[15px] font-[600]'>Contact</span>
                    <span className='mt-[10px] text-[15px] font-[600]'>Stockist</span>
                </div>
                <div className='flex flex-col md:w-[22vw]'>
                    <h3 className='mt-[15px] font-[300] text-[13px]'>FOLLOW</h3>
                    <span className='mt-[10px] text-[15px] font-[600]'>instagram</span>
                    <span className='mt-[10px] text-[15px] font-[600]'>whatsapp</span>
                </div>
                
            </div>
            <div className='flex flex-col justify-center items-center h-[221px]  border-t border-gray-300'>
            <span className='flex justify-around w-[100px] py-[15px]'>
                <i class="fa-brands fa-instagram text-[18px]"></i>
                <i class="fa-brands fa-whatsapp text-[18px]"></i>
            </span>

            <h4 className='text-[14px] text-[#868686]'>&copy; 2021 Ajabeng. All Right Reserved.</h4>
            </div>
        </div>
    )
}