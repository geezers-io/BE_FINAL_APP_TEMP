'use client';

import React, { useState } from 'react';
import Quill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import Button from '@/components/common/atom/Button';
import Camera from '@public/svg/camera.svg';

const TextEditor = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <header className="w-full flex-items-center justify-between header-p">
        <input placeholder="제목을 입력해주세요" className="editor-placeholder" />
        <Button>작성 완료</Button>
      </header>
      <Quill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="자유롭게 글을 작성해주세요"
      />
      <button
        className="absolute bottom-0 absolute-center"
        onClick={() =>
          setContent(
            p =>
              p + '<img src="https://miro.medium.com/v2/resize:fit:700/0*R60lnmJl4hanOBaJ.png" />'
          )
        }
      >
        <Camera />
      </button>
    </div>
  );
};

export default TextEditor;
