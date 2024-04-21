import React from 'react';
import bg from '../assects/bg.jpg';

const CssGrid = () => {
  const cards = [
    {
      title: '10 TRENDS HOME DECORATION FOR BEST CLEANING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'HOW TO CLEANING OWN HOME FOR BEST CLEANING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'TIPS CHOICE BEST AGENCY FOR HOUSE DECORATION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'HOW TO DRAW HOME DESIGN FOR CONSISTENCY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'TIPS MODELING DECORATION HOME MODERN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'HOW TO IMPROVE HOME DESIGN FOR FUTURE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
     <div>
     <h3 className='md:text-3xl text-xl pt-7 md:pt-24  pb-9 font-bold'>Launch fast your great products.</h3>
    <div className='md:pl-16 md:pr-16 pl-4 pr-4 '>
    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-y-6 text-start '>
      {cards.map((card, index) => (
        <div key={index} className=' md:pt-0 shadow-md   hover:-translate-y-1  hover:bg-[#F9EFDB] hover:font-bold duration-300'>
          <div className='bg-cover w-auto h-[300px]' style={{ backgroundImage: `url(${bg})` }}></div>
          <div className='pl-2 pb-2'>
          <div className='pt-5 md:text-xl text-xl font-bold '>{card.title}</div>
          <div className='md:pb-6 md:pt-6 pb-6'>{card.description}</div>
        </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default CssGrid;
