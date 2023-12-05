import React, { HTMLAttributes } from 'react';
import cNameWriter from '@/utils/cNameWriter';

type Theme = 'orange' | 'white' | 'purple';
type Size = 'small' | 'large';
type ButtonProps = { theme?: Theme; size?: Size } & HTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  theme = 'orange',
  size = 'small',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cNameWriter(
        buttonColorDict[theme],
        sizeDict[size],
        'font-bold whitespace-nowrap',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const buttonColorDict: Record<Theme, string> = {
  orange: 'bg-orange-sub01 text-white',
  white: 'bg-white border-2 border-ghost text-sub',
  purple: 'bg-white border-2 border-purple-main',
};

const sizeDict: Record<Size, string> = {
  small: 'px-[12px] py-[5px] rounded-[15px] text-sm',
  large: '',
};

export default Button;
