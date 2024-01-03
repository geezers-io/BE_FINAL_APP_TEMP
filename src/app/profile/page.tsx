'use client';

import React from 'react';
import userStore from '@/store/userStore';
import Text from '@/components/common/atom/Text';
import Button from '@/components/common/atom/Button';
import { useDialog } from '@/app/context/GlobalDialogContext';
import Input from '@/components/common/atom/Input';

const UserProfilePage = () => {
  const { user } = userStore();
  const { createDialog } = useDialog();

  const onClickChangeNickButton = async () => {
    createDialog({
      title: '닉네임 변경',
      okText: '변경하기',
      removeCancelButton: true,
      element: (
        <section className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            <Text type="sub">현재 사용중인 닉네임</Text>
            <Input theme="outline" defaultValue={user?.nickName} />
          </div>

          <div className="flex flex-col gap-y-1">
            <Text type="sub">변경할 닉네임</Text>
            <Input theme="outline" />
          </div>
        </section>
      ),
    });
  };

  const onClickWithdrawButton = async () => {
    createDialog({
      title: '회원 탈퇴',
      okText: '네, 탈퇴할게요',
      cancelText: '조금 더 생각할게요',
      element: (
        <section className="flex flex-col gap-y-3">
          <div>
            <Text type="sub" size="xs">
              저희 서비스는 사용자가 원하는 정보에 접근할 수 있도록 최선을 다하고 있습니다 서비스에
              불만족스러운 부분이 있으셨다면 의견 남겨주시면 감사드리겠습니다
            </Text>
          </div>

          <Input theme="outline" placeholder="의견을 남겨주세요" />
        </section>
      ),
    });
  };

  if (!user) return null;

  return (
    <div className="h-content layout-title-section flex flex-col justify-between">
      <div className="flex flex-col pt-5 gap-y-5">
        <section>
          <div className="flex gap-x-3">
            <Text type="title" size="lg" bold>
              안녕하세요, {user.nickName} 님
            </Text>
            <Button theme="white" onClick={onClickChangeNickButton}>
              이름 수정하기
            </Button>
          </div>

          <div className="pb-3" />

          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-3">
              <Text type="title">작성한 이슈</Text>
              <Text type="sub">000 개</Text>
            </div>

            <div className="flex gap-x-3">
              <Text type="title">작성한 댓글</Text>
              <Text type="sub">000 개</Text>
            </div>
          </div>
        </section>

        <section>
          <button className="w-full border-orange-main border-b-[3px] text-left py-2">
            <Text type="title" className="text-orange-main" size="lg" bold>
              내가 쓴 이슈 보기
            </Text>
          </button>
        </section>
      </div>

      <Button theme="white" className="w-[80px] self-end" onClick={onClickWithdrawButton}>
        회원 탈퇴
      </Button>
    </div>
  );
};

export default UserProfilePage;
