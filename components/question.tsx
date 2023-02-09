import QuestionModel from "../models/Question";
import styles from "../styles/question.module.css";
import Answer from "./answer";
import QuestionTitle from "./questionTitle";
import Timer from "./timer";

const letter = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266ba" },
  { value: "C", color: "#85d4f2" },
  { value: "D", color: "#bce596" },
];

interface questionProps {
  value: QuestionModel;
  timeToAnswer?: number;
  onResponse: (index: number) => void;
  timeOut: () => void;
}

export default function Question(props: questionProps) {
  const question = props.value;

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={`${question.id}-${i}`}
          value={answer}
          index={i}
          letter={letter[i].value}
          letterBackgroundColor={letter[i].color}
          onResponse={props.onResponse}
        />
      );
    });
  }
  return (
    <div className={styles.question}>
      <QuestionTitle text={question.question} />
      <Timer
        key={question.id}
        duration={props.timeToAnswer ?? 10}
        timeOut={props.timeOut}
      />
      {renderAnswers()}
    </div>
  );
}
