type Props = {
  colorStyles: string;
  text: string;
};

const Button = ({ colorStyles, text }: Props) => {
  return (
    <button
      className={`cursor-pointer border border-white rounded-4xl px-5 py-2 
        transition-all ${colorStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
