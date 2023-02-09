import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../databaseOfQuestions";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const idSelected = req.query.id === undefined ? 1 : +req.query.id;

  const selectedQuestions = questions.filter(
    (question) => question.id === idSelected
  );

  if (selectedQuestions.length === 1) {
    const selectedQuestion = selectedQuestions[0].randomizeAnswers();

    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(204).send("Não encontrado");
  }
}
