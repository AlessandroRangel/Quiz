import QuestionModel from "../models/Question";
import { useEffect, useRef, useState } from "react";
import Questionnaire from "../components/questionnaire";
import { useRouter } from "next/router";

const BASE_URL = "https://quiz-kappa-two.vercel.app/api";

export default function Home() {
  const [ids, setIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel | undefined>();
  const [rightAnswer, setRightAnswer] = useState<number>(0);

  const router = useRouter();
  const questionRef = useRef(question);

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

  async function loadingQuestionsIds() {
    const res = await fetch(`${BASE_URL}/quiz`);
    const ids = await res.json();
    setIds(ids);
  }
  async function loadingQuestion(id: number) {
    const res = await fetch(`${BASE_URL}/questions/${id}`);
    const json = await res.json();
    const newQuestion = QuestionModel.fromObject(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadingQuestionsIds();
  }, []);

  useEffect(() => {
    ids.length > 0 && loadingQuestion(ids[0]);
  }, [ids]);

  function answeredQuestion(question: QuestionModel) {
    setQuestion(question);
    const right = question.rightAnswer;
    setRightAnswer(rightAnswer + (right ? 1 : 0));
  }

  function idNextQuestion() {
    if (question) {
      const nextIndex = ids.indexOf(question.id) + 1;
      return ids[nextIndex];
    }
  }

  function toNextQuestion(nextId: number) {
    loadingQuestion(nextId);
  }

  function endQuiz() {
    router.push({
      pathname: "/result",
      query: {
        total: ids.length,
        rightAnswers: rightAnswer,
      },
    });
  }

  function nextStep() {
    const nextId = idNextQuestion();
    nextId ? toNextQuestion(nextId) : endQuiz();
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {question ? (
        <Questionnaire
          question={question}
          lastQuestion={idNextQuestion() === undefined}
          answeredQuestion={answeredQuestion}
          nextStep={nextStep}
        />
      ) : (
        false
      )}
    </div>
  );
}
