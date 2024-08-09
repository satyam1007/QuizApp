import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function LevelSelector({ easyMode, onBack, normalMode, hardMode }) {
  const levelBtnUI =
    "border-solid border-2 border-white text-white py-2 px-4 sm:px-6 md:px-12 rounded-full text-lg sm:text-xl bg-purple-800 hover:bg-purple-900 duration-200";

  return (
    <>
      <div className="p-4 sm:p-8 md:p-10">
        <button
          className="border-solid border-2 border-white text-white py-1 px-4 sm:px-6 md:px-4 rounded text-lg sm:text-xl bg-purple-800 hover:bg-purple-900 duration-200 flex items-center"
          onClick={onBack}
        >
          <IoIosArrowBack className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 p-4">
        <button className="border-solid border-2 border-white text-white py-2 px-4 sm:px-6 md:px-12 rounded-full text-lg sm:text-xl bg-green-800 hover:bg-green-900 duration-200">
          Level up
        </button>
        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-lg text-white text-center py-2 font-bold">
            Easy Level
          </p>
          <button className={levelBtnUI} onClick={easyMode}>
            Start Quiz
          </button>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-lg text-white text-center py-2 font-bold">
            Normal Level
          </p>
          <button className={levelBtnUI} onClick={normalMode}>
            Start Quiz
          </button>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-lg text-white text-center py-2 font-bold">
            Hard Level
          </p>
          <button className={levelBtnUI} onClick={hardMode}>
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default LevelSelector;
