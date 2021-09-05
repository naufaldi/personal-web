import React from 'react';
import { Button, Container } from '../Common';
import Card from '../Common/Card';

const Project: React.FC = () => {
  return (
    <section id='project' className='w-full pb-[100px]'>
      <Container>
        <div className='col-span-8 col-start-3 flex flex-col'>
          <h4 className='font-gradient text-2xl'>Project</h4>
          <h3 className='text-black text-4xl mt-3'>What i has been done</h3>
        </div>
        <div className='col-span-8 col-start-3 grid grid-cols-2 gap-8 mt-8'>
          <div className='col-span-full'>
            <Card className='bg-orange-500' />
          </div>
          <div className='col-span-1'>
            <Card className='bg-blue-500' type='small' />
          </div>
          <div className='col-span-1'>
            <Card className='bg-blue-500' type='small' />
          </div>
          <div className='col-span-full flex mt-8'>
            <Button variants='primary' className='min-w-[120px] mx-auto'>
              See All
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Project;
