import styles from "../styles/statistic.module.css";

interface statisticProps {
  value: string;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

export default function Statistic(props: statisticProps) {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.backgroundColor ?? "#fdd60f",
          color: props.fontColor ?? "#fff",
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
