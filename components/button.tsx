import Link from "next/link";
import styles from "../styles/button.module.css";

interface buttonProps {
  text: string;
  href?: string;
  onClick?: (e: any) => void;
}

export default function Button(props: buttonProps) {
  function renderButton() {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
}
