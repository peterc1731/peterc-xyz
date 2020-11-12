import Spacer from './Spacer';

interface Props {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: Props) {
  return (
    <header>
      <h1>{title}</h1>
      <Spacer height={5} />
      {subtitle && <h3>{subtitle}</h3>}
    </header>
  );
}
