import { FunctionComponent } from 'react';
import { Container, CustomLink } from '../Common';

const Footer: FunctionComponent = () => {
  return (
    <footer className='w-full py-12 mt-20'>
      <Container>
        <div className='col-span-10 col-start-2 flex flex-col'>
          <div className='w-full flex justify-between items-center'>
            <h2 className='text-4xl text-black'>Logo</h2>
            <div className='flex space-x-8'>
              <CustomLink href='/'>Github</CustomLink>
              <CustomLink href='/'>Twitter</CustomLink>
              <CustomLink href='/'>Quora</CustomLink>
              <CustomLink href='/'>Karyakarsa</CustomLink>
            </div>
          </div>
          <hr className='w-full border-gray-200 mt-6' />
          <p className='mx-auto text-center text-sm mt-6'>
            © Naufaldi Rafif S 2021
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
