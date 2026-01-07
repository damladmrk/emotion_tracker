
export function calculateScores(answers, questions) {
    const scores = {};
  
    questions.forEach((q) => {
      const value = answers[q.id] || 0;
  
      Object.entries(q.weights).forEach(([emotion, weight]) => {
        scores[emotion] = (scores[emotion] || 0) + value * weight;
      });
    });
  
    return scores;
  }
  
  export function getTopEmotions(scores, count = 3) {
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, count)
      .map(([emotion]) => emotion);
  }
  