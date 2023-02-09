import { randomizer } from "../functions/array";
import AnswerModel from "./Answer";

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #rightAnswer: boolean;

  constructor(
    id: number,
    question: string,
    answers: AnswerModel[],
    rightAnswer = false
  ) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#rightAnswer = rightAnswer;
  }

  get id() {
    return this.#id;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    return this.#answers;
  }

  get rightAnswer() {
    return this.#rightAnswer;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true;
    }
    return false;
  }
  answerWith(index: number): QuestionModel {
    const right = this.#answers[index]?.right;
    const answer = this.#answers.map((res, i) => {
      const selectedAnswer = index === i;
      return selectedAnswer || res.right ? res.reveal() : res;
    });
    return new QuestionModel(this.id, this.#question, answer, right);
  }
  randomizeAnswers(): QuestionModel {
    let randomAnswers = randomizer(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#question,
      randomAnswers,
      this.#rightAnswer
    );
  }

  static fromObject(obj: any): QuestionModel {
    const responses = obj.answers.map((resp: any) =>
      AnswerModel.fromObject(resp)
    );
    return new QuestionModel(obj.id, obj.question, responses, obj.rightAnswer);
  }

  toObject() {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map((res) => res.toObject()),
      answered: this.answered,
      rightAnswer: this.#rightAnswer,
    };
  }
}
