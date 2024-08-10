import { useState } from "react";
import LevelSelector from "./components/LevelSelector";
import StartButton from "./components/StartButton";
import Quiz from "./components/Quiz";
import { data as easyData } from "./assets/Data";
import { NormalData } from "./assets/NormalData";
import { HardData } from "./assets/HardData";

function App() {
  const [stage, setStage] = useState("start");
  const [quizSet, setQuizSet] = useState(null);

  const handleQuizData = (data) => {
    setQuizSet(data);
    setStage("quiz");
  };

  return (
    <>
      {stage === "start" && (
        <StartButton onClick={() => setStage("levelSelector")} />
      )}
      {stage === "levelSelector" && (
        <LevelSelector
          onBack={() => setStage("start")}
          easyMode={() => handleQuizData(easyData)}
          normalMode={() => handleQuizData(NormalData)}
          hardMode={() => handleQuizData(HardData)}
        />
      )}
      {stage === "quiz" && (
        <Quiz goBack={() => setStage("levelSelector")} data={quizSet} />
      )}
    </>
  );
}

export default App;
