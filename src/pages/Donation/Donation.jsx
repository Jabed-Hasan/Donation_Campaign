import React, { useEffect, useState } from 'react';
import DonarCard from '../CardDetails/DonarCard';
import DonationCards from './DonationCards';





const Donation = () => {
     const [donations,setDonations] =useState([]);
     const [noFound,setNoFound] = useState(false);
    const [isShow,setIsShow] = useState(false)
     useEffect(() => {
        const DonatedItems = JSON.parse(localStorage.getItem("Donations"))
        if(DonatedItems){
               setDonations(DonatedItems);

        }
        else{
            setNoFound("No Data Found");
        }
     },[])

     console.log(donations);

    return (
        <div>
            {noFound ? <p >{noFound}</p> :<div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 m-2 lg:grid-cols-2 justify-center items-center lg:ml-12 '>
                    {isShow ? donations.map(Detail => 
                    <DonationCards key ={Detail.id} Detail={Detail} > </DonationCards>)
                :donations.slice(0,4).map(Detail => 
                    <DonationCards key ={Detail.id} Detail={Detail} > </DonationCards>)
                
                }
                </div>
                {donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className='px-5 py-2 bg-green-600 block mx-auto rounded-md text-white'>{isShow ? "See Less" : "See All"}</button> }
                </div>
                }
        </div>
    );
};

export default Donation;