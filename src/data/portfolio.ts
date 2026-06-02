import type { Project, Skill, Experience, Certification } from '../types';

export const projects: Project[] = [
  {
    id: 'placement-engine',
    title: 'Placement Engine',
    subtitle: 'AI-Powered Job Matching & Placement Intelligence System',
    tech: ['Python', 'Machine Learning', 'NLP', 'FastAPI', 'React', 'MongoDB'],
    overview:
      'An intelligent placement prediction and job-matching engine that leverages NLP and ML to align candidate profiles with role requirements, providing ranked recommendations and gap analysis.',
    problem:
      'Traditional placement processes rely on keyword matching and manual screening, failing to capture semantic skill alignment, growth trajectory, and role-fit nuance — resulting in mismatches and inefficiency.',
    solution:
      'Built an end-to-end ML pipeline that processes resumes and job descriptions through NLP models, extracts semantic embeddings, computes similarity scores, and surfaces ranked matches with explainable gap analysis.',
    architecture:
      'Resume Parser → Skill Extractor (spaCy/BERT) → Embedding Engine → Similarity Ranker → Gap Analyzer → FastAPI REST Layer → React Dashboard',
    impact: [
      'Reduced manual resume screening time by ~60%',
      'Semantic matching outperforms keyword matching by 3× precision',
      'Gap analysis provides actionable upskilling pathways for candidates',
    ],
    learnings: [
      'Transformer-based embeddings dramatically improve semantic alignment',
      'Explainability (SHAP scores) is critical for recruiter trust',
      'Data quality in job descriptions is the biggest bottleneck',
    ],
    future: [
      'Real-time market trend integration for dynamic skill weighting',
      'Candidate trajectory modeling using historical placement data',
      'LLM-powered interview question generation from skill gaps',
    ],
    status: 'In Progress',
    year: '2025',
  },
  {
    id: 'fake-news-detector',
    title: 'Fake News Detector',
    subtitle: 'ML-powered real-time news classification web application',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'JavaScript', 'Vercel'],
    overview:
      'A production-deployed web application that classifies news articles as real or fake using machine learning models, providing real-time predictions through an integrated frontend.',
    problem:
      'Misinformation spreads faster than corrections. Existing tools are either too slow, behind paywalls, or lack accessible interfaces for everyday users to verify news authenticity.',
    solution:
      'Trained an ML classifier on labeled news datasets using TF-IDF vectorization and Passive Aggressive Classifier. Wrapped in a clean web interface deployed on Vercel with a Python ML backend.',
    architecture:
      'News Input → Text Preprocessing → TF-IDF Vectorizer → PAC Classifier → Probability Score → UI Display',
    impact: [
      'Deployed with 5 production deployments on Vercel',
      'Real-time predictions with sub-second response',
      'Integrated static frontend with Python ML backend seamlessly',
    ],
    learnings: [
      'TF-IDF combined with PAC achieves strong baseline accuracy on news classification',
      'Serverless deployment requires careful model serialization strategy',
      'Frontend-backend decoupling simplifies iteration',
    ],
    future: [
      'Upgrade to transformer-based model (RoBERTa) for deeper semantic understanding',
      'Add source credibility scoring alongside content analysis',
      'Browser extension for in-context fact checking',
    ],
    github: 'https://github.com',
    live: 'https://vercel.app',
    status: 'Completed',
    year: '2024',
  },
  {
    id: 'smart-surveillance',
    title: 'Smart Surveillance System',
    subtitle: 'AI + EI based real-time behavioral CCTV analysis',
    tech: ['Python', 'OpenCV', 'YOLOv8', 'MTCNN', 'FastAPI'],
    overview:
      'A real-time intelligent surveillance system that combines computer vision and emotional intelligence to detect suspicious behavioral patterns from CCTV feeds, enabling automated alert generation.',
    problem:
      'Traditional CCTV systems require constant human monitoring, leading to fatigue, missed incidents, and delayed responses. There is no automated layer for behavioral anomaly detection.',
    solution:
      'Integrated YOLOv8 for object and action detection with MTCNN for face detection and emotion classification. FastAPI backend triggers automated alerts when suspicious patterns exceed confidence thresholds.',
    architecture:
      'CCTV Feed → Frame Sampler → YOLOv8 (Object/Action Detection) → MTCNN (Face + Emotion) → Behavioral Scorer → Alert Engine → FastAPI Notification Layer',
    impact: [
      '~85% emotion classification accuracy in real-world conditions',
      'Multi-face tracking supports up to 10 simultaneous subjects per frame',
      'Automated alerts reduced manual review time by 40%',
    ],
    learnings: [
      'YOLOv8 offers excellent speed-accuracy tradeoff for real-time applications',
      'Lighting variance is the single largest challenge in emotion classification',
      'Frame subsampling strategy critically impacts both accuracy and performance',
    ],
    future: [
      'Integrate audio analysis for multi-modal threat assessment',
      'Edge deployment on NVIDIA Jetson for on-device processing',
      'Federated learning for privacy-preserving model updates',
    ],
    status: 'In Progress',
    year: '2024',
  },
  {
    id: 'icu-monitoring',
    title: 'ICU Monitoring & Error Detection',
    subtitle: 'ML-based patient vitals anomaly detection with AWS deployment',
    tech: ['Python', 'ML', 'AWS S3', 'AWS EC2', 'Streamlit', 'Pandas'],
    overview:
      'A clinical decision support system that applies machine learning to ICU patient vitals streams, detecting anomalies and medical errors in real-time with an interactive monitoring dashboard.',
    problem:
      'ICU nurses monitor dozens of patients simultaneously. Critical vital sign deviations can be missed during high-load periods, and manual error detection in logged vitals is retrospective and slow.',
    solution:
      'Built an Isolation Forest-based anomaly detection pipeline on multi-variate vitals data. Deployed on AWS (S3 for data, EC2 for compute) with a Streamlit dashboard for multi-patient monitoring and alert escalation.',
    architecture:
      'Patient Vitals Stream → Data Ingestion (S3) → Preprocessing Pipeline → Isolation Forest Model → Anomaly Scorer → Alert Engine → Streamlit Dashboard (EC2)',
    impact: [
      '80%+ precision on anomaly detection in patient vitals',
      'Real-time alerting for critical vital thresholds',
      'Multi-patient dashboard with alert escalation tiers',
    ],
    learnings: [
      'Isolation Forest is highly effective for healthcare anomaly detection with limited labeled data',
      'AWS EC2 + S3 separation provides scalable and cost-efficient architecture',
      'Clinical domain knowledge is essential for meaningful threshold calibration',
    ],
    future: [
      'LSTM-based time-series modeling for predictive deterioration alerts',
      'HIPAA-compliant data pipeline with end-to-end encryption',
      'Integration with EHR systems via HL7 FHIR API',
    ],
    status: 'In Progress',
    year: '2024',
  },
  {
    id: 'biotech-workflow',
    title: 'Cloud Biotechnology Workflow Automation',
    subtitle: 'AWS-based automated biotech data processing pipeline',
    tech: ['Python', 'AWS Lambda', 'AWS S3', 'Streamlit', 'Pandas'],
    overview:
      'A cloud-native automation platform for biotechnology laboratory workflows, processing large batches of experimental data on AWS with automated logging and report generation.',
    problem:
      'Biotech labs handle hundreds of experimental records manually — prone to transcription errors, time-consuming, and lacking audit trails. Scaling batch processing is impractical without cloud infrastructure.',
    solution:
      'Architected an AWS pipeline where S3 stores raw experimental data, Lambda functions execute transformation and validation logic, and Streamlit provides a browser-based interface for results review and report export.',
    architecture:
      'Lab Data Upload → S3 Bucket → Lambda Trigger → Data Validation & Transform → Results Storage (S3) → Streamlit Dashboard → PDF Report Generator',
    impact: [
      'Processes 500+ records per batch automatically',
      'Reduced manual data entry effort by ~50%',
      'Automated logging ensures complete audit trail',
    ],
    learnings: [
      'Lambda cold-start latency requires careful warm-up strategy for large payloads',
      'Domain-specific data validation rules are the most time-intensive component',
      'Streamlit accelerates internal tool development dramatically',
    ],
    future: [
      'LIMS (Laboratory Information Management System) integration',
      'Automated statistical analysis and visualization layer',
      'Multi-tenant support for shared lab infrastructure',
    ],
    github: 'https://github.com',
    live: 'https://vercel.app',
    status: 'Completed',
    year: '2024',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    subtitle: 'Fully responsive portfolio with modern UI/UX',
    tech: ['HTML', 'CSS', 'JavaScript'],
    overview:
      'A meticulously crafted personal portfolio website showcasing projects and skills with modern UI/UX design principles and full cross-device responsiveness.',
    problem:
      "Standard portfolio templates are generic and fail to communicate a developer's unique identity, technical depth, or design sensibility.",
    solution:
      'Built a fully custom portfolio from scratch using semantic HTML, modern CSS (Grid, Flexbox, animations), and vanilla JavaScript — achieving 100% mobile responsiveness without framework overhead.',
    architecture: 'Static HTML/CSS/JS → GitHub Pages / Vercel → CDN Distribution → Custom Domain',
    impact: [
      '100% mobile responsiveness across all device sizes',
      'Lighthouse score: 98 Performance, 100 Accessibility',
      'Sub-1s load time with no framework overhead',
    ],
    learnings: [
      'CSS custom properties enable powerful theming without preprocessors',
      'Progressive enhancement ensures universal compatibility',
      'Performance is a design decision, not an afterthought',
    ],
    future: [
      'Migrate to this interactive desktop OS version',
      'Add project case study videos and live demos',
      'Implement i18n for global audience',
    ],
    github: 'https://github.com',
    live: 'https://vercel.app',
    status: 'Completed',
    year: '2024',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'C/C++', level: 70 },
      { name: 'SQL', level: 75 },
      { name: 'HTML/CSS', level: 85 },
    ],
  },
  {
    category: 'ML & AI',
    items: [
      { name: 'Scikit-learn', level: 85 },
      { name: 'YOLOv8', level: 80 },
      { name: 'OpenCV', level: 82 },
      { name: 'MTCNN', level: 75 },
      { name: 'NumPy / Pandas', level: 88 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { name: 'FastAPI', level: 80 },
      { name: 'Streamlit', level: 85 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'REST APIs', level: 82 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    category: 'Cloud & Databases',
    items: [
      { name: 'AWS (S3, EC2, Lambda)', level: 75 },
      { name: 'MongoDB', level: 72 },
      { name: 'MySQL', level: 75 },
    ],
  },
];

export const experience: Experience[] = [
  {
    title: 'B.Tech Biotechnology — Minor in AI & ML',
    org: 'Jaypee Institute of Information Technology',
    period: '2024 – 2028',
    location: 'Noida, India',
    type: 'education',
    bullets: [
      'Pursuing dual-track curriculum combining biotechnology foundations with AI/ML specialization',
      'Active focus on applying ML to healthcare, surveillance, and life sciences domains',
      'Minor coursework covers machine learning theory, deep learning architectures, and data engineering',
    ],
  },
  {
    title: 'BS in Data Science and Applications',
    org: 'Indian Institute of Technology, Madras',
    period: '2024 – 2028',
    location: 'Chennai, India',
    type: 'education',
    bullets: [
      'Rigorous program covering statistics, linear algebra, ML algorithms, and data systems',
      'Coursework in Python for DS, database management, and applied ML projects',
      'IIT Madras online degree program — one of India\'s most competitive data science programs',
    ],
  },
  {
    title: 'Volunteer — IEEE Student Branch',
    org: 'IEEE Student Branch JIIT Noida',
    period: '2025 – 2026',
    location: 'Noida, India',
    type: 'position',
    bullets: [
      'Organized technical events and workshops; managed logistics to drive student participation',
      'Coordinated with faculty and professionals to facilitate knowledge-sharing sessions',
      'Promoted IEEE membership drives and contributed to growing the student branch community',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Machine Learning A-Z: AI, Python & R',
    provider: 'Kirill Eremenko, Hadelin de Ponteves',
    year: '2025',
    platform: 'Udemy',
  },
  {
    title: 'AWS Certified Cloud Practitioner: Complete Course',
    provider: 'Stephane Maarek',
    year: '2025',
    platform: 'Udemy',
  },
  {
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    provider: 'Dr. Angela Yu',
    year: '2025',
    platform: 'Udemy',
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    provider: 'Abdul Bari',
    year: '2025',
    platform: 'Udemy',
  },
  {
    title: 'SQL-MySQL Complete Master Bootcamp: Beginner to Expert',
    provider: 'Donatus Obomighie',
    year: '2025',
    platform: 'Udemy',
  },
];

export const researchTopics = [
  {
    title: 'Computer Vision for Healthcare',
    description:
      'Applying convolutional neural networks and transformer architectures to medical imaging and patient monitoring systems. Investigating real-time anomaly detection for clinical decision support.',
    status: 'active',
    tags: ['CV', 'Healthcare AI', 'Anomaly Detection'],
  },
  {
    title: 'Behavioral AI in Surveillance',
    description:
      'Studying multi-modal behavioral pattern recognition combining spatial reasoning (pose estimation), temporal dynamics (action sequencing), and affective computing (emotion recognition) for intelligent surveillance.',
    status: 'active',
    tags: ['Behavioral AI', 'Affective Computing', 'Temporal Modeling'],
  },
  {
    title: 'Biotechnology + ML Intersections',
    description:
      'Exploring how machine learning can accelerate biotechnology workflows — from automated experimental data analysis to predictive modeling in genomics and proteomics pipelines.',
    status: 'exploring',
    tags: ['Bioinformatics', 'AutoML', 'Cloud Science'],
  },
  {
    title: 'NLP for Information Credibility',
    description:
      'Investigating transformer-based approaches to misinformation detection, semantic source verification, and temporal credibility decay in news and social media content.',
    status: 'completed',
    tags: ['NLP', 'Transformers', 'Misinformation'],
  },
];
