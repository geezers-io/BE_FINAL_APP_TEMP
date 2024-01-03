'use client';

import React, { createContext, ReactNode, useContext, useState, PropsWithChildren } from 'react';
import Dialog, { DialogComponentProps } from '@/components/common/organism/Dialog';

type DialogProps = {
  id: string;
} & DialogComponentProps;

type GlobalDialog = {
  dialogs: DialogProps[];
  createDialog: (dialogs: DialogComponentProps) => void;
  removeDialog: (id: any) => void;
};

export const GlobalDialogContext = createContext<GlobalDialog>({} as any);

export const GlobalDialogProvider = ({ children }: PropsWithChildren) => {
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);

  const createDialog = (dialog: DialogComponentProps, id: string = new Date().toString()) => {
    setDialogs(dialogs.concat({ id, ...dialog }));
  };

  const removeDialog = (id?: string) => {
    if (!id) {
      return setDialogs(dialogs => dialogs.slice(0, dialogs.length - 2));
    }
    setDialogs(dialogs => dialogs.filter(d => d.id !== id));
  };

  return (
    <GlobalDialogContext.Provider
      value={{
        dialogs,
        createDialog,
        removeDialog,
      }}
    >
      {dialogs.map(dialog => (
        <Dialog {...dialog}>{children}</Dialog>
      ))}
      {children}
    </GlobalDialogContext.Provider>
  );
};

export const useDialog = () => useContext(GlobalDialogContext);
