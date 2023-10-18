import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({Donar}) => {
const {

category_bg,
text_button_bg,
card_bg,
} = Donar;

const btnStyle = {
    backgroundColor:category_bg,
    color:text_button_bg,
    fontSize: "14px",

    
};
const Card_bg = {
    backgroundColor: card_bg,
};
const title_bg = {
    color:text_button_bg,
};


const {id,picture,title,category,description} = Donar || {}


    return (
       

        <div>
            
           <Link to={`/Details/${id}`}>
           <div style={Card_bg} className="card  bg-base-100 shadow-xl">
                <figure><img className='w-full h-[194px]' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                   
                   <button style={btnStyle} className="my-3 p-1 w-20 bg-slate-400 rounded-lg">{category}</button>
                    <h2 style={title_bg} className="card-title.slice(0,14) font-bold">
                        {title}
                    
                    </h2>
                    
                
                </div> 
            </div>
           
           </Link>
        </div>
    );
};

export default Card;