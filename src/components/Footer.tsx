import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bg-level-2 min-h-16 w-full py-5 max-md:px-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <div className="">
            <Link href="/">
              <Image
                src="/Wordmark.svg"
                alt="--logo"
                height={1}
                width={4.64}
                className="aspect-[4.64/1] h-5 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Link href="https://hitam.org/" target="_blank">
              <p className="text-sm">Hitam</p>
            </Link>
            <Link href="https://www.webprosindia.com/hitam" target="_blank">
              <p className="text-sm">Erp</p>
            </Link>
          </div>
        </div>
        <div className="border-line-primary flex flex-wrap items-center justify-between gap-3 border-t-2 py-2">
          <p className="text-text-tertiary text-sm">
            {' '}
            &copy; <span>{new Date().getFullYear()}</span> All right reserved |{' '}
            Design and developed by{' '}
            <span className="text-white">NIKHIL KATKURI</span> .
          </p>
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => {
                window.open('https://github.com/NikhilKatkuri', '_blank');
              }}
              className="hover:border-line-primary rounded-full border border-transparent p-0.5 transition-all duration-200 ease-in-out"
            >
              <Image
                src="/github.svg"
                alt=""
                height={20}
                width={20}
                className="h-6 w-6 invert"
              />
            </button>
            <button
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/katkurinikhil',
                  '_blank'
                );
              }}
              className="hover:border-line-primary rounded-full border border-transparent p-0.5 transition-all duration-200 ease-in-out"
            >
              <Image
                src="/linkedin.svg"
                alt=""
                height={20}
                width={20}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
