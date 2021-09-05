import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variants?: 'primary' | 'secondary';
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className = '',
  variants = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-3 px-6 rounded-2xl font-bold text-base ',
        'border',
        'focus:outline-none ',
        {
          'bg-primary text-white': variants === 'primary',
        },
        className
      )}
    >
      {children}
    </button>
  );
}
