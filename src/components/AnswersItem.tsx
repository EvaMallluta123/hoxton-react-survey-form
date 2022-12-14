import { useState } from "react";
import ItemsList from "./ItemsList";
import Main from "./Main"

export type AnswerItemType = {
    review: string;
    email: string;
    username: string;
    consistency: number;
    colour: number;
    logo: number;
    bestFeatures: [];
    worstFeatures: [];
    timeSpent: [];
}
type Props = {
  answerItem: AnswerItemType;
};

export default function AnswersItem({ answerItem }: Props) {
  const {
    username,
    email,
    logo,
    colour,
    consistency,
    timeSpent,
    review,
    bestFeatures,
    worstFeatures
  } = answerItem;
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>
            What would you say that are the best features of your rubber duck?
          </em>
          <ItemsList list={form.bestFeatures} />
        </p>
        <p>
          <em>
            What would you say that are the worst nags of your rubber duck?
          </em>
          <ItemsList list={worstFeatures} />
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
