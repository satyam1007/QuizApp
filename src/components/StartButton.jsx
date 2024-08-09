import React, { useState } from "react";
import "./StartButton.css";

function StartButton({ onClick }) {
  const [about, setAbout] = useState();

  const aboutQuiz = () => {
    setAbout(!about);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col gap-10 md:gap-60">
        <h1
          className="text-6xl sm:text-6xl md:text-8xl text-center pt-6 font-semibold font-sans"
          id="quizHeading"
        >
          QUIZ APP
        </h1>
        <div className="text-center">
          <div className="py-10">
            <h1 className="text-slate-300 text-3xl sm:text-5xl md:text-7xl pb-4">
              Let's Play!
            </h1>
            <h3 className="text-green-600 text-xl sm:text-2xl md:text-3xl font-semibold">
              Play now & Win
            </h3>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
            <button
              className="border-double border-4 border-white text-white py-1 px-4 sm:px-6 md:px-8 rounded text-lg sm:text-xl bg-purple-800 hover:bg-purple-900 duration-200"
              onClick={onClick}
            >
              Play Now
            </button>
            <button
              className="border-double border-4 border-white text-white py-1 px-4 sm:px-6 md:px-8 rounded text-lg sm:text-xl bg-purple-800 hover:bg-purple-900 duration-200"
              onClick={aboutQuiz}
            >
              <a href="#about">{about ? "Hide" : "About"}</a>
            </button>
          </div>
        </div>
      </div>

      <div>
        {about ? (
          <div className="bg-gray-300 text-gray-900" id="about">
            <div className="container mx-auto px-4 py-6">
              <header className="text-center mb-6">
                <h1 className="text-3xl font-bold text-blue-600">
                  About QuizMaster
                </h1>
              </header>
              <section className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-3">
                  Welcome to QuizMaster!
                </h2>
                <p className="mb-3">
                  QuizMaster is an engaging quiz app by Satyam Mishra, featuring
                  a sleek interface with React and Tailwind CSS for an
                  interactive experience.
                </p>

                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside mb-3 space-y-2">
                  <li>
                    Dynamic Quizzes: Test your knowledge with diverse topics.
                  </li>
                  <li>
                    User-Friendly Interface: Navigate easily with React and
                    Tailwind CSS.
                  </li>
                  <li>
                    Instant Feedback: Get immediate feedback to improve your
                    skills.
                  </li>
                  <li>
                    Level Selector: Progress through levels with an intuitive
                    selector.
                  </li>
                  <li>
                    Customizable Experience: Tailor the content to your
                    preferences.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">
                  About the Creator:
                </h3>
                <p className="mb-3">
                  Satyam Mishra, a frontend developer from Hisar, crafted this
                  app with skills in HTML, CSS, JavaScript, and React, aiming to
                  create standout, user-friendly applications.
                </p>

                <h3 className="text-lg font-semibold mb-2">Connect with Us:</h3>
                <p className="mb-3">
                  Your feedback is crucial! Connect with us to help make
                  QuizMaster even better.
                </p>
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/satyam1007"
                    className="text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/satyam1007
                  </a>
                </p>
              </section>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default StartButton;
