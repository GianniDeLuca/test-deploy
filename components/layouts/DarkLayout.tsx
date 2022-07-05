import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      {children}
    </div>
  );
};
