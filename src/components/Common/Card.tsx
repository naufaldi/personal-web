import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
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
          'p-8 flex flex-col w-full rounded-2xl transform transition-all hover:scale-105',
          className
        )}
      >
        <div
          className={clsx(
            'flex  ',
            type == 'small'
              ? 'flex-col space-y-5 h-[306px]'
              : ' space-x-5 h-[273px]'
          )}
        >
          <div
            className={clsx(
              'relative overflow-hidden rounded-lg  ',
              type == 'small' ? 'w-full h-[75%]' : 'w-8/12 h-full'
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
              'flex  ',
              type == 'small'
                ? 'space-x-5 w-full h-[25%]'
                : 'w-4/12  flex-col space-y-5  h-full'
            )}
          >
            <div
              className={clsx(
                'relative overflow-hidden rounded-lg',
                type == 'small' ? 'w-6/12 h-auto' : ' h-1/2'
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
                'relative overflow-hidden rounded-lg',
                type == 'small' ? 'w-6/12 h-auto' : ' h-1/2'
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
            'flex w-full justify-between  ',
            type == 'small' ? 'flex-col mt-6' : 'items-center mt-8'
          )}
        >
          <h4 className='text-white text-2xl'>VPN Apps Landingpage</h4>
          <div className={clsx('flex space-x-4', type === 'small' && 'mt-4')}>
            <div className='bg-white bg-opacity-70 overflow-hidden rounded-lg flex items-center justify-center h-11 w-11 '>
              <img
                src={'/img/logo/tailwind.svg'}
                className='h-6 w-6'
                alt='Tailwind Logo'
              />
            </div>
            <div className='bg-white bg-opacity-70 overflow-hidden rounded-lg flex items-center justify-center h-11 w-11 '>
              <img
                src={'/img/logo/tailwind.svg'}
                className='h-6 w-6'
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
