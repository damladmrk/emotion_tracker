// src/pages/Reflect/ReflectPage.jsx

import { useState } from "react";
import { coreQuestions } from "../../data/questions/coreQuestions";
import { calculateScores, getTopEmotions } from "../../utils/scoring";
import QuestionSlider from "./QuestionSlider";

export default function ReflectPage() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  function handleAnswer(id, value) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit() {
    const scores = calculateScores(answers, coreQuestions);
    const top = getTopEmotions(scores, 3);
    setResult(top);
  }

  return (
    <div>
      <h2>Reflect</h2>

      {coreQuestions.map((q) => (
        <QuestionSlider
          key={q.id}
          question={q}
          value={answers[q.id] || 0}
          onChange={(val) => handleAnswer(q.id, val)}
        />
      ))}

      <button onClick={handleSubmit}>See emotions</button>

      {result && (
        <div style={{ marginTop: "2rem" }}>
          <p>These emotions may fit your experience:</p>
          <ul>
            {result.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
