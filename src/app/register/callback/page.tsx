'use client';

import React, { useEffect } from 'react';
import { BroadcastChannel } from 'broadcast-channel';
import { useSearchParams } from 'next/navigation';

const RegisterPage = () => {
  const s = useSearchParams();

  useEffect(() => {
    const channel = new BroadcastChannel('register');
    const code = s.get('code');
    channel.postMessage(code);
    window.close();
  }, []);

  return <div></div>;
};

export default RegisterPage;
