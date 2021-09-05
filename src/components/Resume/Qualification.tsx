import React, { Fragment } from 'react';
import { Container } from '../Common';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import Work from './Card/Work';
import listWork from '@/data/listWork';
import Skill from './Card/Skill';

const Qualification = () => {
  return (
    <section id='qualification' className='w-full pt-16'>
      <Container>
        <div className='col-span-8 col-start-3 flex'>
          <Tab.Group>
            <Tab.List className='w-auto flex flex-col mr-[94px] space-y-8'>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      'bg-white border p-5 flex items-center font-bold text-2xl rounded-2xl',
                      selected
                        ? 'border-gray-200'
                        : 'shadow-qualification border-transparent'
                    )}
                  >
                    <span
                      className={clsx(
                        'h-12 w-12 flex items-center justify-center rounded-full mr-5',
                        selected ? 'bg-purple-500 text-white' : 'text-black '
                      )}
                    >
                      1
                    </span>
                    Experience
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      'bg-white border p-5 flex items-center font-bold text-2xl rounded-2xl',
                      selected
                        ? 'border-gray-200'
                        : 'shadow-qualification border-transparent'
                    )}
                  >
                    <span
                      className={clsx(
                        'h-12 w-12 flex items-center justify-center rounded-full mr-5',
                        selected ? 'bg-purple-500 text-white' : 'text-black '
                      )}
                    >
                      2
                    </span>
                    Qualification
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className='w-[75%]'>
              <Tab.Panel className='flex w-full flex-col space-y-6'>
                {listWork &&
                  listWork.map((item, index) => (
                    <Work
                      key={index}
                      time={item.time}
                      company={item.company}
                      title={item.position}
                      job={item.job}
                    />
                  ))}
              </Tab.Panel>
              <Tab.Panel>
                <Skill />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Container>
    </section>
  );
};

export default Qualification;
