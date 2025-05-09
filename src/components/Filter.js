'use client';

import React, { useState } from 'react';
import FilterGroup from './ui/FilterGroup';
import Button from './ui/filterbtn';
import { useClickAway } from '@/hooks/use-click-away';

export default function Filter() {
  const [status, setStatus] = useState(null);
  const [sorting, setSorting] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getButtonClass = (btnStatus) => {
    const isActive = status === btnStatus || (btnStatus === null && status === null);
    return isActive
      ? 'border border-black  py-2 flex justify-center min-w-[100px] '
      : 'bg-transparent border-none text-[#878787] py-2  flex justify-center min-w-[100px] ';
  };

  const handleButtonClick = () => {
    setIsOpen(() => !isOpen);
  };

  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <div className="flex items-center gap-4">
      <FilterGroup />

      <div className="flex gap-3 border rounded-xl p-1 bg-white">
        <Button
          label="All"
          active={status === null}
          onClick={() => setStatus(null)}
          className={getButtonClass(null)}
        />
        <Button
          label="Open"
          active={status === 'open'}
          onClick={() => setStatus('open')}
          className={getButtonClass('open')}
        />
        <span className="w-px border-r my-1.5 mx-2" />
        <Button
          label="Closed"
          active={status === 'closed'}
          onClick={() => setStatus('closed')}
          className={getButtonClass('closed')}
        />
      </div>

      <div className="relative">
        <Button
          ref={ref}
          label="Sort by"
          active={isOpen}
          onClick={() => handleButtonClick()}
          className={`${isOpen ? '  ' : 'bg-transparent  text-[#878787] '} gap-3 px-5 py-2.5 border-black`}
          img="/icons/sorting-05.png"
        />

        {isOpen && (
          <div
            ref={ref}
            className="absolute top-14 left-0 bg-white border border-[#878787] rounded-xl p-4 px-7 z-50 min-w-[150px]"
          >
            <div className="flex flex-col gap-2 space-y-2 ">
              <Button
                label="Latest"
                onClick={() => setStatus(null)}
                className={
                  'bg-transparent border-none font-normal text-black  p-0 w-full text-left'
                }
              />
              <hr className="border-[#d3d3d3]" />
              <Button
                label="Rewards"
                active={status === 'open'}
                onClick={() => setStatus('open')}
                className={'bg-transparent border-none font-normal text-black p-0 w-full text-left'}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
