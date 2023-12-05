'use client';

import React from 'react';

import PostWriteButton from '@public/svg/post_write.svg';
import { useRouter } from 'next/navigation';

const PostWriterButton = () => {
  const router = useRouter();

  const redirect = () => router.push('/issues/editor');

  return (
    <button onClick={redirect} className="absolute bottom-3 right-3 cursor-pointer">
      <PostWriteButton />
    </button>
  );
};

export default PostWriterButton;
