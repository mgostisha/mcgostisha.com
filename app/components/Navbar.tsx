import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

export default function Navbar({ children }: Props) {
  return (
    <nav>
      NAVBAR!
      {children}
    </nav>
  );
}