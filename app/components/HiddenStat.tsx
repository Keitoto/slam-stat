import { FC, ReactNode } from 'react';

export const HiddenStat: FC<{ isOpen: boolean; children: ReactNode }> = ({
  isOpen,
  children,
}) => {
  return (
    <div className="relative min-w-20 text-center">
      <div
        className={`absolute inset-0 bg-gray-300 flex items-center justify-center rounded transition-opacity duration-300 opacity-100 ${isOpen && 'opacity-0'}`}
      ></div>
      <div className="p-2 bg-white rounded shadow text-md font-bold border border-yellow-200">
        {children}
      </div>
    </div>
  );
};