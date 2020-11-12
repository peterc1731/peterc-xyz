interface Props {
  height: number;
}

export default function Spacer({ height }: Props) {
  return <div style={{ height, width: 1, opacity: 0 }} />;
}
