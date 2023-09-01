type ButtonProps = {
  children: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="button"
      // czy trzeba tego guarda tak robic
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </button>
  );
}
