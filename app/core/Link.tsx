import { Link as RemixLink } from 'remix';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  to: string;
}

export default function Link({ children, className, to, ...rest }: Props) {
  const classes = className ? `link ${className}` : 'link';
  return (
    <RemixLink to={to} className={classes} {...rest}>{children}</RemixLink>
  );
}