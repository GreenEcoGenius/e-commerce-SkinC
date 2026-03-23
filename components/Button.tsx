import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  variant?: "bright" | "dark" | "solid";
  fullWidth?: boolean;
  className?: string;
};

export default function Button({ label, variant = "bright", fullWidth = false, className = "" }: ButtonProps) {
  const variantClass = styles[variant];
  const widthClass = fullWidth ? styles.fullWidth : "";
  return (
    <button className={[variantClass, widthClass, className].join(" ")}>
      {label}
    </button>
  );
}
