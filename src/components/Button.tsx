interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-outline-" + color}
      onClick={onClick}
    >
      Click {children}
    </button>
  );
};

export default Button;
