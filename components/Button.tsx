type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({
  text,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
    >
      {text}
    </button>
  );
}