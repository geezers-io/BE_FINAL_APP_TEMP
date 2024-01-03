'use client';

import React, { useState, useRef, ChangeEvent } from 'react';
import Quill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import Button from '@/components/common/atom/Button';
import Input from '@/components/common/atom/Input';
import Camera from '@public/svg/camera.svg';
import { useDialog } from '@/app/context/GlobalDialogContext';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const fileUploader = useRef<HTMLInputElement>(null);
  const { createDialog } = useDialog();

  const attachMockImage = () =>
    setContent(
      p => p + '<img src="https://miro.medium.com/v2/resize:fit:700/0*R60lnmJl4hanOBaJ.png" />'
    );

  const onClickFileUploader = () => fileUploader.current?.click();

  const onHandleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files && Array.from(e.target.files);
    if (files === null) {
      return;
    }
    attachMockImage();
  };

  const onClickSubmit = () => {};

  return (
    <div>
      <header className="w-full flex-items-center justify-between px-[24px]">
        <Input
          theme="ghost"
          placeholder="제목을 입력해주세요"
          className="placeholder-sub py-[12px] px-0"
        />
        <Button onClick={onClickSubmit}>작성 완료</Button>
      </header>
      <Quill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="자유롭게 글을 작성해주세요"
      />
      <button className="absolute bottom-0 absolute-center" onClick={onClickFileUploader}>
        <Camera />
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={onHandleFileUpload}
        className="hidden"
        ref={fileUploader}
      />
    </div>
  );
};

export default TextEditor;
