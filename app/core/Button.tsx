type Props = {
  text?: string;
  type?: 'button' | 'submit';
}

export default function Button({ text, type = 'button', ...rest }: Props) {
  return (
    <button type={type} {...rest}>{text}</button>
  );
}