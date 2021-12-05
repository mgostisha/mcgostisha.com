import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

export default function Footer({ children }: Props) {
  return (
    <footer>
      FOOTER!
      {children}
    </footer>
  );
};
