import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../features/Header';
import Footer from '../features/Footer';

export default function Home() {
    return(
        <div className='min-h-screen'>
            <Header />
            <div>
                <div className="bg-[url('/src/assets/AJABENG2237-jpg.jpeg')] w-[97.5%] mx-auto h-[1007px] flex flex-col justify-center items-center">
                    <h1 className='text-[50px] pb-[25px]' >Pride Of Ghana</h1>
                    <h3 className='text-[18px] pb-[40px]'>Exploring the sonic and visual essence of Nkrumah's Ghana</h3>
                    <Link 
                    to='/shop' 
                    className='px-[18px] py-[16px] pr-[15px] bg-black text-white text-[14px]'
                    >SHOP NOW</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}