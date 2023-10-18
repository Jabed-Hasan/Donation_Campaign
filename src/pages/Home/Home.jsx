import React, { useState } from 'react';
import DonarCatagory from '../../components/DonarCatagory/DonarCatagory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const Donars = useLoaderData();
  const [search, setSearch] = useState(Donars);
  const [searchText, setSearchText] = useState('');
  const [noResults, setNoResults] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = searchText.toLowerCase();
    const newArr = Donars.filter((Donar) => Donar.category.toLowerCase().includes(inputValue));
    setSearch(newArr);
    setNoResults(newArr.length === 0);
  };

  console.log(Donars);

  return (
    <div>
      <div>
        <div className='relative h-[70vh] bg-[url("https://i.ibb.co/bFyGPC9/382241382-351428693981390-7996110641281311187-n.jpg")] opacity-20'></div>
        <div>
          <h1 className='absolute font-semibold left-[6%] bottom-[2%] md:left-[30%] md:bottom-[20%] lg:top-[40%] lg:left-[23%] text-black text-center text-lg lg:text-5xl md:text-2xl items-center border-solid'>I Grow By Helping People In Need</h1>
          <div className='absolute  lg:text-2xl left-[2%] top-[100%] md:left-[30%] md:top-[90%]  lg:top-[60%] lg:left-[33%]'>
            <div >
              <form className='item-center ml-10' onSubmit={onSubmit}>
                <input
                  className='p-2 rounded-lg'
                  type="text"
                  placeholder='Search by category...'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <input
                  className='bg-red-500 text-white p-2 rounded-lg cursor-pointer hover:bg-orange-500'
                  type='submit'
                  value='Search'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {noResults ? (
        <p className='text-center font-bold text-3xl m-10'>No matching categories found.</p>
      ) : (
        Array.isArray(search) && <DonarCatagory Donars={search} />
      )}
    </div>
  );
};

export default Home;
