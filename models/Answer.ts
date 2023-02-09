export default class AnswerModel {
  #value: string;
  #right: boolean;
  #revealed: boolean;

  constructor(value: string, right: boolean, reaveled = false) {
    this.#value = value;
    this.#right = right;
    this.#revealed = reaveled;
  }

  static rightAnswer(value: string) {
    return new AnswerModel(value, true);
  }
  static wrongAnswer(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }
  get right() {
    return this.#right;
  }
  get revealed() {
    return this.#revealed;
  }

  reveal() {
    return new AnswerModel(this.#value, this.#right, true);
  }

  static fromObject(obj: any): AnswerModel {
    return new AnswerModel(obj.value, obj.right, obj.revealed);
  }

  toObject() {
    return {
      value: this.#value,
      right: this.#right,
      revealed: this.#revealed,
    };
  }
}
