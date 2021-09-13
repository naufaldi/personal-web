import clsx from 'clsx';
import { FunctionComponent, useEffect, useState } from 'react';
import { Button, Container, CustomLink } from '../Common';

const Header: FunctionComponent = () => {
  const [onTop, setOnTop] = useState<boolean>(true);
  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={clsx(
        'w-full fixed top-0 right-0 left-0 bg-white z-20 transition-all',
        onTop ? ' py-6' : 'shadow  py-3'
      )}
    >
      <Container>
        <div className='col-span-2'>
          <h1 className='font-bold text-2xl lg:text-4xl text-black'>Logo</h1>
        </div>
        <div className='hidden lg:col-end-13 lg:col-span-6 col-span-9  lg:flex items-center justify-end space-x-3 lg:space-x-4'>
          <CustomLink href='/' className='text-sm lg:text-base px-2'>
            About Me
          </CustomLink>
          <CustomLink href='/resume' className='text-sm lg:text-base px-2'>
            Resume
          </CustomLink>
          <CustomLink href='/project' className='text-sm lg:text-base px-2'>
            Project
          </CustomLink>
          <CustomLink
            href='https://blog.cerita-faldi.xyz'
            className='text-sm lg:text-base px-2'
          >
            Blog
          </CustomLink>
          <CustomLink href='/library' className='text-sm lg:text-base px-2'>
            Library
          </CustomLink>
          <div className='flex items-center px-2'>
            <Button variants='primary' className='mx-2 text-sm lg:text-base'>
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
