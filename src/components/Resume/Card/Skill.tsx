import React from 'react';

const Skill = () => {
  return (
    <div className='grid grid-cols-2 gap-4 w-full'>
      <div className='col-span-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <h6 className='font-gradient text-base'>Softskill</h6>
          <div className='flex items-center w-full justify-between space-x-4 mt-2'>
            <h4 className='text-black text-2xl'>Teaching</h4>
          </div>
          <p className='text-sm mt-1 text-gray-100'>
            Teaching / Mentoring to become Frontend Developer
          </p>
        </div>
      </div>
      <div className='col-span-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <h6 className='font-gradient text-base'>Softskill</h6>
          <div className='flex items-center w-full justify-between space-x-4 mt-2'>
            <h4 className='text-black text-2xl'>Writing</h4>
          </div>
          <p className='text-sm mt-1 text-gray-100'>
            Write documentation, articles, and blog posts for technical
          </p>
        </div>
      </div>
      <div className='col-span-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <h6 className='font-gradient text-base'>Softskill</h6>
          <div className='flex items-center w-full justify-between space-x-4 mt-2'>
            <h4 className='text-black text-2xl'>UX Research</h4>
          </div>
          <p className='text-sm mt-1 text-gray-100'>
            Research for user experience and design
          </p>
        </div>
      </div>

      <div className='w-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <div className='flex items-center w-full justify-between space-x-4'>
            <h4 className='font-gradient text-2xl'>Javascript</h4>
            <img
              src='/img/logo/logo-javascript.svg'
              alt='NextJS Logo'
              className='h-7 w-7'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <div className='flex items-center w-full justify-between space-x-4'>
            <h4 className='font-gradient text-2xl'>Typescript</h4>
            <img
              src='/img/logo/typescript.svg'
              alt='NextJS Logo'
              className='h-7 w-7'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <div className='flex items-center w-full justify-between space-x-4'>
            <h4 className='font-gradient text-2xl'>TailwindCSS</h4>
            <img
              src='/img/logo/tailwind.svg'
              alt='NextJS Logo'
              className='h-7 w-7'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <div className='flex items-center w-full justify-between space-x-4'>
            <h4 className='font-gradient text-2xl'>MaterialUI</h4>
            <img
              src='/img/logo/material-ui-1.svg'
              alt='NextJS Logo'
              className='h-7 w-7'
            />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <div className='flex items-center w-full justify-between space-x-4'>
            <h4 className='font-gradient text-2xl'>ReactJS</h4>
            <img
              src='/img/logo/react-2.svg'
              alt='NextJS Logo'
              className='h-7 w-7'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <div className='flex items-center w-full justify-between space-x-4'>
            <h4 className='font-gradient text-2xl'>NextJS</h4>
            <img
              src='/img/logo/next-js.svg'
              alt='NextJS Logo'
              className='h-7 w-7'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col p-4 shadow-qualification bg-white rounded-lg'>
        <div className='flex flex-col'>
          <div className='flex items-center w-full justify-between space-x-4'>
            <h4 className='font-gradient text-2xl'>GatsbyJs</h4>
            <img
              src='/img/logo/gatsby.svg'
              alt='Gatsby Logo'
              className='h-7 w-7'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
