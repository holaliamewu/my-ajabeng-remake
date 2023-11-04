import React from "react";
import FeaturedLooksData from './FeaturedLooksData'

export default function FeaturedLooks() {
    return(
            <div className="ml-3 ">
                <h1 className="text-center text-[24px] py-6">Featured Looks</h1>
                <div className="relative">
                    {FeaturedLooksData.map(item => (<div 
                        className="inline-block mr-6">
                            <img 
                            src={item.Img} 
                            alt={item.name} 
                            className="w-[273px]"/>
                            {item.isOutOfStock && <span className="absolute bg-[#808080] text-[white] 
                            top-3 left-3 text-[10px] font-bold px-[7px] py-[2px]"
                            >OUT OF STOCK</span>}
                            
                            <div className="flex justify-between items-end">
                                <h3 className="text-[13px] mt-[17px]">{item.name}</h3>
                                <i class="fa-regular fa-heart"></i>
                                </div>
                                <h4 className="text-[13px] text-[#545454cc] mt-[4px] font-[500]">{item.price}</h4>
                        </div>))}
                </div>
            </div>
        )
}