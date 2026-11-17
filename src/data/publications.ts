import type { Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: "deltapath-2027",
    title:
      "DeltaPath: Gated Delta-Rule Encoding for Efficient Vehicle Trajectory Representation Learning",
    authors: [
      { name: "Md Ariful Islam", isMe: true },
      { name: "Ruiyuan Li", isMe: false },
      { name: "A F M Abdun Noor", isMe: false },
      { name: "Md Imam Ahasan", isMe: false },
      { name: "Md Rakibul Islam", isMe: false },
      { name: "Md Mustafizur Rahman", isMe: false },
      { name: "Swachha Ray", isMe: false },
    ],
    venue: "ICASSP 2027",
    year: 2027,
    status: "under-review",
    description:
      "A gated delta-rule encoding approach for efficient vehicle trajectory representation learning, focusing on capturing meaningful trajectory patterns through efficient sequence modelling.",
    links: {},
    bibtex: `@inproceedings{islam2027deltapath,
  title={DeltaPath: Gated Delta-Rule Encoding for Efficient Vehicle Trajectory Representation Learning},
  author={Islam, Md Ariful and Li, Ruiyuan and Noor, A F M Abdun and Ahasan, Md Imam and Islam, Md Rakibul and Rahman, Md Mustafizur and Ray, Swachha},
  booktitle={IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  year={2027},
  note={Under Review}
}`,
    featured: true,
  },
  {
    id: "tsca-net-2026",
    title:
      "TSCA-Net: Temporal-Spatial Clique Attention for Multimodal Pedestrian Trajectory Prediction",
    authors: [
      { name: "Md Mustafizur Rahman", isMe: false },
      { name: "Guangchao Yang", isMe: false },
      { name: "A F M Abdun Noor", isMe: false },
      { name: "Md Imam Ahasan", isMe: false },
      { name: "Md Mahfuzur Rahman", isMe: false },
      { name: "Md Ariful Islam", isMe: true },
    ],
    venue: "MSN 2026 — International Conference on Mobility, Sensing and Networking",
    year: 2026,
    status: "accepted",
    description:
      "A temporal-spatial clique attention approach for multimodal pedestrian trajectory prediction, exploring interaction and contextual information.",
    links: {
      paper: "https://arxiv.org/abs/2607.11939",
      code: "https://github.com/arifulsajib/TSCA-Net",
    },
    bibtex: `@inproceedings{rahman2026tscanet,
  title={TSCA-Net: Temporal-Spatial Clique Attention for Multimodal Pedestrian Trajectory Prediction},
  author={Rahman, Md Mustafizur and Yang, Guangchao and Noor, A F M Abdun and Ahasan, Md Imam and Rahman, Md Mahfuzur and Islam, Md Ariful},
  booktitle={International Conference on Mobility, Sensing and Networking (MSN)},
  year={2026},
  note={Accepted}
}`,
    featured: true,
  },
  {
    id: "covid19-qpain-2025",
    title:
      "Transfer Learning-Based COVID-19 Detection Using Chest X-Ray Images with a Pretrained Neural Network and Custom Classifier",
    authors: [
      { name: "MD Roman Sarkar", isMe: false },
      { name: "MD Rased Hasan", isMe: false },
      { name: "MD Shohel Rana", isMe: false },
      { name: "MD Ariful Islam", isMe: true },
      { name: "MD Mushfiqur Rahman Neidhe", isMe: false },
    ],
    venue: "2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
    year: 2025,
    status: "published",
    description:
      "An application of transfer learning and pretrained neural networks for COVID-19 detection using chest X-ray images.",
    links: {
      doi: "https://doi.org/10.1109/QPAIN66474.2025.11172261",
    },
    bibtex: `@inproceedings{sarkar2025transfer,
  title={Transfer Learning-Based COVID-19 Detection Using Chest X-Ray Images with a Pretrained Neural Network and Custom Classifier},
  author={Sarkar, MD Roman and Hasan, MD Rased and Rana, MD Shohel and Islam, MD Ariful and Neidhe, MD Mushfiqur Rahman},
  booktitle={2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)},
  year={2025},
  doi={10.1109/QPAIN66474.2025.11172261}
}`,
    featured: true,
  },
];
