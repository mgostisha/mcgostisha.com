import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ children, className, type = 'button', ...rest }: Props) {
  const classes = className ? `link ${className}` : 'link';
  return (
    <button type={type} className={classes} {...rest}>{children}</button>
  );
}