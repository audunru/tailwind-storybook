interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => (
  <div className="rounded shadow-lg">
    <div className="px-6 py-4">
      <h1 className="font-bold text-xl mb-2">{props.title}</h1>
      {props.children}
    </div>
  </div>
);

export default Card;
