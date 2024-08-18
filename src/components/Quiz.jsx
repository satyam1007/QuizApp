import React, { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./Quiz.css";

function Quiz({ goBack, data }) {
  let [index, setIndex] = useState(0);
  let [questions, setQuestions] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (questions.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[questions.ans - 1].current.classList.add("correct");
      }
    }
  };

  const nextQuestion = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }

      setIndex(++index);
      setQuestions(data[index]);
      setLock(false);

      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestions(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const listStyle = `w-full text-left bg-white py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-300`;
  return (
    <div>
      {result ? (
        <></>
      ) : (
        <>
          <div className="p-4 sm:p-6 md:p-8" id="quiz">
            <button
              className="border-solid border-2 border-white text-white py-1 px-4 sm:px-6 md:px-4 rounded text-lg sm:text-xl bg-purple-800 hover:bg-purple-900 duration-200 flex items-center"
              onClick={goBack}
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
            <div className="bg-slate-400 w-full h-auto mt-4 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              {/* Question Heading */}
              <div className="text-center mb-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {index + 1}. {questions.question}
                </h1>
              </div>

              {/* Image Section */}
              <div className="flex justify-center mb-4">
                <img
                  src={questions.img}
                  alt="HTML"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-sm h-auto rounded-lg"
                />
              </div>

              {/* Options Section */}
              <div className="flex flex-col items-center">
                <ul className="space-y-3 w-full">
                  <li>
                    <button
                      ref={option1}
                      onClick={(e) => checkAns(e, 1)}
                      className={listStyle}
                    >
                      {questions.option1}
                    </button>
                  </li>
                  <li>
                    <button
                      ref={option2}
                      onClick={(e) => checkAns(e, 2)}
                      className={listStyle}
                    >
                      {questions.option2}
                    </button>
                  </li>
                  <li>
                    <button
                      ref={option3}
                      onClick={(e) => checkAns(e, 3)}
                      className={listStyle}
                    >
                      {questions.option3}
                    </button>
                  </li>
                  <li>
                    <button
                      ref={option4}
                      onClick={(e) => checkAns(e, 4)}
                      className={listStyle}
                    >
                      {questions.option4}
                    </button>
                  </li>
                </ul>
              </div>
              {/* Next Button */}
              <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
                <button
                  className="w-40 text-center bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition duration-300"
                  onClick={nextQuestion}
                >
                  Next
                </button>

                {/* {Index Heading} */}

                <div className="px-8 text-center bg-purple-800 text-white py-3 rounded-lg shadow">
                  <h2>
                    {index + 1} of {data.length} questions
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}{" "}
      {result ? (
        <>
          <div className="flex justify-center items-center pt-56 px-4">
            <div className="bg-slate-400 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto mt-4 rounded-lg shadow-md p-4 sm:p-6 md:p-8 text-center space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                You Scored {score} Out Of {data.length}
              </h2>

              {score === data.length ? (
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-800">
                  🎉 Congratulations! All answers are correct! 🎉
                </h3>
              ) : (
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-900">
                  Try Again! Some answers were incorrect.
                </h3>
              )}
              <button
                onClick={reset}
                className="border-2 border-white px-6 sm:px-8 py-2 rounded bg-purple-800 text-white hover:bg-purple-900 transition duration-300"
              >
                Reset
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Quiz;
