
import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from './Banner/Banner';

const Navbar = () => {
    return (
        <div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between items-center py-7 shadow-md px-5">
                
                <img className='' src= "https://i.ibb.co/XxXDKXS/Logo.png" alt="" />

            <ul className='flex gap-5'>
                <li className='pl-8 md:pl-10 lg:pl-2'>

                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>

                    <NavLink
                        to="/Donation"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : "" 
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>


                    <NavLink
                        to="/Statistics"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>

                



            </ul>
         
            </div>
         
        </div>
    );
};

export default Navbar;





