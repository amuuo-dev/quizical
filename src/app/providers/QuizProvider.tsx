import { createContext } from "react";
import { PropsWithChildren } from "react";
import { useState, useContext } from "react";
import questions from "../../questions";
import { Question } from "../../types";

type QuizContentProps = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
  score: number;
  totalQuestions: number;
};

const QuizContext = createContext<QuizContentProps>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
});

const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const isFinished = questionIndex >= questions.length;

  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      restart();
      return;
    }
    //check if correct
    if (selectedOption === question?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setQuestionIndex((currentValue) => currentValue + 1);
  };

  // console.log("Score is: ", score);

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);

export default QuizProvider;
