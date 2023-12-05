import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../public/font/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/font/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font--pretendard',
  preload: true,
});
