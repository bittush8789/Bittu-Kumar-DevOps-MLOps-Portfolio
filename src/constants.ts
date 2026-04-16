import { 
  Box, 
  Infinity, 
  Server, 
  Github, 
  Layers, 
  Cloud, 
  Code2, 
  Terminal,
  Database,
  Cpu,
  Workflow
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Experience', href: '#experience' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const REMOTE_SERVICES = [
  {
    title: 'Remote MLOps Infrastructure',
    description: 'Setting up end-to-end ML pipelines, model serving, and monitoring on cloud platforms (AWS/GCP) for distributed teams.',
    icon: 'Workflow',
    tags: ['Kubeflow', 'AWS SageMaker', 'MLflow'],
  },
  {
    title: 'Cloud-Native DevOps',
    description: 'Automating infrastructure with Terraform and managing Kubernetes clusters for scalable, remote-first applications.',
    icon: 'Cloud',
    tags: ['Kubernetes', 'Terraform', 'Helm'],
  },
  {
    title: 'GitOps & CI/CD Automation',
    description: 'Implementing secure, automated deployment workflows that allow teams to ship code from anywhere with confidence.',
    icon: 'Infinity',
    tags: ['ArgoCD', 'GitHub Actions', 'Jenkins'],
  },
  {
    title: 'LLMOps & RAG Integration',
    description: 'Building and deploying production-grade LLM applications with semantic search and observability.',
    icon: 'Cpu',
    tags: ['Pinecone', 'LangSmith', 'FastAPI'],
  },
];

export const CERTIFICATES = [
  {
    title: 'Certified DevOps Professional – Oracle Cloud Infrastructure',
    issuer: 'Oracle',
    date: '2024',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=34AC35A9AEA21083794F856492091CE23B71B82C30060C6E29685DD4C9E591AD',
    category: 'Cloud',
  },
  {
    title: 'MLOps Training & Certification',
    issuer: 'EXL Service India Pvt. Ltd.',
    date: '2024',
    link: '#',
    category: 'MLOps',
  },
  {
    title: 'LFS147: Introduction to AI/ML Toolkits with Kubeflow',
    issuer: 'The Linux Foundation',
    date: '2024',
    link: '#',
    category: 'MLOps',
  },
  {
    title: 'Docker – Level 1',
    issuer: 'KodeKloud Engineer',
    date: '2023',
    link: '#',
    category: 'DevOps',
  },
  {
    title: 'Kubernetes – Level 1',
    issuer: 'KodeKloud Engineer',
    date: '2023',
    link: '#',
    category: 'DevOps',
  },
];

export const BLOG_POSTS = [
  {
    title: 'Visit My Technical Blog on Hashnode',
    excerpt: 'I write about DevOps, Cloud, MLOps, and AI Engineering. Check out my latest articles on practical implementations and system architecture.',
    date: 'Latest',
    readTime: 'Various',
    link: 'https://bittublog.hashnode.dev/',
  },
];

export const SKILLS = [
  {
    category: 'AI Engineering & Core',
    items: [
      { name: 'PyTorch & TensorFlow', icon: 'Cpu' },
      { name: 'Transformers (HF)', icon: 'Layers' },
      { name: 'Scikit-Learn', icon: 'Workflow' },
      { name: 'OpenAI / Gemini / Claude', icon: 'Cpu' },
      { name: 'Milvus & Qdrant', icon: 'Database' },
      { name: 'LlamaIndex', icon: 'Workflow' },
      { name: 'Pandas & NumPy', icon: 'Database' },
    ],
  },
  {
    category: 'MLOps & LLMOps',
    items: [
      { name: 'RAG & LangChain', icon: 'Workflow' },
      { name: 'LangSmith', icon: 'Cpu' },
      { name: 'Kubeflow & MLflow', icon: 'Workflow' },
      { name: 'Pinecone & Weaviate', icon: 'Database' },
      { name: 'DVC & Airflow', icon: 'Database' },
      { name: 'Evidently AI (Monitoring)', icon: 'Workflow' },
      { name: 'Weights & Biases', icon: 'Workflow' },
    ],
  },
  {
    category: 'DevOps & Infra',
    items: [
      { name: 'Docker & Kubernetes', icon: 'Box' },
      { name: 'Terraform & Ansible', icon: 'Layers' },
      { name: 'Helm & Kustomize', icon: 'Box' },
      { name: 'AWS (EKS, S3, IAM)', icon: 'Cloud' },
      { name: 'GitHub Actions', icon: 'Github' },
      { name: 'ArgoCD (GitOps)', icon: 'Infinity' },
      { name: 'Prometheus & Grafana', icon: 'Cpu' },
    ],
  },
  {
    category: 'DevSecOps & Security',
    items: [
      { name: 'Snyk & Trivy', icon: 'ShieldCheck' },
      { name: 'SonarQube', icon: 'Code2' },
      { name: 'HashiCorp Vault', icon: 'Lock' },
      { name: 'Aqua Security', icon: 'ShieldCheck' },
      { name: 'OPA (Open Policy)', icon: 'Layers' },
      { name: 'Python & Bash', icon: 'Terminal' },
      { name: 'Linux Administration', icon: 'Terminal' },
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Churn Model Prediction',
    type: 'MLOps',
    problem: 'Developing a robust system to predict customer churn using machine learning and MLOps best practices.',
    stack: ['Python', 'Scikit-Learn', 'Docker', 'Kubernetes', 'FastAPI', 'Prometheus', 'Grafana'],
    features: [
      'End-to-end MLOps pipeline for model inference',
      'Model monitoring and performance tracking',
      'Automated deployment and scaling on Kubernetes',
    ],
    github: 'https://github.com/bittush8789/Realtime-MLOps-Project',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'MLOps Zero to Hero',
    type: 'MLOps',
    problem: 'A comprehensive guide and roadmap for mastering MLOps from scratch to production-grade systems.',
    stack: ['MLOps Roadmap', 'Best Practices', 'System Design', 'Cloud Architecture'],
    features: [
      'Step-by-step learning path for MLOps engineers',
      'Hands-on projects and implementation guides',
      'Curated resources for LLMOps and Cloud-Native AI',
    ],
    github: 'https://github.com/bittush8789/mlops-zero-to-hero-',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
  },
  {
    title: 'Medical Chatbot with LLMs & LangChain',
    type: 'MLOps',
    problem: 'Building a scalable medical chatbot with context-aware retrieval and secure cloud deployment.',
    stack: ['LLMs', 'LangChain', 'Pinecone', 'Flask', 'AWS', 'Docker'],
    features: [
      'RAG implementation for medical knowledge retrieval',
      'Vector database integration with Pinecone',
      'Scalable deployment on AWS infrastructure',
    ],
    github: 'https://github.com/bittush8789/Build-a-Complete-Medical-Chatbot-with-LLMs-LangChain-Pinecone-Flask-AWS',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'End-to-End ML Pipeline',
    type: 'MLOps',
    problem: 'Automating the entire machine learning lifecycle from data ingestion to production deployment.',
    stack: ['Python', 'MLflow', 'DVC', 'Docker', 'Kubernetes', 'GitHub Actions'],
    features: [
      'CI/CD for machine learning models',
      'Experiment tracking and model versioning',
      'Automated scaling and monitoring on Kubernetes',
    ],
    github: 'https://github.com/bittush8789/mlops-end-to-end-ml-pipeline',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'AI DevOps Copilot',
    type: 'DevOps',
    problem: 'Manual troubleshooting and infrastructure management in complex DevOps environments.',
    stack: ['Python', 'OpenAI/Gemini', 'LangChain', 'Terraform', 'Kubernetes'],
    features: [
      'AI-driven infrastructure provisioning and optimization',
      'Automated troubleshooting and log analysis',
      'Natural language interface for DevOps operations',
    ],
    github: 'https://github.com/bittush8789/AI-DevOps-Copilot',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'AI-Powered DevOps Projects',
    type: 'DevOps',
    problem: 'Integrating AI capabilities into traditional DevOps workflows for better automation.',
    stack: ['Python', 'GitHub Actions', 'Docker', 'AI/ML Models', 'AWS'],
    features: [
      'Self-healing CI/CD pipelines',
      'Predictive resource scaling and management',
      'Automated security vulnerability patching',
    ],
    github: 'https://github.com/bittush8789/AI-Powered-DevOps-projects-',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Modern Resume & Portfolio Builder',
    type: 'DevOps',
    problem: 'Need for a professional, automated way to showcase technical skills and projects.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite'],
    features: [
      'Dynamic resume generation for different roles',
      'Interactive project showcase with filtering',
      'Responsive, high-performance portfolio design',
    ],
    github: 'https://github.com/bittush8789/modern-Resume-and-Portfolio-Builder',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
  },
];

export const EXPERIENCE = [
  {
    role: 'Associate Analyst – MLOps',
    company: 'EXL Service India Pvt. Ltd. – Noida',
    period: 'April 2024 – Present',
    description: 'Specializing in building and deploying scalable ML and LLM systems.',
    achievements: [
      'Designed end-to-end MLOps workflows for model training, deployment, and monitoring.',
      'Containerized ML workloads using Docker and deployed on Kubernetes for scalable inference.',
      'Implemented KServe-based model serving and automated deployment readiness.',
      'Integrated external model artifact storage using AWS S3 and SageMaker.',
    ],
  },
  {
    role: 'Associate Analyst – LLMOps',
    company: 'EXL Service India Pvt. Ltd. – Noida',
    period: 'April 2024 – Present',
    description: 'Designing production-grade RAG-based LLM pipelines and observability systems.',
    achievements: [
      'Built production-grade RAG-based LLM pipelines for scalable AI applications.',
      'Integrated Pinecone vector database for semantic search and context-aware retrieval.',
      'Implemented LLM observability using LangSmith to monitor performance and latency.',
      'Automated CI/CD pipelines using Jenkins and GitHub Actions with GitOps (ArgoCD).',
    ],
  },
  {
    role: 'Associate Analyst – DevOps & Production Support',
    company: 'EXL Service',
    period: 'April 2024 – Present',
    description: 'Streamlining CI/CD pipelines and managing AWS cloud infrastructure.',
    achievements: [
      'Achieved 20% reduction in build/deployment time for Java-based applications.',
      'Implemented Infrastructure as Code using Terraform for AWS EKS and microservices.',
      'Resolved critical production incidents and optimized Kubernetes cost efficiency.',
      'Managed Terraform remote state and backend using S3 and DynamoDB.',
    ],
  },
];
