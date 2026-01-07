export const emotions = [
  {
    id: "anger",
    label: "Anger",
    color: "#E4878A",
    description:
      "Anger is an activating emotion that arises when boundaries feel crossed or needs feel unmet. It can range from mild irritation to intense rage and often signals that something important feels threatened.",
    secondary: [
      {
        id: "mad",
        label: "Mad",
        description:
          "Feeling mad often comes with a surge of energy and tension. It can feel loud and immediate, pushing you to react before you fully process what happened.",
        tertiary: ["furious", "enraged"],
      },
      {
        id: "hurt",
        label: "Hurt",
        description:
          "Hurt tends to appear when emotional pain comes from feeling dismissed, misunderstood, or emotionally exposed. It often sits quietly beneath anger.",
        tertiary: ["devastated", "embarrassed"],
      },
      {
        id: "threatened",
        label: "Threatened",
        description:
          "Feeling threatened can emerge when your sense of safety, identity, or stability feels at risk, even if the danger is emotional rather than physical.",
        tertiary: ["insecure", "jealous"],
      },
      {
        id: "hateful",
        label: "Hateful",
        description:
          "Hateful feelings may arise when anger hardens into resentment. They often reflect prolonged pain or unresolved emotional wounds.",
        tertiary: ["violated", "resentful"],
      },
      {
        id: "aggressive",
        label: "Aggressive",
        description:
          "Aggression can show up as a readiness to confront or push back. It often reflects a buildup of frustration that no longer feels containable.",
        tertiary: ["provoked", "hostile"],
      },
      {
        id: "frustrated",
        label: "Frustrated",
        description:
          "Frustration appears when efforts feel blocked or progress feels impossible. It often comes with restlessness and mental exhaustion.",
        tertiary: ["irritated", "infuriated"],
      },
      {
        id: "distant",
        label: "Distant",
        description:
          "Feeling distant can be a way of emotionally protecting yourself. It may show up as withdrawal or emotional numbness after conflict.",
        tertiary: ["withdrawn", "suspicious"],
      },
      {
        id: "critical",
        label: "Critical",
        description:
          "Critical feelings often arise when disappointment turns outward. They can mask deeper vulnerability or unmet expectations.",
        tertiary: ["skeptical", "sarcastic"],
      },
    ],
  },

  {
    id: "disgust",
    label: "Disgust",
    color: "#9C8BB8",
    description:
      "Disgust arises when something feels repelling, uncomfortable, or morally unsettling. It can serve as a boundary-setting emotion, creating distance from what feels wrong.",
    secondary: [
      {
        id: "disapproval",
        label: "Disapproval",
        description:
          "Disapproval often reflects a sense that something violates your values or expectations. It can feel quiet but firm.",
        tertiary: ["judgmental", "loathing"],
      },
      {
        id: "disappointed",
        label: "Disappointed",
        description:
          "Disappointment appears when reality fails to meet expectations. It may carry sadness alongside disengagement.",
        tertiary: ["repugnant", "revolted"],
      },
      {
        id: "avoidance",
        label: "Avoidance",
        description:
          "Avoidance can feel like pulling away or hesitating. It often serves as a protective response to discomfort.",
        tertiary: ["hesitant", "aversion"],
      },
      {
        id: "awful",
        label: "Awful",
        description:
          "This feeling arises when something feels deeply unpleasant or disturbing, lingering longer than a momentary reaction.",
        tertiary: ["revulsion", "detestable"],
      },
    ],
  },

  {
    id: "sad",
    label: "Sad",
    color: "#5E93BF",
    description:
      "Sadness often appears in response to loss, disappointment, or emotional fatigue. It may slow you down and draw attention inward.",
    secondary: [
      {
        id: "guilty",
        label: "Guilty",
        description:
          "Guilt arises when actions or thoughts conflict with personal values. It often comes with self-reflection.",
        tertiary: ["remorseful", "ashamed"],
      },
      {
        id: "depressed",
        label: "Depressed",
        description:
          "Depression can feel heavy and draining, reducing motivation and emotional responsiveness over time.",
        tertiary: ["inferior", "empty"],
      },
      {
        id: "abandoned",
        label: "Abandoned",
        description:
          "Feeling abandoned often emerges when connection or support feels lost or withdrawn.",
        tertiary: ["ignored", "victimized"],
      },
      {
        id: "despair",
        label: "Despair",
        description:
          "Despair reflects a sense of hopelessness, where options feel limited and relief feels distant.",
        tertiary: ["powerless", "vulnerable"],
      },
      {
        id: "bored",
        label: "Bored",
        description:
          "Boredom appears when stimulation or meaning feels absent, leading to disengagement.",
        tertiary: ["apathetic", "indifferent"],
      },
      {
        id: "lonely",
        label: "Lonely",
        description:
          "Loneliness reflects a gap between desired and felt connection. It can exist even when others are present.",
        tertiary: ["abandoned", "isolated"],
      },
    ],
  },

  {
    id: "happy",
    label: "Happy",
    color: "#E0C85E",
    description:
      "Happiness can show up as warmth, ease, or quiet satisfaction. It doesn’t have to be intense to be meaningful.",
    secondary: [
      {
        id: "joyful",
        label: "Joyful",
        description:
          "Joyful feelings often bring lightness and emotional openness, making moments feel vivid and engaging.",
        tertiary: [],
      },
      {
        id: "interested",
        label: "Interested",
        description:
          "Interest draws attention outward, creating curiosity and a desire to explore or learn.",
        tertiary: [],
      },
      {
        id: "proud",
        label: "Proud",
        description:
          "Pride arises from recognizing effort, growth, or achievement, either personal or shared.",
        tertiary: [],
      },
      {
        id: "accepted",
        label: "Accepted",
        description:
          "Feeling accepted brings a sense of belonging and emotional safety within relationships.",
        tertiary: [],
      },
      {
        id: "powerful",
        label: "Powerful",
        description:
          "Powerful feelings often involve confidence and agency, sensing your ability to influence outcomes.",
        tertiary: [],
      },
      {
        id: "peaceful",
        label: "Peaceful",
        description:
          "Peacefulness appears as inner calm and steadiness, often when tension subsides.",
        tertiary: [],
      },
      {
        id: "intimate",
        label: "Intimate",
        description:
          "Intimacy reflects emotional closeness and trust, allowing vulnerability to feel safe.",
        tertiary: [],
      },
      {
        id: "optimistic",
        label: "Optimistic",
        description:
          "Optimism looks toward the future with hope, even while acknowledging uncertainty.",
        tertiary: [],
      },
    ],
  },

  {
    id: "surprise",
    label: "Surprise",
    color: "#44B8BE",
    description:
      "Surprise occurs when expectations suddenly shift, pulling attention sharply into the present moment.",
    secondary: [
      {
        id: "startled",
        label: "Startled",
        description:
          "Startle reactions are quick and instinctive, often accompanied by a physical jolt.",
        tertiary: ["shocked", "dismayed"],
      },
      {
        id: "confused",
        label: "Confused",
        description:
          "Confusion arises when information doesn’t align, making it hard to orient or decide.",
        tertiary: ["perplexed", "disillusioned"],
      },
      {
        id: "amazed",
        label: "Amazed",
        description:
          "Amazement blends surprise with wonder, often carrying a sense of awe.",
        tertiary: ["awe", "astonished"],
      },
      {
        id: "excited",
        label: "Excited",
        description:
          "Excitement brings heightened energy and anticipation toward what’s unfolding.",
        tertiary: ["eager", "energetic"],
      },
    ],
  },

  {
    id: "fear",
    label: "Fear",
    color: "#5EBF74",
    description:
      "Fear emerges in response to perceived risk or uncertainty, preparing the body for protection.",
    secondary: [
      {
        id: "scared",
        label: "Scared",
        description:
          "Being scared often feels immediate and intense, focusing attention on possible danger.",
        tertiary: ["frightened", "terrified"],
      },
      {
        id: "anxious",
        label: "Anxious",
        description:
          "Anxiety tends to linger, involving worry about what might happen rather than what is happening.",
        tertiary: ["worried", "overwhelmed"],
      },
      {
        id: "insecure",
        label: "Insecure",
        description:
          "Insecurity reflects doubt about self-worth or stability, often in social contexts.",
        tertiary: ["inferior", "inadequate"],
      },
      {
        id: "submissive",
        label: "Submissive",
        description:
          "Submissive feelings can arise when asserting yourself feels unsafe or overwhelming.",
        tertiary: ["worthless", "insignificant"],
      },
      {
        id: "rejected",
        label: "Rejected",
        description:
          "Rejection carries the pain of feeling unwanted or excluded from connection.",
        tertiary: ["alienated", "inadequate"],
      },
      {
        id: "humiliated",
        label: "Humiliated",
        description:
          "Humiliation involves exposure and loss of dignity, often in social situations.",
        tertiary: ["ridiculed", "disrespected"],
      },
    ],
  },
];

  
  