import React from 'react';

export default function About() {
    return(<div className='flex'>
            <img 
            src='src\assets\AJ06.jpeg'
             alt='main about photo'
             className='ml-[-20%] w-[70%]' />
            <div className='px-[83.5px] py-[150px]'>
                <h1 className='text-[56px] text-center'>ABOUT<br /> AJABENG</h1>
                <h4 className='text-[16px] text-[#808080] text-center my-4'>—Afro Minimalist Fashion Brand</h4>
                <hr/>
                <div className='flex'>
                    <section className='px-[15px] py-[20px] w-[45%]'>
                        AJABENG explores the purity and vibrancy
                        of African culture that infuses post-colonial optimism
                        with a pan-African spirit.<br/><br/>

                        Launched by Travis Obeng-Casper in 2020. AJABENG experiments
                         with both feminine and masculine design elements to create an aesthetic that is as experimental as it is conservative.<br/><br/>
                         
                        The brand’s dedication to building a more sustainable fashion ecosystem is underscored by its commitment to fair 
                         employment practices, providing opportunities for young African creatives, and maximizing the use of biodegradable materials in its creations<br/><br/>
                     </section>
                     <section className='px-[15px] py-[20px] mb-[50px] w-[45%]'>AJABENG made its international runway debut at Arise Fashion Week 2020 to much critical acclaim. The brand was selected as one of 
                     “30 under 30″ African brands by a panel of judges including Dawodu Mobolaji, Fashion Director for GQ Style USA and Naomi Campbell, international 
                     supermodel. AJABENG was subsequently selected as one of the Top 8 African brands along side LVMH Prize Finalist Kenneth Ize and South African fashion
                      sensation MmusoMaxwell.<br/><br/>

                     Since then, AJABENG has gone on to collaborate with acclaimed African creatives such as stylist Daniel Obasi, and Photographer Stephen Tayo. The 
                     brand has been featured in Clash Magazine modelled by Ghanaian indie music sensation Amaarae and on IndustrieAfrica worn by Cape Verdean songstress
                      Mayra Andrade.</section>
                      </div>
                    <hr/>
                    <span className='flex pt-[40px] '>
                        <section className='px-[15px] w-[49%]'>
                        <h1 className='mb-[10px] text-[13px] font-semibold'>GENERAL ENQUIRIES</h1>
                        <p>enquiries@ajabeng.com <br/>
                            Whatsapp on +233 54 261 7710
                        </p>
                        </section>

                        <section className=' px-[15px] w-[45%]'>
                            <h1 className='mb-[10px] text-[13px] font-semibold'>LOCATION</h1>
                            <p>Viva Concept Store,<br/>
                                Liongwe Ave, Accra
                            </p>
                        </section>
                    </span>
            </div>
        </div>)
}