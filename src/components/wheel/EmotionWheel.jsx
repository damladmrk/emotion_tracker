import { useState } from "react";
import { emotions } from "../../data/emotions";

export default function EmotionWheel() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSecondary, setSelectedSecondary] = useState(null);


  const size = 750;
  const center = size / 2;

  const innerRadius = 150;
  const outerRadius = 300;

  const sliceAngle = (2 * Math.PI) / emotions.length;

  function polarToCartesian(angle, r) {
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  }

  function arcPath(startAngle, endAngle, r1, r2) {
    const p1 = polarToCartesian(startAngle, r2);
    const p2 = polarToCartesian(endAngle, r2);
    const p3 = polarToCartesian(endAngle, r1);
    const p4 = polarToCartesian(startAngle, r1);

    return `
      M ${p1.x} ${p1.y}
      A ${r2} ${r2} 0 0 1 ${p2.x} ${p2.y}
      L ${p3.x} ${p3.y}
      A ${r1} ${r1} 0 0 0 ${p4.x} ${p4.y}
      Z
    `;
  }

  function getLabelPosition(startAngle, endAngle, r) {
    const angle = (startAngle + endAngle) / 2;
    return polarToCartesian(angle, r);
  }

  const selectedEmotion = emotions.find((e) => e.id === selectedId);

  return (
    <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start" }}>
      <svg width={size} height={size}>
        {emotions.map((emotion, i) => {
          const start = i * sliceAngle - Math.PI / 2;
          const end = start + sliceAngle;

          // inner label
          const innerLabelPos = getLabelPosition(start, end, innerRadius * 0.6);

          return (
            <g key={emotion.id}>
              {/* INNER RING – CORE EMOTION */}
              <path
                d={arcPath(start, end, 0, innerRadius)}
                fill={emotion.color}
                style={{
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                  opacity: selectedId === emotion.id ? 1 : 0.95,

                }}
                onClick={() => {
                  setSelectedSecondary(null);
                  setSelectedId(
                    selectedId === emotion.id ? null : emotion.id
                  );
                }}
                
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) =>
                  (e.target.style.opacity =
                    selectedId === emotion.id ? 1 : 0.95)
                }

              />

              {/* INNER LABEL */}
              <text
                x={innerLabelPos.x}
                y={innerLabelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: "white",
                  fontSize: "16px",
                  pointerEvents: "none",
                  userSelect: "none",
                  textShadow: "0 1px 2px rgba(0,0,0,0.35)",
                }}
              >
                {emotion.label}
              </text>

              {/* OUTER RING – SECONDARY EMOTIONS */}
              {emotion.secondary.map((sec, j) => {
                const subAngle = sliceAngle / emotion.secondary.length;
                const subStart = start + j * subAngle;
                const subEnd = subStart + subAngle;

                const midAngle = (subStart + subEnd) / 2;
                const rotation = (midAngle * 180) / Math.PI + 90;
                const readableRotation = (rotation > 0 && rotation < 180 ? rotation + 180 : rotation) + 90;

                const outerLabelPos = getLabelPosition(
                  subStart,
                  subEnd,
                  innerRadius + (outerRadius - innerRadius) * 0.6
                );

                return (
                  <g key={sec.id}>
                    <path
                      d={arcPath(subStart, subEnd, innerRadius, outerRadius)}
                      fill={emotion.color + "D9"}
                      style={{
                        cursor: "pointer",
                        transition: "opacity 0.2s ease",
                        opacity: 0.9,
                      }}
                      onClick={() => {
                        setSelectedId(null);
                        setSelectedSecondary(
                          selectedSecondary?.id === sec.id
                            ? null
                            : { ...sec, parent: emotion }
                        );
                      }}
                                           
                      onMouseEnter={(e) => (e.target.style.opacity = 1)}
                      onMouseLeave={(e) => (e.target.style.opacity = 0.9)}
                    />



                    <text
                      x={outerLabelPos.x}
                      y={outerLabelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${readableRotation} ${outerLabelPos.x} ${outerLabelPos.y})`}
                      style={{
                        fill: "white",
                        fontSize: "14px",
                        pointerEvents: "none",
                        userSelect: "none",
                        stroke: "rgba(0,0,0,0.35)",
                        strokeWidth: "0.6px",
                        paintOrder: "stroke",
                      }}
                    >
                      {sec.label.toUpperCase()}
                    </text>
                  </g>
                );
              })}
          </g>
          );
        })}
      </svg>

      {/* DESCRIPTION PANEL – AYNI KALIYOR */}
      <div style={{ maxWidth: "320px" }}>
        {/* SECONDARY SEÇİLİYSE */}
        {selectedSecondary ? (
          <>
            <p style={{ fontSize: "0.95rem", opacity: 0.9, marginBottom: "0.25rem" }}>
              Part of{" "}
              <strong style={{ color: selectedSecondary.parent.color }}>
                {selectedSecondary.parent.label}
              </strong>{" "}
              → {selectedSecondary.label}
            </p>

            <h3 style={{ marginTop: 0 }}>{selectedSecondary.label}</h3>

              <p>{selectedSecondary.description}</p>

              {selectedSecondary.tertiary.length > 0 && (
                <>
                  <h4 style={{ marginTop: "1rem" }}>Often felt as:</h4>
                  <ul style={{ paddingLeft: "1.2rem" }}>
                    {selectedSecondary.tertiary.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </>
              )}

            <p
              style={{
                fontSize: "0.8rem",
                opacity: 0.5,
                marginTop: "1rem",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSecondary(null)}
            >
              Click to close
            </p>
          </>
        ) : selectedEmotion ? (
          /* CORE SEÇİLİYSE */
          <>
            <h3 style={{ marginTop: "3rem" }}>
            {selectedEmotion.label}
            </h3>
            <p>{selectedEmotion.description}</p>
            <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>
              Click the same emotion again to close.
            </p>
          </>
        ) : (
          <p style={{ opacity: 0.6 }}>
            Click on a core or secondary emotion to explore.
          </p>
        )}
      </div>

    </div>
  );
}
