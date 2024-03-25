// Component for a paragraph

interface Props {
  text: String;
}

export default function Title({ text }: Props) {
  return <h1 className="font-bold text-4xl text-center">{text}</h1>;
}
