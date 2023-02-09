import { NextApiRequest, NextApiResponse } from "next";
import { randomizer } from "../../../functions/array";
import questions from "../databaseOfQuestions";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const allIds = questions.map((question) => question.id);
  const allIdsRandom = randomizer(allIds);
  let id: number[] = [];
  for (let i = 0; i < 4; i++) {
    id.push(allIdsRandom[i]);
  }
  res.status(200).json(id);
}
