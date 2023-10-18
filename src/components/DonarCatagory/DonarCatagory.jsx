import React from 'react';

import PropTypes from 'prop-types'; // Import PropTypes
import Card from './card';

const DonarCatagory = ({Donars}) => {
  console.log(Donars)
    return (
        <div className='py-10 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    Array.isArray(Donars) && Donars?.map(Donar => <Card key = {Donar.id} Donar={Donar} ></Card> )
                }
            </div>
        </div>
    );
};


DonarCatagory.propTypes = {
    Donars: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired, 
      })
    ).isRequired,
  };
  

export default DonarCatagory;