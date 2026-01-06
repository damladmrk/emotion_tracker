import { useState } from "react";
import { emotions } from "../../data/emotions";

export default function EmotionWheel() {
  const [selectedId, setSelectedId] = useState(null);

  const size = 600;
  const center = size / 2;

  const innerRadius = 150;
  const outerRadius = 250;

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
                  transition: "filter 0.2s ease",
                  filter:
                    selectedId === emotion.id
                      ? "brightness(1.15)"
                      : "brightness(1)",
                }}
                onClick={() =>
                  setSelectedId(
                    selectedId === emotion.id ? null : emotion.id
                  )
                }
                onMouseEnter={(e) =>
                  (e.target.style.filter = "brightness(1.25)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.filter =
                    selectedId === emotion.id
                      ? "brightness(1.15)"
                      : "brightness(1)")
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

                const outerLabelPos = getLabelPosition(
                  subStart,
                  subEnd,
                  (innerRadius + outerRadius) / 2
                );

                return (
                  <g key={sec.id}>
                    <path
                      d={arcPath(subStart, subEnd, innerRadius, outerRadius)}
                      fill={emotion.color + "99"} // pastel
                      style={{
                        transition: "filter 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.filter = "brightness(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.filter = "brightness(1)")
                      }
                    />

                    <text
                      x={outerLabelPos.x}
                      y={outerLabelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: "white",
                        fontSize: "11px",
                        pointerEvents: "none",
                        userSelect: "none",
                        opacity: 0.9,
                        textShadow: "0 1px 2px rgba(0,0,0,0.35)",
                      }}
                    >
                      {sec.label}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>

      {/* DESCRIPTION PANEL – AYNI KALIYOR */}
      <div style={{ maxWidth: "300px" }}>
        {selectedEmotion ? (
          <>
            <h3 style={{ marginTop: 0 }}>{selectedEmotion.label}</h3>
            <p>{selectedEmotion.description}</p>
            <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>
              Click the same emotion again to close.
            </p>
          </>
        ) : (
          <p style={{ opacity: 0.6 }}>
            Click on a core emotion to read its description.
          </p>
        )}
      </div>
    </div>
  );
}
