const PRIOR = {
    anger: 0.5,
    sad: 0.6,
    fear: 0.6,
    disgust: 0.4,
    surprise: 0.7,
    happy: 1.0
  };  

  export function calculateScores(answers, questions) {
    const scores = { ...PRIOR };
  
    questions.forEach((q) => {
      const value = answers[q.id] || 0;
  
      Object.entries(q.weights).forEach(([emotion, weight]) => {
        scores[emotion] += value * weight;
      });
    });
  
    return scores;
  }

  export function normalize(scores) {
    const total = Object.values(scores)
      .map(Math.abs)
      .reduce((a, b) => a + b, 0);
  
    const normalized = {};
    for (const key in scores) {
      normalized[key] = total === 0 ? 0 : scores[key] / total;
    }
  
    return normalized;
  }

  export function getLikelyEmotions(scores, threshold = 0.08) {
    const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top = entries[0][1];
  
    return entries
      .filter(([, value]) => top - value <= threshold)
      .map(([emotion]) => emotion);
  }
  
  export function getConfidence(normalizedScores) {
    const values = Object.values(normalizedScores).sort((a, b) => b - a);
    return values[0] - values[1];
  }
    
  
  export function getTopEmotions(scores, count = 3) {
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, count)
      .map(([emotion]) => emotion);
  }
  