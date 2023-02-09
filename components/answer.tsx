import AnswerModel from "../models/Answer";
import styles from "../styles/answer.module.css";

interface answerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  letterBackgroundColor: string;
  onResponse: (index: number) => void;
}

export default function Answer(props: answerProps) {
  const answer = props.value;
  const answerRevealed = answer.revealed ? styles.answerRevealed : "";
  return (
    <div
      className={styles.answer}
      onClick={() => props.onResponse(props.index)}
    >
      <div className={`${answerRevealed} ${styles.answerContent}`}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.letterBackgroundColor }}
          >
            {props.letter}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        <div className={styles.verse}>
          {answer.right ? (
            <div className={styles.right}>
              <div>A resposta certa é ...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>A resposta informada está errada ...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
