type Props = {
  colorStyles: string;
  text: string;
  differentPadding?: boolean;
};

const Button = ({ colorStyles, text, differentPadding = false }: Props) => {
  return (
    <button
      className={`cursor-pointer border border-white rounded-4xl  
        transition-all duration-300 ${colorStyles} ${
        differentPadding ? "px-10 py-2.5" : "px-5 py-2"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
