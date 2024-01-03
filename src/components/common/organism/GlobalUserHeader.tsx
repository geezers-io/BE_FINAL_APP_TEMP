'use client';

import React, { useEffect } from 'react';

import MobileLogo from '@public/svg/logo.svg';
import Button from '@/components/common/atom/Button';
import { useDialog } from '@/app/context/GlobalDialogContext';
import Text from '@/components/common/atom/Text';
import Kakao from '@public/svg/kakaotalk.svg';
import authService from '@/api/AuthService';
import { BroadcastChannel } from 'broadcast-channel';
import userStore from '@/store/userStore';

const channel = new BroadcastChannel('register');

const GlobalUserHeader = () => {
  const { createDialog, removeDialog } = useDialog();
  const { user, setUser } = userStore();

  const onClickLoginButton = async () => {
    try {
      const { url } = await authService.getLoginUrl();
      window.open(url);
    } catch (e) {
      console.error(e);
    } finally {
      removeDialog(null);
    }
  };

  const onClickLogoutButton = () => {
    setUser(undefined);
  };

  const login = async (code: string) => {
    try {
      const { user, accessToken } = await authService.login({ authCode: code });
      localStorage.setItem('token', accessToken);
      setUser(user);
    } catch (e) {
      console.error(e);
    }
  };

  const onClickShowLoginDialog = () => {
    createDialog({
      title: '로그인/가입',
      titleCenter: true,
      cancelText: '닫기',
      element: (
        <section>
          <Text type="sub" className="text-orange-main font-bold">
            서비스를 가입하고 더 많은 기능과 이슈를 확인하세요!
          </Text>
          <section className="py-[10px]">
            <Button
              className="h-[46px] rounded-[4px] bg-[#FEE500] text-black w-full flex justify-center items-center"
              onClick={onClickLoginButton}
            >
              <div className="flex gap-x-2">
                <div className="w-[24px] h-[23px]">
                  <Kakao />
                </div>
                카카오 로그인/회원가입
              </div>
            </Button>
          </section>
          <Text type="sub" size="xs">
            카카오 로그인 이용 시 기존 미가입 회원도 자동으로 가입처리됩니다.
          </Text>
        </section>
      ),
    });
  };

  useEffect(() => {
    channel.addEventListener('message', login);
  }, []);

  return (
    <header className="w-full h-[50px] flex-items-center justify-between header-p">
      <MobileLogo />
      {!user && (
        <div>
          <Button onClick={onClickShowLoginDialog}>로그인/가입</Button>
        </div>
      )}
      {user && (
        <div>
          <Button theme="white" onClick={onClickLogoutButton}>
            로그아웃
          </Button>
        </div>
      )}
    </header>
  );
};

export default GlobalUserHeader;
