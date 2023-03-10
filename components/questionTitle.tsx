import styles from "../styles/questionTitle.module.css";

interface QuestionTitleProps {
  text: string;
}

export default function QuestionTitle(props: QuestionTitleProps) {
  return (
    <div className={styles.questionTitle}>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
}
