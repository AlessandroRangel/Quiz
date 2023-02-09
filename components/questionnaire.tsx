import styles from "../styles/questionnaire.module.css";
import QuestionModel from "../models/Question";
import Question from "./question";
import Button from "./button";

interface questionnaireProps {
  question: QuestionModel;
  lastQuestion: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  nextStep: () => void;
}

export default function Questionnaire(props: questionnaireProps) {
  function onResponse(index: number) {
    if (!props.question.answered) {
      props.answeredQuestion(props.question.answerWith(index));
    }
  }
  return (
    <div className={styles.questionnaire}>
      {props.question ? (
        <Question
          value={props.question}
          timeToAnswer={6}
          onResponse={onResponse}
          timeOut={props.nextStep}
        />
      ) : (
        false
      )}

      <Button
        onClick={props.nextStep}
        text={props.lastQuestion ? "Finalizar" : "Proxima"}
      />
    </div>
  );
}
