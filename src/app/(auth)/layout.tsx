import logo from '#/icons/logo.svg';
import Image from 'next/image';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-screen overflow-hidden border p-6 flex items-center justify-center">
      <Image src={logo} alt="logo" className="absolute top-20 left-28" />
      <div className="h-full w-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default Layout;
