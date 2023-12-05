'use client';

import React, { ReactNode } from 'react';

import Home from '@public/svg/home.svg';
import Geo from '@public/svg/geo.svg';
import Article from '@public/svg/article.svg';
import Alert from '@public/svg/alert.svg';
import Profile from '@public/svg/profile.svg';
import HomeSelected from '@public/svg/home_selected.svg';
import GeoSelected from '@public/svg/geo_selected.svg';
import ArticleSelected from '@public/svg/article_selected.svg';
import AlertSelected from '@public/svg/alert_selected.svg';
import ProfileSelected from '@public/svg/profile_selected.svg';

import Text from '@/components/common/atom/Text';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';

const UserGNB = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full h-[65px] shadow-gnb user-gnb flex items-center justify-center gap-x-10 px-[50px]">
      <NavButton
        onClick={() => router.push('/')}
        icon={<Home />}
        isSelected={pathname === '/'}
        selectedIcon={<HomeSelected />}
        name="홈"
      />
      <NavButton
        onClick={() => router.push('/issues/geo')}
        icon={<Geo />}
        isSelected={pathname === '/issues/geo'}
        selectedIcon={<GeoSelected />}
        name="내주변"
      />
      <NavButton
        onClick={() => router.push('/issues')}
        isSelected={pathname === '/issues'}
        icon={<Article />}
        selectedIcon={<ArticleSelected />}
        name="전체"
      />
      <NavButton
        onClick={() => router.push('/alerts')}
        isSelected={pathname === '/alerts'}
        icon={<Alert />}
        selectedIcon={<AlertSelected />}
        name="알림"
      />
      <NavButton
        onClick={() => router.push('/profile')}
        isSelected={pathname === '/profile'}
        icon={<Profile />}
        selectedIcon={<ProfileSelected />}
        name="내정보"
      />
    </div>
  );
};

interface NavButtonProps {
  icon: ReactNode;
  selectedIcon: ReactNode;
  isSelected: boolean;
  name: string;
  onClick: () => void;
}

const NavButton = ({ icon, name, isSelected, selectedIcon, onClick }: NavButtonProps) => {
  return (
    <button className="flex flex-col items-center" onClick={onClick}>
      <div className="text-red-300">{isSelected ? selectedIcon : icon}</div>
      <Text
        type="sub"
        className={clsx('whitespace-nowrap font-medium', isSelected && 'text-orange-main')}
      >
        {name}
      </Text>
    </button>
  );
};

export default UserGNB;
