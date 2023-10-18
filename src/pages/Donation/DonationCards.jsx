import React from 'react';

const DonationCards = ({ Detail }) => {
    const {

        category_bg,
        text_button_bg,
        card_bg,
        } = Detail;
        
        const btnStyle = {
            backgroundColor:category_bg,
            color: text_button_bg,
            fontSize: "14px",
        
            
        };
        const Card_bg = {
            backgroundColor: card_bg,
        };
        const title_bg = {
            color:text_button_bg,
        };
        const btnb = {
            backgroundColor:text_button_bg,
        }
        

    const { id, picture, title, category, description, price } = Detail || {};

    

    return (
        <div className='py-5 lg:w-[550px]'>
            <div  style={Card_bg}  className="relative flex lg:flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <button style={btnStyle}  className="my-2 p-1 w-20 bg-slate-400 rounded-lg">{category}</button>
                    <h4 className="card-title.slice(0,14) font-bold">
                        {title}
                    </h4>
                    <p style={title_bg} className="m-3 block font-sans  leading-relaxed text-gray-700 antialiased text-lg font-semibold">
                        {price}
                    </p>
                    <button style={btnb} className="text-white p-2 rounded-lg font-semibold "
                        data-ripple-light="true">
                        Veiw Details
                    </button>

                </div>
            </div>
        </div>
    );
};

export default DonationCards;