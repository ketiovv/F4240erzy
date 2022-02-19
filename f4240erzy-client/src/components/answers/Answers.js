import React from "react";
import Answer from "./Answer";
import "./Answer.css";

const Answers = ({ answers, handle }) => {
  return (
    <div className="container-fluid">
      <div className="row answers">
        {" "}
        {answers.map((answer) => (
          <Answer
            content={answer.contentOfAnswer}
            correct={answer.correct}
            handle={handle}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Answers;
