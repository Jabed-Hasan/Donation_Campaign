import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const Statistics = () => {
  const [Donations, setDonations] = useState([]);

  useEffect(() => {

    const storedDonations = JSON.parse(localStorage.getItem("Donations")) || [];
    setDonations(storedDonations);
  }, []);

  const yourDonations = Donations.length; 
  console.log(yourDonations);
  const totalDonations = 12;


  const data = [
    ['Task', 'Donations'],
    ['Your Donations', yourDonations],
    ['Total Donations', totalDonations],
  ];

  const options = {
    title: '',
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        options={options}
        width={'100%'}
        height={'500px'}
        data={data}
      />
    </div>
  );
};

export default Statistics;