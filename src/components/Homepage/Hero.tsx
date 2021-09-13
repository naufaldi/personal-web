import React from 'react';
import { Button, Container } from '../Common';
import PersonImage from '@/public/img/myself.png';
import Image from 'next/image';
// import TailwindImg from '@/public/img/logo/tailwind.svg';

const Hero = () => {
  return (
    <section
      id='hero-personal'
      className='w-full min-h-screen sm:min-h-0 sm:h-[70vh] lg:h-screen flex'
    >
      <Container className='my-auto'>
        <div className='col-span-full lg:col-span-6 flex flex-col items-start justify-start '>
          <h3 className='text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-plum-500 via-amaranth-500 to-tango-500 mt-8'>
            Frontend Developer
          </h3>
          <h1 className='mt-3 lg:mt-4 text-4xl lg:text-5xl leading-snug text-black'>
            Hi, I am Naufaldi Rafif S 👋
          </h1>
          <p className='text-sm lg:text-base mt-4 lg:mt-6 text-gray-100'>
            Special human with some ability to love learning and working on
            teamwork. Getting Buff +1 for learning, Buff +2 for documentation
            and more buff on managing team. Exicited on React, UX Research and
            Agile Development.
          </p>
          <Button variants='primary' className='mt-8 lg:mt-12'>
            View My Profile
          </Button>
        </div>
        <div className='col-span-full lg:col-span-5 col-end-13 flex items-center justify-center relative'>
          <div className=' absolute flex z-[2] top-[35%]'>
            <div className='relative bg-gradient-pink filter blur-[200px] lg:blur-[300px] w-52 h-52 lg:h-[240px] lg:w-[240px] rounded-full -mx-8'></div>
            <div className='relative bg-gradient-blue filter blur-[200px] lg:blur-[300px] w-52 h-52 lg:h-[240px] lg:w-[240px] rounded-full -mx-8'></div>
            <div className='relative bg-gradient-ocean filter blur-[200px] lg:blur-[300px] w-52 h-52 lg:h-[240px] lg:w-[240px] rounded-full -mx-8'></div>
          </div>
          <div className='w-full  h-[300px] lg:w-[400px] lg:h-[400px] rounded-full mx-auto relative z-[3]'>
            <div className='bg-white relative rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-xl h-16 w-16 lg:h-[78px] lg:w-[78px] top-3 -left-2 z-[2] flex items-center justify-center'>
              <img
                src='/img/logo/tailwind.svg'
                className='w-12 h-12 lg:h-16 lg:w-16'
                alt='Logo Tailwind'
              />
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-white bg-opacity-40 rounded-full'>
              <Image
                src={PersonImage}
                placeholder='blur'
                alt='Person'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
            <div className='bg-white absolute rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-xl h-16 w-16 lg:h-[78px] lg:w-[78px] bottom-3 -right-2 z-[2] flex items-center justify-center'>
              <img
                src='/img/logo/next-js.svg'
                className='w-12 h-12 lg:h-16 lg:w-16'
                alt='Logo Tailwind'
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
