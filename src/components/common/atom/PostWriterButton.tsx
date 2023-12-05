import React from 'react';

import PostWriteButton from '@public/svg/post_write.svg';

const PostWriterButton = () => {
  return (
    <div className="absolute bottom-3 right-3 cursor-pointer">
      <PostWriteButton />
    </div>
  );
};

export default PostWriterButton;
