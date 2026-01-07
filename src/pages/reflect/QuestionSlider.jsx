
export default function QuestionSlider({ question, value, onChange }) {
    return (
      <div style={{ marginBottom: "2rem" }}>
        <p>{question.text}</p>
  
        <input
          type="range"
          min="1"
          max="4"
          step="1"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
  
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
          <span>Not at all</span>
          <span>Very much</span>
        </div>
      </div>
    );
  }
  