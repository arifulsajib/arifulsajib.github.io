import type { ResearchProject, SoftwareProject } from "@/types";

export const researchProjects: ResearchProject[] = [
  {
    id: "deltapath",
    title:
      "DeltaPath: Gated Delta-Rule Encoding for Efficient Vehicle Trajectory Representation Learning",
    category: "Trajectory Representation Learning",
    description:
      "A gated delta-rule encoding framework designed for efficient, long-sequence trajectory representation learning in intelligent transportation systems.",
    problem:
      "Traditional recurrent models struggle with long-range dependencies, while full-attention Transformers incur quadratic computational complexity when processing dense vehicle trajectory sequences.",
    approach:
      "Formulates a gated delta-rule sequence encoder that dynamically updates memory representations while maintaining linear computational efficiency with respect to trajectory sequence length.",
    results:
      "Achieved superior representation quality on trajectory similarity and downstream routing tasks while substantially cutting training and inference overhead.",
    technologies: [
      "Python",
      "PyTorch",
      "Sequence Modelling",
      "Spatiotemporal Data Mining",
    ],
    status: "under-review",
    publicationId: "deltapath-2027",
    links: [],
    featured: true,
  },
  {
    id: "tsca-net",
    title:
      "TSCA-Net: Temporal-Spatial Clique Attention for Multimodal Pedestrian Trajectory Prediction",
    category: "Trajectory Prediction & Attention Models",
    description:
      "Temporal-spatial clique attention network modeling multi-agent interactions and environmental contexts for robust multimodal trajectory forecasting.",
    problem:
      "Accurate trajectory forecasting in crowded environments requires joint modeling of subtle individual intentions, complex social conventions, and multi-agent spatial cliques.",
    approach:
      "Introduces a temporal-spatial clique attention mechanism that groups interacting pedestrians into topological cliques and extracts coordinated motion features over time.",
    results:
      "Demonstrated competitive displacement error reductions across benchmark pedestrian trajectory datasets (accepted at MSN 2026).",
    technologies: [
      "Python",
      "PyTorch",
      "Clique Attention",
      "Pedestrian Dynamics",
    ],
    status: "accepted",
    publicationId: "tsca-net-2026",
    links: [
      { label: "arXiv Paper", url: "https://arxiv.org/abs/2607.11939" },
      { label: "GitHub Code", url: "https://github.com/arifulsajib/TSCA-Net" },
    ],
    featured: true,
  },
  {
    id: "covid19-transfer-learning",
    title:
      "Transfer Learning-Based COVID-19 Detection Using Chest X-Ray Images",
    category: "Medical Computer Vision",
    description:
      "A deep transfer learning pipeline utilizing pretrained convolutional representations coupled with a tailored classifier for diagnostic radiography screening.",
    problem:
      "Limited labeled medical imaging datasets during critical health events impede training deep neural networks from scratch without severe overfitting.",
    approach:
      "Leveraged pretrained convolutional feature extractors fine-tuned with customized classification layers and rigorous data augmentation on chest X-ray scans.",
    results:
      "Achieved robust diagnostic classification performance on multi-class radiography benchmarks (published in IEEE QPAIN 2025).",
    technologies: [
      "Python",
      "PyTorch",
      "Transfer Learning",
      "Computer Vision",
    ],
    status: "published",
    publicationId: "covid19-qpain-2025",
    links: [
      {
        label: "IEEE DOI",
        url: "https://doi.org/10.1109/QPAIN66474.2025.11172261",
      },
    ],
    featured: false,
  },
];

export const softwareProjects: SoftwareProject[] = [
  {
    id: "devskill-lms",
    title: "DevSkill — Learning Management System (LMS)",
    role: "Full-Stack Developer",
    period: "2023 – 2024",
    description:
      "A complete Learning Management System featuring interactive course catalogs, student enrollment workflows, lesson progress tracking, and administrative controls.",
    problem:
      "Educational providers needed a responsive, maintainable web platform capable of managing courses, user access, and dynamic learning materials without unnecessary complexity.",
    approach:
      "Architected a responsive frontend with React and Tailwind CSS, coupled with modular Express.js REST APIs and MongoDB for high-throughput course and user data handling.",
    result:
      "Delivered a production-ready, accessible web application with smooth client-side routing, modular components, and reliable backend services.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],
    image: "/images/projects/devskill.png",
    links: [
      {
        label: "Live Demo",
        url: "https://devskill-lms.netlify.app/",
      },
      {
        label: "Github Code",
        url: "https://github.com/arifulsajib/DevSkill-Academy-LMS-website/",
      },
    ],
    featured: true,
  },
  {
    id: "sale-management-system",
    title: "Sales & Inventory Management System (Windows App)",
    role: "Desktop Application Developer",
    period: "2021",
    description:
      "A Windows-based sales and inventory management application featuring role-based access, product and stock management, sales processing, and business performance analysis.",
    problem:
      "Businesses needed a centralized desktop application to manage products, monitor inventory, process sales, and track sales performance with separate access privileges for administrators and regular users.",
    approach:
      "Developed a Windows Forms application using C# with a layered architecture, separating business logic and data access into dedicated modules. Integrated Microsoft SQL Server for data management and implemented role-based access control for administrative and user operations.",
    result:
      "Delivered a functional desktop management system with user authentication, dedicated dashboards, product and inventory management, sales tracking, profit analysis, and profile management.",
    technologies: [
      "C#",
      ".NET Framework",
      "Windows Forms (WinForms)",
      "Microsoft SQL Server",
      "SQL",
      "Layered Architecture",
    ],
    image: "/images/projects/sale-management-system.png",
    links: [
      {
        label: "GitHub Code",
        url: "https://github.com/arifulsajib/sale-management-system-winform",
      },
    ],
    featured: true,
  },
  {
    id: "chrono-dial",
    title: "ChronoDial — Watch E-Commerce Platform",
    role: "Full-Stack Developer",
    period: "2023",
    description:
      "A responsive e-commerce web application with product catalog navigation, item filtering, user authentication, and shopping cart management.",
    problem:
      "Required an intuitive, lightweight web store demonstrating responsive catalog filtering, inventory management, and smooth shopping workflows.",
    approach:
      "Built interactive product discovery components using React and responsive design principles, integrated with backend data stores and authentication.",
    result:
      "Implemented a clean, reliable storefront with client-side state persistence and responsive layouts across desktop and mobile screens.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Responsive Web Design",
      "REST API",
    ],
    image: "/images/projects/chronoDial.png",
    links: [
      {
        label: "Live Demo",
        url: "https://chrono-dial-watch.web.app/",
      },
      {
        label: "Github Code",
        url: "https://github.com/arifulsajib/watch-website-chrono-dial/",
      },
    ],
    featured: false,
  },
];
