import React, { HTMLAttributes } from 'react';
import Text from '@/components/common/atom/Text';
import cNameWriter from '@/utils/cNameWriter';

type TagProps = {
  name: string;
} & HTMLAttributes<HTMLButtonElement>;

const Tag = ({ name, className, ...props }: TagProps) => {
  return (
    <button
      className={cNameWriter('bg-white border px-[5px] border-orange-sub02 rounded-2xl', className)}
      {...props}
    >
      <Text type="sub" className="text-orange-sub01 text-[13px]">
        # {name}
      </Text>
    </button>
  );
};

export default Tag;
