import React from 'react';

import { Container } from '../Common';
import CardService from '../Service/CardService';

const Service = () => {
  return (
    <section id='what-i-do' className='w-full pt-10 sm:pt-20'>
      <Container>
        <div className='col-span-full sm:col-span-4 sm:col-start-5 lg:col-span-2 lg:col-start-6 flex flex-col items-center'>
          <h4 className='font-gradient text-xl sm:text-2xl '>Services</h4>
          <h3 className='font-black text-3xl sm:text-4xl mt-3'>What I Do</h3>
        </div>
        <div className='col-span-full sm:col-span-10 sm:col-start-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
          <CardService />
          <CardService />
          <CardService />
          <CardService />
        </div>
      </Container>
    </section>
  );
};

export default Service;
