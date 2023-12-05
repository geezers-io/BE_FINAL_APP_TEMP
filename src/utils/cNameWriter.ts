import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export default function cNameWriter(...cNames: ClassValue[]) {
  return twMerge(clsx(cNames));
}
