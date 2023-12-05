'use client';

import React, { ReactNode, useEffect } from 'react';

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
import { create } from 'zustand';
import { match } from 'ts-pattern';

type Paths = '/' | '/issues' | '/issues/geo' | '/alerts' | '/profile' | string;
type PathNames = '홈' | '내주변' | '전체' | '알림' | '내정보';
interface SelectedPathState {
  selectedPath: string;
  setSelectedPath: (path: PathNames) => void;
}

const useSelectedPath = create<SelectedPathState>(set => ({
  selectedPath: '/',
  setSelectedPath: path => set(state => ({ selectedPath: path })),
}));

const UserGNB = () => {
  const pathname = usePathname() as Paths;
  const { setSelectedPath } = useSelectedPath();
  const router = useRouter();

  useEffect(() => {
    match<Paths, void>(pathname)
      .with('/', () => setSelectedPath('홈'))
      .with('/issues', () => setSelectedPath('전체'))
      .with('/issues/geo', () => setSelectedPath('내주변'))
      .with('/alerts', () => setSelectedPath('알림'))
      .with('/profile', () => setSelectedPath('내정보'))
      .otherwise(() => setSelectedPath('홈'));
  }, [pathname]);

  return (
    <div className="w-full h-[65px] shadow-gnb user-gnb flex items-center justify-center gap-x-10 px-[50px]">
      <NavButton
        onClick={() => router.push('/')}
        icon={<Home />}
        selectedIcon={<HomeSelected />}
        name="홈"
      />
      <NavButton
        onClick={() => router.push('/issues/geo')}
        icon={<Geo />}
        selectedIcon={<GeoSelected />}
        name="내주변"
      />
      <NavButton
        onClick={() => router.push('/issues')}
        icon={<Article />}
        selectedIcon={<ArticleSelected />}
        name="전체"
      />
      <NavButton
        onClick={() => router.push('/alerts')}
        icon={<Alert />}
        selectedIcon={<AlertSelected />}
        name="알림"
      />
      <NavButton
        onClick={() => router.push('/profile')}
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
  name: PathNames;
  onClick: () => void;
}

const NavButton = ({ icon, name, selectedIcon, onClick }: NavButtonProps) => {
  const { selectedPath } = useSelectedPath();
  const isSelected = selectedPath === name;

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
