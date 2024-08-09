import { useState } from "react";
import LevelSelector from "./components/LevelSelector";
import StartButton from "./components/StartButton";
import Quiz from "./components/Quiz";

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
        />
      )}
      {stage === "quiz" && <Quiz goBack={() => setStage("levelSelector")} />}
    </>
  );
}

export default App;
