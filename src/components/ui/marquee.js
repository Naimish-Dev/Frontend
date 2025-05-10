'use client';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MarqueeSlide() {
  return (
    <div>
      <Marquee>
        <div className="">
           <Image src={"/"} width={47} height={47} alt='' /> 
          <h1>Your hot takes deserve hard cash</h1>
        </div>
        <div className="">
          <h1>Monetize or be monetized. Your call</h1>
        </div>
      </Marquee>
    </div>
  );
}
