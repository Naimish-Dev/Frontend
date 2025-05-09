import { cn } from '@/lib/utils';
import React from 'react';

export default function Button({ primary, children }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded text-white transition-colors',
        primary ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700',
        'text-sm' // this is always applied
      )}
    >
      {children}
    </button>
  );
}
