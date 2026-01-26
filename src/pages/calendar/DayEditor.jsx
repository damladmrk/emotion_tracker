import { emotions } from "../../data/emotions";

export default function DayEditor({ date, entry, onUpdate }) {
  const selectedCore = entry?.core || null;
  const selectedSecondary = entry?.secondary || [];
  const note = entry?.note || "";

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1.5rem",
        borderRadius: "16px",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
      }}
    >
      <h3 style={{ marginTop: 0 }}>
        Today · {date}
      </h3>

      {/* CORE EMOTION */}
      <div style={{ marginTop: "1.5rem" }}>
        <p style={{ opacity: 0.6 }}>Core emotion</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {emotions.map((e) => (
            <button
              key={e.id}
              onClick={() =>
                onUpdate({
                  core: e.id,
                  secondary: [] // core değişince secondary reset
                })
              }
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background:
                  selectedCore === e.id ? e.color : "#f1f1ee",
                color: selectedCore === e.id ? "white" : "#222"
              }}
            >
              {e.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECONDARY EMOTIONS */}
      {selectedCore && (
        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ opacity: 0.6 }}>Also felt</p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {emotions
              .find((e) => e.id === selectedCore)
              ?.secondary.map((s) => {
                const active = selectedSecondary.includes(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() =>
                      onUpdate({
                        secondary: active
                          ? selectedSecondary.filter((x) => x !== s.id)
                          : [...selectedSecondary, s.id]
                      })
                    }
                    style={{
                      padding: "0.4rem 0.9rem",
                      borderRadius: "999px",
                      border: "1px solid #ddd",
                      background: active ? "#222" : "transparent",
                      color: active ? "white" : "#222",
                      cursor: "pointer"
                    }}
                  >
                    {s.label}
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {/* NOTE */}
      <div style={{ marginTop: "1.5rem" }}>
        <p style={{ opacity: 0.6 }}>Note</p>
        <textarea
          rows={3}
          placeholder="Anything you want to remember about today…"
          value={note}
          onChange={(e) => onUpdate({ note: e.target.value })}
          style={{
            width: "100%",
            borderRadius: "8px",
            padding: "0.75rem",
            border: "1px solid #ddd",
            resize: "none"
          }}
        />
      </div>
    </div>
  );
}
