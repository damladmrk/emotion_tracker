import { useState } from "react";
import { coreQuestions } from "../../data/questions/coreQuestions";
import { secondaryQuestions } from "../../data/questions/secondaryQuestions";
import { calculateScores, getTopEmotions } from "../../util/scoring";
import QuestionSlider from "./QuestionSlider";

function pickRandomQuestions(list, count = 5) {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ReflectPage() {
  const [questions] = useState(() => pickRandomQuestions(coreQuestions, 5));
  const [answers, setAnswers] = useState({});
  const [coreResult, setCoreResult] = useState(null);
  const [selectedCore, setSelectedCore] = useState(null);

  const [secondaryAnswers, setSecondaryAnswers] = useState({});
  const [secondaryResult, setSecondaryResult] = useState(null);

  function handleAnswer(id, value) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit() {
    const scores = calculateScores(answers, questions);
    const top = getTopEmotions(scores, 3);
    setCoreResult(top);
  }

  function handleSecondarySubmit() {
    const questions = secondaryQuestions[selectedCore];
  
    const scores = calculateScores(secondaryAnswers, questions);
  
    const allowedSecondaryIds = questions.flatMap(q =>
      Object.keys(q.weights)
    );
  
    const filteredScores = Object.entries(scores)
      .filter(([emotion]) => allowedSecondaryIds.includes(emotion));
  
    const top = filteredScores
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([emotion]) => emotion);
  
    setSecondaryResult(top);
  }
  

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf9f7",
        padding: "3rem 1.5rem"
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          background: "white",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
        }}
      >
        <h2 style={{ marginTop: 0, fontWeight: 400 }}>
          Let’s slow this moment down.
        </h2>
        <p style={{ opacity: 0.6, marginBottom: "2rem" }}>
          There are no right answers. Just notice what feels true.
        </p>

        {/* CORE QUESTIONS */}
        {!coreResult &&
          questions.map((q) => (
            <QuestionSlider
              key={q.id}
              question={q}
              value={answers[q.id] || 0}
              onChange={(val) => handleAnswer(q.id, val)}
            />
          ))}

        {!coreResult && (
          <button
            onClick={handleSubmit}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              border: "none",
              background: "#222",
              color: "white",
              cursor: "pointer"
            }}
          >
            See what might be present
          </button>
        )}

        {/* CORE RESULT */}
        {coreResult && !selectedCore && (
          <div style={{ marginTop: "2.5rem" }}>
            <p style={{ opacity: 0.7 }}>
              These emotions may fit your experience.
              Choose one to explore further:
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {coreResult.map((e) => (
                <div
                  key={e}
                  onClick={() => setSelectedCore(e)}
                  style={{
                    cursor: "pointer",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "999px",
                    background: "#f1f1ee"
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECONDARY QUESTIONS */}
        {selectedCore && !secondaryResult && (
          <div style={{ marginTop: "3rem" }}>
            <h3>
              Let’s explore {selectedCore} a bit more.
            </h3>
            <p style={{ opacity: 0.6 }}>
              This emotion can show up in different ways.
            </p>

            {secondaryQuestions[selectedCore]?.map((q) => (
              <QuestionSlider
                key={q.id}
                question={q}
                value={secondaryAnswers[q.id] || 0}
                onChange={(val) =>
                  setSecondaryAnswers((prev) => ({
                    ...prev,
                    [q.id]: val
                  }))
                }
              />
            ))}

            <button
              onClick={handleSecondarySubmit}
              style={{
                marginTop: "2rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                background: "#222",
                color: "white",
                cursor: "pointer"
              }}
            >
              Explore this emotion
            </button>
          </div>
        )}

        {/* SECONDARY RESULT */}
        {secondaryResult && (
          <p style={{ marginTop: "2.5rem", opacity: 0.7 }}>
            This experience may resemble{" "}
            <strong>{secondaryResult.join(" or ")}</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
