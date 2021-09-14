import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import VPNImg from '@/public/img/project/vpn-1.png';

import { UnstyledLink } from '.';

interface CardProps {
  className?: string;
  type?: string;
}

const Card = ({ className, type }: CardProps) => {
  return (
    <UnstyledLink href='/'>
      <div
        className={clsx(
          'p-6 lg:p-8 flex flex-col w-full rounded-2xl transform transition-all hover:scale-105',
          className
        )}
      >
        <div
          className={clsx(
            'flex flex-col h-60 space-y-4',
            type == 'small'
              ? 'sm:flex-col sm:space-y-5 sm:h-56  lg:h-[306px]'
              : ' sm:flex-row sm:space-x-5 sm:space-y-0 sm:h-64 lg:h-[273px]'
          )}
        >
          <div
            className={clsx(
              'relative w-full overflow-hidden rounded-lg  ',
              type == 'small' ? 'sm:w-full h-[75%]' : 'sm:w-8/12 h-full'
            )}
          >
            <Image
              src={VPNImg}
              width={type == 'small' ? 376 : 528}
              height={type == 'small' ? 198 : 273}
              alt='VPN Image'
              objectFit='cover'
              layout='fill'
            />
          </div>
          <div
            className={clsx(
              'flex flex-row h-[40%] w-full space-x-4 ',
              type == 'small'
                ? 'sm:space-x-5 sm:flex-row sm:w-full sm:h-[25%]'
                : 'sm:w-4/12  sm:flex-col sm:space-y-5 sm:space-x-0  sm:h-full'
            )}
          >
            <div
              className={clsx(
                'relative w-6/12 h-auto overflow-hidden rounded-lg',
                type == 'small' ? 'sm:w-6/12 sm:h-auto' : 'sm:w-full sm:h-1/2'
              )}
            >
              <Image
                src={VPNImg}
                width={type == 'small' ? 176 : 302}
                height={type == 'small' ? 84 : 127}
                alt='VPN Image'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div
              className={clsx(
                'relative w-6/12 h-auto overflow-hidden rounded-lg',
                type == 'small' ? 'sm:w-6/12 sm:h-auto' : 'sm:w-full sm:h-1/2'
              )}
            >
              <Image
                src={VPNImg}
                width={type == 'small' ? 176 : 302}
                height={type == 'small' ? 84 : 127}
                alt='VPN Image'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'flex flex-col w-full space-y-2 sm:space-y-0 sm:justify-between  ',
            type == 'small'
              ? 'sm:flex-col mt-6'
              : ' sm:flex-row sm:items-center mt-8'
          )}
        >
          <h4 className='text-white text-lg sm:text-xl lg:text-2xl'>
            VPN Apps Landingpage
          </h4>
          <div
            className={clsx(
              'flex space-x-4',
              type === 'small' && 'pt-2 lg:pt-4'
            )}
          >
            <div className='bg-white bg-opacity-70 overflow-hidden rounded-lg flex items-center justify-center h-9 w-9 lg:h-11 lg:w-11 '>
              <img
                src={'/img/logo/tailwind.svg'}
                className=' w-5 h-5 lg:h-6 lg:w-6'
                alt='Tailwind Logo'
              />
            </div>
            <div className='bg-white bg-opacity-70 overflow-hidden rounded-lg flex items-center justify-center h-9 w-9 lg:h-11 lg:w-11 '>
              <img
                src={'/img/logo/tailwind.svg'}
                className=' w-5 h-5 lg:h-6 lg:w-6'
                alt='Tailwind Logo'
              />
            </div>
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default Card;
