import React from 'react';

import { Container } from '../Common';
import CardService from '../Service/CardService';

const Service = () => {
  return (
    <section id='what-i-do' className='w-full pt-20'>
      <Container>
        <div className='col-span-4 col-start-5 lg:col-span-2 lg:col-start-6 flex flex-col items-center'>
          <h4 className='font-gradient text-2xl '>Services</h4>
          <h3 className='font-black text-4xl mt-3'>What I Do</h3>
        </div>
        <div className='col-span-10 col-start-2 grid grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
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
