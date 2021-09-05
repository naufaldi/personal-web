import React from 'react';

const CardService = () => {
  return (
    <div className='w-full bg-white rounded-2xl transition-all  border hover:border-transparent border-gray-200 p-6 flex flex-col hover:shadow-service'>
      <div className='bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center'>
        <img src='/icons/phone.svg' className='h-6 w-6' alt='Phone Icons' />
      </div>
      <h6 className='mt-6 text-base text-black'>Web Develop</h6>
      <p className='mt-3 text-black text-sm'>
        Lets build some website to improve your product. Optimized, Responsive,
        and great website for you.
      </p>
    </div>
  );
};

export default CardService;
