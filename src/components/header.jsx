import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className=''>
        <div className='flex justify-between pl-4 pr-4 pt-3 pb-2 md:pt-2 md:pb-3 md:pl-16 md:pr-16 bg-[#638889] fixed w-full '>
        <Link to="/"><div className='text-2xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:text-[#F9EFDB] duration-300'> Logo</div></Link>
          <div>
        <Link to="/contact"> <button 
              className='text-lg border rounded-md  pl-2 pr-2 pt-1 pb-1 md:pl-4 md:pr-4 md:pt-1 md:pb-1 font-semibold bg-[#F9EFDB] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:font-bold duration-300 '
              aria-label='Contact Us'
            >
              Contact Us
            </button></Link>

           
          </div>
        </div>
      </nav>
    );
  }
}


