import type { NewsItem } from "@/types";

export const newsItems: NewsItem[] = [
  {
    id: "deltapath-icassp-submission",
    date: "2026",
    title:
      "Paper submitted: DeltaPath on vehicle trajectory representation learning submitted to ICASSP 2027.",
    description:
      "Under review: DeltaPath proposes a gated delta-rule sequence encoder for efficient vehicle trajectory representation learning.",
    category: "publication",
  },
  {
    id: "tsca-net-msn-accepted",
    date: "2026",
    title:
      "Paper accepted: TSCA-Net accepted at MSN 2026.",
    description:
      "Our work on Temporal-Spatial Clique Attention for multimodal pedestrian trajectory prediction was accepted for presentation at MSN 2026.",
    link: {
      label: "arXiv",
      url: "https://arxiv.org/abs/2607.11939",
    },
    category: "publication",
  },
  {
    id: "covid19-qpain-published",
    date: "2025",
    title:
      "Paper published: Transfer learning-based COVID-19 detection published in IEEE QPAIN 2025.",
    description:
      "Research on pretrained neural networks and custom classifiers for chest X-ray screening published with IEEE Xplore.",
    link: {
      label: "IEEE Xplore",
      url: "https://doi.org/10.1109/QPAIN66474.2025.11172261",
    },
    category: "publication",
  },
  {
    id: "cqu-msc-admission",
    date: "September 2024",
    title:
      "Commenced MSc in Computer Technology at Chongqing University, China.",
    description:
      "Focusing on representation learning, efficient sequence modelling, and intelligent transportation systems.",
    category: "academic",
  },
];
