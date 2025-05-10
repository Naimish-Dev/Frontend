import React from 'react'
import ExploreBtn from './ui/explorebtn';

export default function Hero() {
  return (
    <div className="bg_square">
      <div className="pt-28 xl:pt-32 2xl:pt-180px relative z-[1]">
        <div className="max-w-[1104px] mx-auto w-full pb-20">
          <div className="pb-4 lg:pb-7">
            <h1 className="xxl flex items-center flex-col">
              <div className="flex items-center gap-1">
                <span className=" border border-solid border-black rounded-full leading-[1] px-[11px] pb-1.5 bg-[#a476de] text-black flex items-center justify-center flex-shrink-0 flex-flex-1">
                  Monetize
                </span>
                Your
              </div>
              <span>Crypto Content</span>
            </h1>
          </div>
          <div className="hero_descript pb-16px lg:pb-28px">
            <p>Turn your post into profits</p>
          </div>
            <ExploreBtn className="bg-blue-btn text-white! hover:text-white mx-auto px-4 lg:px-7 py-1.5 lg:py-3 text-14 lg:text-20">
            Explore
            </ExploreBtn>
        </div>
      </div>
    </div>
  );
}
