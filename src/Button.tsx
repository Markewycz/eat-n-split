type ButtonProps = {
  children: string;
  onClick: (boolean: boolean) => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button className="button" onClick={() => onClick()}>
      {children}
    </button>
  );
}
