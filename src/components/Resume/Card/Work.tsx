import React from 'react';

type WorkProps = {
  company: string;
  title: string;
  time: string;
  job: string[];
};

const Work = ({ company, title, time, job }: WorkProps) => {
  return (
    <div className='w-full flex flex-col p-6 shadow-qualification bg-white'>
      <h6 className='font-gradient text-base'>{time}</h6>
      <div className='flex flex-col'>
        <h4 className='text-black mt-6 text-2xl'>{company}</h4>
        <p className='text-sm mt-1 text-gray-100'>{title}</p>
      </div>
      <ul className='list-outside list-decimal mt-6 text-base ml-6'>
        {job.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
