import React, { HTMLAttributes } from 'react';
import cNameWriter from '@/utils/cNameWriter';

type Type = 'title' | 'paragraph' | 'sub' | 'ghost';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'h4';

type TextProps = {
  type: Type;
  size?: Size;
  bold?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

const Text = ({ type, size = 'xs', className, bold = false, children, ...props }: TextProps) => {
  return (
    <span
      className={cNameWriter(
        `text-${type}`,
        size && `text-${size}`,
        bold && 'font-bold',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
