import React from 'react';

import { Container } from '../Common';

const Hero: React.FC = () => {
  return (
    <section id='project' className='w-full pt-[168px]'>
      <Container>
        <div className='col-span-6 col-start-2 lg:col-span-4 lg:col-start-3 flex flex-col'>
          <h4 className='font-gradient text-2xl '>Project</h4>
          <h3 className='text-black mt-2 text-4xl'>What i has been done</h3>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
