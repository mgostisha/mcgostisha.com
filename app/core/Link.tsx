import { Link as RemixLink } from 'remix';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  external?: boolean;
  to: string;
}

export default function Link({ children, className, external = false, to, ...rest }: Props) {
  const classes = className ? `link ${className}` : 'link';

  if (external) {
    return <a href={to} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return (
    <RemixLink to={to} className={classes} {...rest}>{children}</RemixLink>
  );
}