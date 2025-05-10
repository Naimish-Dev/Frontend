import { cn } from '@/lib/utils';
import React from 'react';

export default function Container({ className, children }) {
  return <div className={cn('max-w-7xl mx-auto px-4', className)}>{children}</div>;
}
