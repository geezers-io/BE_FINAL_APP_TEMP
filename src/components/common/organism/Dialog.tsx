import React, { ReactNode, useState } from 'react';
import { Dialog as D, DialogProps } from '@headlessui/react';
import Button from '@/components/common/atom/Button';
import Text from '@/components/common/atom/Text';
import clsx from 'clsx';

export type DialogComponentProps = {
  onClose?: () => void;
  title: string;
  description?: string;
  element: ReactNode;
  okText?: string;
  cancelText?: string;
  titleCenter?: boolean;
  removeOkButton?: boolean;
  removeCancelButton?: boolean;
} & Omit<DialogProps<any>, 'children'>;
const Dialog = ({
  element,
  onClose,
  title,
  titleCenter,
  description,
  okText,
  cancelText,
  removeCancelButton = false,
  removeOkButton = false,
}: DialogComponentProps) => {
  const [open, setOpen] = useState(true);

  const onHandleClose = () => {
    onClose && onClose();
    setOpen(false);
  };

  return (
    <D open={open} onClose={onHandleClose} className="relative z-10">
      <div className="fixed inset-0 bg-black/25 backdrop-blur-dialog" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          <D.Panel className="flex flex-col bg-white px-[17px] py-[16px] w-[384px] min-h-[200px] rounded-[15px]">
            <D.Title className={clsx('pb-3', titleCenter && 'text-center')}>
              <Text type="title" size="lg" className="font-bold text-title text-lg">
                {title}
              </Text>
            </D.Title>
            <D.Description>{description}</D.Description>

            <section className="flex-1 pb-5">{element}</section>

            <section className="flex justify-center gap-x-3 w-full">
              {!removeOkButton && (
                <Button theme="orange" className="rounded-[4px] w-full h-[30px]">
                  {okText ? okText : '확인했어요'}
                </Button>
              )}
              {!removeCancelButton && (
                <Button
                  theme="white"
                  onClick={onHandleClose}
                  className="rounded-[4px] w-full h-[30px]"
                >
                  {cancelText ? cancelText : '취소할게요'}
                </Button>
              )}
            </section>
          </D.Panel>
        </div>
      </div>
    </D>
  );
};

export default Dialog;
