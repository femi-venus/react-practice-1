import "./button.css";

interface ButtonProps {
  label: string;
  type: string;
}

function Button(props: ButtonProps) {
  const { label } = props;
  return <button>{label}</button>;
}

export default Button;
