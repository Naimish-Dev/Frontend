import Image from 'next/image';
import React from 'react';

export default function Card({ vector, children }) {
  return (
    <div className="p-4 lg:p-36 border-2 rounded-4xl bg-white relative z-[1]">
      {vector && (
        <Image
          src={vector}
          alt="curve"
          height={100}
          width={100}
          className="absolute -top-[50px] -right-[50px]  z-10 hidden lg:block"
        />
      )}
      {children}
    </div>
  );
}
