import React from 'react'

export default function Title({ children }) {
  return (
    <div className=" text-center lg:text-left relative z-[1]">
      <h1>{children}</h1>
    </div>
  );
}
