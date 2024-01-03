import React, { HTMLAttributes } from 'react';
import cNameWriter from '@/utils/cNameWriter';

type Theme = 'outline' | 'ghost';

type InputProps = {
  theme: Theme;
} & HTMLAttributes<HTMLInputElement>;

const Input = ({ theme, className, ...props }: InputProps) => {
  return (
    <input
      className={cNameWriter('rounded-[4px] px-[8px] py-[4px]', ThemeDict[theme], className)}
      {...props}
    />
  );
};

const ThemeDict: Record<Theme, string> = {
  outline: 'border-[1px] border-ghost rounded-[4px] placeholder-ghost',
  ghost: 'outline-none border-none rounded-[4px]',
};

export default Input;
