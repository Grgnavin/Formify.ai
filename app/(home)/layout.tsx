import { DarkMode } from '@/components/DarkMode';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="border-b">
        <nav className="flex items-center justify-between max-w-7xl mx-auto py-2 mb-1">
          {/* Logo */}
          <Logo />
          
          {/* Navigation Buttons and Dark Mode */}
          <div className="flex items-center gap-4">
            <Button variant="link">Dashboard</Button>
            <Button className="rounded-full">P</Button>
            <DarkMode />
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;
