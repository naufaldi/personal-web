import React from 'react';

import { Container } from '../Common';

const Hero: React.FC = () => {
  return (
    <section id='project' className='w-full pt-32 sm:pt-[168px]'>
      <Container>
        <div className='col-span-full sm:col-span-6 sm:col-start-2 lg:col-span-4 lg:col-start-3 flex flex-col'>
          <h4 className='font-gradient text-xl sm:text-2xl '>Project</h4>
          <h3 className='text-black mt-2 text-3xl sm:text-4xl'>
            What i has been done
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
