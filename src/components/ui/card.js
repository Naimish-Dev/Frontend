import React from 'react';

export default function Card({ children }) {
  return <div className="p-4 lg:p-36  border-2 rounded-4xl bg-white relative z-[1]">{children}</div>;
}
