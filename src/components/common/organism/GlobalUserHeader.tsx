'use client';

import React from 'react';

import MobileLogo from '@public/svg/logo.svg';
import Button from '@/components/common/atom/Button';

const GlobalUserHeader = () => {
  return (
    <header className="w-full h-[50px] flex-items-center justify-between header-p">
      <MobileLogo />
      <div>
        <Button>로그인/가입</Button>
      </div>
    </header>
  );
};

export default GlobalUserHeader;
