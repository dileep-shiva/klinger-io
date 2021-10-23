import { FC } from 'react';
import { IconProps } from '../types';

export const FacebookColorIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 42 48" {...props}>
    <title>Facebook</title>
    <path
      d="M41 24a20 20 0 10-23.125 19.757V29.781H12.8V24h5.078v-4.406c0-5.013 2.986-7.781 7.554-7.781a30.768 30.768 0 014.477.391v4.922h-2.525c-2.484 0-3.259 1.542-3.259 3.125V24h5.547l-.887 5.781h-4.66v13.976A20.005 20.005 0 0041 24z"
      fill="#1877f2"
    />
    <path
      d="M28.785 29.781L29.672 24h-5.547v-3.75c0-1.582.775-3.125 3.259-3.125h2.522v-4.922a30.754 30.754 0 00-4.477-.391c-4.568 0-7.554 2.769-7.554 7.781v4.406h-5.078v5.781h5.078v13.976a20.219 20.219 0 006.25 0V29.781z"
      fill="#fff"
    />
  </svg>
);
