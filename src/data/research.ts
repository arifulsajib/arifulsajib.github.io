import type { ResearchInterestGroup, ResearchStatement } from "@/types";

export const researchStatement: ResearchStatement = {
  primaryDirection:
    "Efficient representation learning and sequence modelling for complex spatiotemporal data, particularly vehicle trajectories.",
  summary:
    "My research investigates methods for learning meaningful, compact representations from complex sequential and spatiotemporal data streams. I focus on developing computationally efficient sequence models that capture structural, spatial, and temporal dynamics in mobility systems, intelligent transportation, and multimodal observation environments.",
  paragraphs: [
    "Modern mobility and intelligent transportation systems generate immense volumes of continuous spatiotemporal data. Traditional sequence modelling architectures often suffer from high computational complexity, memory overheads, or inadequate capture of irregular sampling and topological constraints inherent in real-world trajectory streams.",
    "My work focuses on addressing these bottlenecks through principled representation learning—specifically designing gated linear and delta-rule sequence encoders that preserve long-range dependencies while maintaining sub-quadratic inference and training efficiency. By pairing sequence models with spatial topology, these approaches enable scalable trajectory classification, route prediction, and travel time estimation.",
    "Beyond vehicle and pedestrian trajectory learning, my broader research interests span multimodal deep learning, medical imaging analytics, and predictive data science. I aim to create robust, interpretable representation models capable of bridging raw sensory observations with real-world decision making in complex dynamic environments.",
  ],
};

export const researchInterestGroups: ResearchInterestGroup[] = [
  {
    category: "Spatiotemporal & Trajectory Computing",
    topics: [
      "Vehicle Trajectory Representation Learning",
      "Pedestrian Trajectory Prediction",
      "Spatiotemporal Data Mining",
      "Intelligent Transportation Systems (ITS)",
      "Streaming Data Processing",
    ],
  },
  {
    category: "Sequence Modelling & Deep Learning",
    topics: [
      "Efficient Sequence Modelling",
      "Gated Delta-Rule & Linear RNN Encoders",
      "Time Series Analysis & Forecasting",
      "Deep Representation Learning",
      "Attention & Clique Mechanisms",
    ],
  },
  {
    category: "Artificial Intelligence & Applied Analytics",
    topics: [
      "Computer Vision & Multimodal Learning",
      "Transfer Learning & Domain Adaptation",
      "Medical Image Analysis",
      "Data Science & Predictive Modelling",
    ],
  },
];
