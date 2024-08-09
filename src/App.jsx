import { useState } from "react";
import LevelSelector from "./components/LevelSelector";
import StartButton from "./components/StartButton";
import Quiz from "./components/Quiz";
import NormalQuiz from "./components/NormalQuiz";
import HardQuiz from "./components/HardQuiz";

function App() {
  const [stage, setStage] = useState("start");
  return (
    <>
      {stage === "start" && (
        <StartButton onClick={() => setStage("levelSelector")} />
      )}
      {stage === "levelSelector" && (
        <LevelSelector
          onBack={() => setStage("start")}
          easyMode={() => setStage("quiz")}
          normalMode={() => setStage("normalQuiz")}
          hardMode={() => setStage("hardQuiz")}
        />
      )}
      {stage === "quiz" && <Quiz goBack={() => setStage("levelSelector")} />}
      {stage === "normalQuiz" && (
        <NormalQuiz goBack={() => setStage("levelSelector")} />
      )}
      {stage === "hardQuiz" && (
        <HardQuiz goBack={() => setStage("levelSelector")} />
      )}
    </>
  );
}

export default App;
