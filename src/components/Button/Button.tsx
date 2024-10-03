import styles from "./Button.module.css";

interface Props {
  children: string;
  onCLick(): void;
  color?: "primary" | "danger" | "secondary";
}

const Button = ({ children, onCLick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={() => {
        onCLick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
