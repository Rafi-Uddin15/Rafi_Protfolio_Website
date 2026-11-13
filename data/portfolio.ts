/**
 * Every claim on the site lives here, and every claim must be checkable.
 * Rule: a number or quote only goes in if it appears in Rafi's CV or has a public source.
 * `evidence` is what the "Explain this candidate" chart and case studies link to.
 */

export type Evidence = { label: string; href: string };

export const person = {
  name: "Rafi Uddin",
  role: "Data & AI Analyst",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka",
  availability: "Open to data analyst, BI and applied-AI roles: full-time, on-site in Dhaka or remote.",
  email: "rafiuddinofficial@gmail.com",
  phone: "+880 1334-752560",
  linkedin: "https://www.linkedin.com/in/rafi-uddin-io/",
  github: "https://github.com/Rafi-Uddin15",
  scholar: "https://scholar.google.com/citations?user=QxcDcOwAAAAJ&hl=en",
  resumePdf: "/Rafi_Uddin_Resume.pdf",
  portrait: "/rafi-portrait.jpg",
  summary:
    "By day I verify identities and records for North American clients at SEBPO. Before that I built SQL-to-Power BI pipelines and machine-learning models that show their reasoning, including drug-classification research published in IEEE Xplore.",
};

/**
 * The signature moment: a SHAP-style explanation of "why this candidate".
 * Weights are Rafi's own judgement of relevance, not model output, and the chart says so.
 * Each factor links to evidence on the page or off it.
 */
export type Factor = {
  id: string;
  feature: string;
  value: string;
  weight: number; // relative bar length, 0-1
  direction: "up" | "down";
  evidence: Evidence;
};

export const explanation: { base: string; output: string; factors: Factor[] } = {
  base: "CS graduate, East West University, 2025",
  output: "Data & AI analyst, ready to ship",
  factors: [
    {
      id: "ieee",
      feature: "Peer-reviewed research",
      value: "IEEE QPAIN 2025, 99.52% accuracy",
      weight: 0.92,
      direction: "up",
      evidence: { label: "Case study", href: "/work/pharma-classification" },
    },
    {
      id: "claims",
      feature: "End-to-end BI pipeline",
      value: "40,000+ healthcare claims, SQL → Power BI",
      weight: 0.84,
      direction: "up",
      evidence: { label: "Case study", href: "/work/healthcare-claims" },
    },
    {
      id: "sebpo",
      feature: "Production data work",
      value: "Cross-source verification at SEBPO",
      weight: 0.76,
      direction: "up",
      evidence: { label: "Experience", href: "/#experience" },
    },
    {
      id: "retinet",
      feature: "Computer vision",
      value: "Swin Transformer, 92%, Grad-CAM",
      weight: 0.62,
      direction: "up",
      evidence: { label: "Case study", href: "/work/retinet" },
    },
    {
      id: "musemind",
      feature: "Reports to leadership",
      value: "Research briefs for a founder & COO",
      weight: 0.48,
      direction: "up",
      evidence: { label: "Experience", href: "/#experience" },
    },
    {
      id: "years",
      feature: "Years in industry",
      value: "Under two, honestly",
      weight: 0.34,
      direction: "down",
      evidence: { label: "Timeline", href: "/#experience" },
    },
  ],
};

export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  oneLiner: string;
  image: string;
  imageAlt: string;
  stack: string[];
  results: { value: string; label: string }[];
  problem: string;
  approach: string[];
  outcome: string;
  links: Evidence[];
};

export const work: CaseStudy[] = [
  {
    slug: "pharma-classification",
    title: "Explainable drug classification",
    kind: "Research, Machine learning",
    year: "2025",
    oneLiner: "Predicting a drug's illness category from 10,000+ records, and showing why the model decided.",
    image: "/project-pharma.jpg",
    imageAlt: "Pharmaceutical classification project cover",
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP"],
    results: [
      { value: "99.52%", label: "classification accuracy" },
      { value: "10,000+", label: "drug records analysed" },
      { value: "IEEE", label: "QPAIN 2025, indexed in Xplore" },
    ],
    problem:
      "Pharmaceutical market data is large and messy, and a classifier that can't explain itself is hard to trust in a clinical setting.",
    approach: [
      "Cleaned and encoded 10,000+ drug records into a consistent feature set.",
      "Trained and tuned an XGBoost classifier to predict illness category.",
      "Used SHAP values to show which features pushed each prediction up or down.",
    ],
    outcome:
      "A 99.52% accurate classifier whose decisions can be read feature by feature. The work was co-authored and published at IEEE QPAIN 2025.",
    links: [{ label: "Google Scholar", href: "https://scholar.google.com/citations?user=QxcDcOwAAAAJ&hl=en" }],
  },
  {
    slug: "healthcare-claims",
    title: "Healthcare claims risk engine",
    kind: "Business intelligence, Fraud detection",
    year: "2025",
    oneLiner: "An SQL pipeline and Power BI dashboard that flag unusual insurance claims for audit.",
    image: "/project-healthcare.jpg",
    imageAlt: "Healthcare claims dashboard project cover",
    stack: ["SQL", "Python", "Power BI", "Excel / VBA"],
    results: [
      { value: "40,000+", label: "claims processed" },
      { value: "SQL → BI", label: "automated pipeline" },
      { value: "Open", label: "source on GitHub" },
    ],
    problem:
      "Auditors reviewing claims by hand can't see which providers, procedures or patients drive cost and risk.",
    approach: [
      "Built SQL aggregations and Python ETL to clean and join 40,000+ claims.",
      "Defined anomaly rules to surface unusual cost patterns for review.",
      "Designed a Power BI dashboard with drill-down by segment and risk driver.",
    ],
    outcome:
      "Auditors get a ranked list of claims worth checking, and the dashboard shows the reason each one was flagged.",
    links: [{ label: "GitHub repository", href: "https://github.com/Rafi-Uddin15/Healthcare-Claims-Risk-Engine" }],
  },
  {
    slug: "retinet",
    title: "RetiNet: retinal disease screening",
    kind: "Deep learning, Computer vision",
    year: "2025",
    oneLiner: "Grading diabetic retinopathy from fundus photos, with heatmaps of where the model looked.",
    image: "/project-retinet.jpg",
    imageAlt: "RetiNet retinal imaging project cover",
    stack: ["PyTorch", "Swin Transformer", "Grad-CAM", "Streamlit", "Docker"],
    results: [
      { value: "92%", label: "multi-class accuracy" },
      { value: "Grad-CAM", label: "attention heatmaps" },
      { value: "Web app", label: "Streamlit + Docker" },
    ],
    problem:
      "Diabetic retinopathy screening needs specialists, and a black-box grade is not something a clinician can act on.",
    approach: [
      "Fine-tuned a Swin Transformer on retinal fundus images for multi-class grading.",
      "Added Grad-CAM to overlay the regions that drove each grade.",
      "Packaged it as a Streamlit app in Docker so anyone can upload an image.",
    ],
    outcome: "A 92% accurate screening assistant that shows its evidence on the image itself.",
    links: [{ label: "GitHub repository", href: "https://github.com/Rafi-Uddin15/RetiNet-Pro" }],
  },
];

export type Role = {
  title: string;
  org: string;
  period: string;
  logo?: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Analyst, Data Solutions",
    org: "SEBPO",
    period: "Mar 2026 – now",
    logo: "/sebpo-logo.png",
    points: [
      "Verify identities and demographics across multiple sources for North American client accounts.",
      "Turn high-volume research into structured, decision-ready reports under daily delivery deadlines.",
      "Write due-diligence summaries in English for client-facing teams.",
    ],
  },
  {
    title: "AI Intern, Product Development",
    org: "Musemind",
    period: "2025 – Feb 2026",
    logo: "/musemind-logo.webp",
    points: [
      "Evaluated AI-powered product features with designers and engineers, from prototype to release.",
      "Presented data analysis and model evaluations to the founder and COO.",
      "Introduced AI-assisted research templates that shortened pre-design discovery.",
    ],
  },
  {
    title: "Campus Captain",
    org: "OSTAD",
    period: "Jan – May 2024",
    logo: "/ostad-logo.png",
    points: [
      "Grew engagement 30% across a 3,000+ student community.",
      "Led 10 volunteers to run technical workshops for 200+ attendees.",
    ],
  },
  {
    title: "Senior Associate",
    org: "East West University Sports Club",
    period: "2022 – 2023",
    points: [
      "Ran logistics for tournaments of 300+ and 500+ participants.",
      "Managed 10+ vendors and cut operating costs 15% through post-event analysis.",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "East West University, Dhaka",
  year: "2025",
  notes: ["Capstone thesis graded A+", "50% merit scholarship"],
};

export const credentials: Evidence[] = [
  { label: "IEEE QPAIN 2025 publication", href: "https://scholar.google.com/citations?user=QxcDcOwAAAAJ&hl=en" },
  { label: "IBM: Agentic AI & multi-agent frameworks (Coursera)", href: "https://www.coursera.org/account/accomplishments/verify/ISQCLEB9RMWF" },
  { label: "Complete Data Science & Machine Learning (Udemy)", href: "https://www.udemy.com/certificate/UC-f438059f-cc76-4e44-a938-f83dd641715b/" },
];

/** A table, because that is the natural shape of "what can you do and where's the proof". */
export const toolkit: { tool: string; use: string; proof?: Evidence }[] = [
  { tool: "SQL", use: "Joins, window functions, aggregation pipelines", proof: { label: "Claims engine", href: "/work/healthcare-claims" } },
  { tool: "Power BI / DAX", use: "Drill-down dashboards for audit and executive review", proof: { label: "Claims engine", href: "/work/healthcare-claims" } },
  { tool: "Python", use: "Pandas, NumPy, scikit-learn for cleaning, ETL and modelling", proof: { label: "Drug classification", href: "/work/pharma-classification" } },
  { tool: "XGBoost + SHAP", use: "Classifiers whose decisions can be explained", proof: { label: "Drug classification", href: "/work/pharma-classification" } },
  { tool: "PyTorch", use: "Vision transformers, Grad-CAM", proof: { label: "RetiNet", href: "/work/retinet" } },
  { tool: "Excel", use: "PivotTables, XLOOKUP, quick models and checks" },
  { tool: "Verification", use: "Cross-source identity and record checks", proof: { label: "SEBPO", href: "/#experience" } },
];
