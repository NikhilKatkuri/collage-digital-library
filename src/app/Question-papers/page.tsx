'use client';
import Navbar from '@/components/Navbar'; 
import React from 'react';

const Page: React.FC = () => {
 
  return (
    <div className="h-screen w-full scroll-smooth" id="content">
      <Navbar />
      <main className="h-full w-full max-lg:px-4">
         <div className="w-full h-full flex items-center justify-center">
          <p>Page under development</p>
         </div>
      </main>
    </div>
  );
};

export default Page;
