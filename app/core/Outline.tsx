
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Outline({ children }: Props) {
  return (
    <span className="outline">{children}</span>
  );
};

