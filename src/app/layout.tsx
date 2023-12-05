import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import clsx from 'clsx';

import { pretendard } from '../../config/font.preset';
import './globals.css';
import GlobalUserHeader from '@/components/common/organism/GlobalUserHeader';
import UserGNB from '@/components/common/organism/UserGNB';

export const metadata: Metadata = {
  title: '이슈맵',
  description: '위치 기반 이슈 서비스',
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="ko">
    <body className={clsx(pretendard.className, 'bg-[#FAFAFA] flex justify-center h-full')}>
      <main className="w-full max-w-full md:w-[430px] md:max-w-[430px] bg-white">
        <div className="user-layout relative">
          <GlobalUserHeader />
          {children}
        </div>
        <UserGNB />
      </main>
    </body>
  </html>
);

export default RootLayout;
