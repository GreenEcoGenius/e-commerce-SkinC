import styles from "./Badge.module.css";

type BadgeProps = {
  text: string;
  variant?: "red" | "dark" | "gray";
  floating?: boolean;
};

export default function Badge({ text, variant = "dark", floating = false }: BadgeProps) {
  const variantClass = styles[variant];
  const floatingClass = floating ? styles.floating : "";
  return (
    <span className={[variantClass, floatingClass].join(" ")}>{text}</span>
  );
}
