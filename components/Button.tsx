import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  variant?: "bright" | "dark" | "solid";
  fullWidth?: boolean;
  className?: string;
  href?: string;
};

export default function Button({ label, variant = "bright", fullWidth = false, className = "", href }: ButtonProps) {
  const variantClass = styles[variant];
  const widthClass = fullWidth ? styles.fullWidth : "";
  const classes = [variantClass, widthClass, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {label}
    </button>
  );
}
