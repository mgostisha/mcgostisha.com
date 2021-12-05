import { Link as RemixLink } from 'remix';

type Props = {
  text: string;
  to: string;
}

export default function Link({ text, to, ...rest }: Props) {
  return (
    <RemixLink to={to} {...rest}>{text}</RemixLink>
  );
}