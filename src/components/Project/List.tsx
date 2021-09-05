import React from 'react';
import { Container } from '../Common';
import Card from '../Common/Card';

const List = () => {
  return (
    <>
      <section id='list-project' className='w-full mt-6'>
        <Container>
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default List;
