import clsx from 'clsx';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, id, className }: ContainerProps) => {
  return (
    <div
      id={id}
      className={clsx(
        'max-w-screen-xl mx-auto grid grid-cols-12 gap-4 lg:gap-8 px-4 lg:px-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
