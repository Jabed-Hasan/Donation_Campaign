import React from 'react';
import SearchBarPage from '../../../DonarCatagory/SearchBarPage';





const Banner = () => {
    return (
        
        <div >
        <div className='relative h-[70vh]   bg-[url("https://i.ibb.co/bFyGPC9/382241382-351428693981390-7996110641281311187-n.jpg")] opacity-20'></div>
        <div>
        <h1 className= 'absolute font-semibold left-[6%] bottom-[2%]  md:left-[30%] md:bottom-[5%] lg:top-[50%] lg:left-[23%] text-black text-center text-lg lg:text-5xl md:text-2xl items-center border-solid '>I Grow By Helping People In Need</h1>
        <div className= 'absolute font-semibold left-[15%] bottom-10 md:right-[8%] md:bottom-14 lg:top-[68%] lg:left-[15%] text-black text-center text-sm lg:text-xl items-center'>
        <SearchBarPage className = '' >
            
        </SearchBarPage>
        </div>
        </div>
       
        </div>
    );
};


export default Banner;