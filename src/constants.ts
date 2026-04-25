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

export const CONTACT_INFO = {
  email: 'bittush9534@gmail.com',
  location: 'New Delhi, India',
  linkedin: 'https://www.linkedin.com/in/bittu-kumar-54ab13254/',
  github: 'https://github.com/bittush8789',
  instagram: 'https://www.instagram.com/bittush8789/',
  hashnode: 'https://bittublog.hashnode.dev/',
};

export const REMOTE_SERVICES = [
  {
    title: 'LLMOps Engineer',
    description: 'Architecting production-grade LLM systems with Retrieval Augmented Generation (RAG), vector databases, and real-time observability.',
    icon: 'Cpu',
    tags: ['LangChain', 'Pinecone', 'LlamaIndex'],
  },
  {
    title: 'MLOps Engineer',
    description: 'Engineering end-to-end ML lifecycles—from automated training pipelines and versioning to scalable model serving and monitoring.',
    icon: 'Workflow',
    tags: ['Kubeflow', 'MLflow', 'DVC'],
  },
  {
    title: 'AI Engineer',
    description: 'Developing intelligent agentic systems and custom AI solutions that solve complex business challenges at scale.',
    icon: 'Box',
    tags: ['Agentic AI', 'PyTorch', 'Transformers'],
  },
  {
    title: 'DevOps Engineer',
    description: 'Building resilient, automated infrastructure using IaC and Kubernetes to support high-scale distributed applications.',
    icon: 'Cloud',
    tags: ['Kubernetes', 'Terraform', 'Helm'],
  },
];

export const CERTIFICATES = [
  {
    title: 'OCI 2025 Certified DevOps Professional',
    issuer: 'Oracle University',
    date: '2025',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=34AC35A9AEA21083794F856492091CE23B71B82C30060C6E29685DD4C9E591AD',
    category: 'Cloud/DevOps',
  },
  {
    title: 'MLOps Training & Certification',
    issuer: 'EXL Service India Pvt. Ltd.',
    date: '2024',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7285340877634392066/',
    category: 'MLOps',
  },
  {
    title: 'LFS147: Introduction to AI/ML Toolkits with Kubeflow',
    issuer: 'The Linux Foundation',
    date: '2024',
    link: 'https://www.credly.com/badges/ff921ead-00e2-46c5-a45d-e733b4a08138/linked_in_profile',
    category: 'MLOps',
  },
  {
    title: 'Docker – Level 1',
    issuer: 'KodeKloud Engineer',
    date: '2023',
    link: 'https://engineer.kodekloud.com/certificate-verification/72aaa4dd-7c9c-47a4-903d-7eab4e4b76bd',
    category: 'DevOps',
  },
  {
    title: 'Kubernetes – Level 1',
    issuer: 'KodeKloud Engineer',
    date: '2023',
    link: 'https://engineer.kodekloud.com/certificate-verification/3cee0cd3-3868-4c7b-9ad5-65ef8a303e88',
    category: 'DevOps',
  },
];

export const BLOG_POSTS = [
  {
    title: 'Architecting a production-grade LLM pipeline with LangChain',
    excerpt: 'Step-by-step guide on building a RAG system that scales from proof-of-concept to production workloads using Pinecone and LangSmith.',
    date: 'March 2024',
    readTime: '12 min',
    link: 'https://bittublog.hashnode.dev/',
  },
  {
    title: 'Kubernetes Cost Optimization: Saving 40% on AWS EKS',
    excerpt: 'Practical strategies for managing resource limits, using Spot instances, and optimizing node groups for real-world CI/CD workflows.',
    date: 'February 2024',
    readTime: '8 min',
    link: 'https://bittublog.hashnode.dev/',
  },
  {
    title: 'GitOps Patterns with ArgoCD and Terraform',
    excerpt: 'How to manage your infrastructure and applications as code using the latest GitOps principles for high-velocity teams.',
    date: 'January 2024',
    readTime: '15 min',
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
      { name: 'Terraform & Pulumi', icon: 'Layers' },
      { name: 'Helm & Kustomize', icon: 'Box' },
      { name: 'AWS & Google Cloud', icon: 'Cloud' },
      { name: 'GitHub Actions', icon: 'Github' },
      { name: 'ArgoCD (GitOps)', icon: 'Infinity' },
      { name: 'Prometheus & Grafana Loki', icon: 'Cpu' },
    ],
  },
  {
    category: 'DevSecOps & Security',
    items: [
      { name: 'Snyk & Trivy', icon: 'ShieldCheck' },
      { name: 'SonarQube & Checkov', icon: 'Code2' },
      { name: 'HashiCorp Vault', icon: 'Lock' },
      { name: 'Aqua Security', icon: 'ShieldCheck' },
      { name: 'Istio Service Mesh', icon: 'Layers' },
      { name: 'FastAPI & Django', icon: 'Terminal' },
      { name: 'Linux Administration', icon: 'Terminal' },
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Credit Risk AI Underwriting',
    type: 'MLOps',
    problem: 'End-to-end MLOps pipeline for credit risk assessment with automated CI/CD, model versioning, and secure serving.',
    stack: ['Python', 'Scikit-Learn', 'Docker', 'GitHub Actions', 'AWS', 'MLflow'],
    features: [
      'Automated Risk Assessment Pipeline',
      'Model Registry & Versioning',
      'Secure Cloud Deployment',
    ],
    github: 'https://github.com/bittush8789/credit-risk-ai-underwriting/tree/cicd-mlops',
    image: '/credit-risk.png',
    isFeatured: true,
  },
  {
    title: 'MLOps NLP Production System',
    type: 'MLOps',
    problem: 'Scalable NLP production system featuring automated training pipelines, model monitoring, and high-performance inference.',
    stack: ['Transformers', 'PyTorch', 'FastAPI', 'Kubeflow', 'Prometheus', 'Grafana'],
    features: [
      'Enterprise NLP Workflows',
      'Automated Model Lifecycle',
      'Real-time Performance Tracking',
    ],
    github: 'https://github.com/bittush8789/MLOps-NLP-Production-System',
    image: '/nlp-production.png',
    isFeatured: true,
  },
  {
    title: 'Enterprise 3-Tier E-Commerce Platform',
    type: 'DevOps',
    problem: 'Production-grade 3-tier e-commerce on Kubernetes using FastAPI, Next.js, and Redis/Postgres, orchestrated with Terraform and Helm on AWS EKS.',
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'Terraform', 'AWS EKS', 'Helm'],
    features: [
      'High-availability 3-tier architecture',
      'Automated infrastructure with Terraform',
      'Helm-based application management',
      'Secure state management with Redis/Postgres',
    ],
    github: 'https://github.com/bittush8789/3-tier-ecommerce-platform',
    image: '/ecommerce-platform.png',
    isFeatured: true,
  },
  {
    title: 'CloudOps Control Center',
    type: 'DevOps',
    problem: 'Unified multi-cloud dashboard for monitoring Kubernetes clusters and automating CI/CD workflows across AWS and Azure environments.',
    stack: ['React', 'Node.js', 'Kubernetes API', 'Prometheus', 'Grafana', 'Terraform', 'GitHub Actions'],
    features: [
      'Unified Multi-Cloud Dashboard',
      'Real-time K8s Resource Monitoring',
      'Automated Pipeline Management',
      'Infrastructure Drift Detection',
    ],
    github: 'https://github.com/bittush8789/cloudops-control-center',
    image: '/cloudops-control.png',
    isFeatured: true,
  },
  {
    title: 'AWS Multi-Environment Terraform Platform',
    type: 'DevOps',
    problem: 'Modular, enterprise-ready AWS infrastructure using Terraform with multi-environment isolation and automated state management.',
    stack: ['Terraform', 'AWS (VPC/EKS/RDS)', 'Terragrunt', 'GitHub Actions', 'Checkov', 'Infracost'],
    features: [
      'Modular Multi-Environment IaC',
      'Automated Security Scanning',
      'State Locking with DynamoDB/S3',
      'Cost Optimization Reporting',
    ],
    github: 'https://github.com/bittush8789/aws-infra-terraform-platform',
    image: '/aws-terraform.png',
    isFeatured: true,
  },
  {
    title: 'Production Kubernetes Monitoring Stack',
    type: 'DevOps',
    problem: 'Comprehensive observability stack for Kubernetes featuring Prometheus, Grafana, Loki, and Tempo for deep performance insights.',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Helm', 'Kubernetes', 'Alertmanager'],
    features: [
      'Full Observability Stack (METLT)',
      'Custom SRE Dashboards',
      'Proactive Alerting System',
      'Centralized Log Management',
    ],
    github: 'https://github.com/bittush8789/Kubernetes-Monitoring',
    image: '/k8s-monitoring.png',
    isFeatured: true,
  },
  {
    title: 'Enterprise DevSecOps Security Pipeline',
    type: 'DevSecOps',
    problem: 'Hardened CI/CD pipelines integrating Trivy, SonarQube, and TruffleHog to automate security scanning and ensure compliance.',
    stack: ['GitHub Actions', 'Jenkins', 'Trivy', 'SonarQube', 'Snyk', 'TruffleHog', 'Docker'],
    features: [
      'Automated Vulnerability Scanning',
      'Static Analysis & Quality Gates',
      'Secret and License Compliance',
      'Hardened Container Image Builds',
    ],
    github: 'https://github.com/bittush8789/DevSecOps-CI-CD-Security-Pipeline',
    image: '/devsecops-pipeline.png',
    isFeatured: true,
  },
  {
    title: 'Advanced K8s Deployment Strategies',
    type: 'DevOps',
    problem: 'Production platform for Blue-Green and Canary deployments on Kubernetes using Argo Rollouts and Istio for zero-downtime releases.',
    stack: ['Kubernetes', 'Argo Rollouts', 'Istio', 'Prometheus', 'Helm', 'Kind'],
    features: [
      'Blue-Green & Canary Deployments',
      'Progressive Delivery Automation',
      'Metrics-based Automated Rollbacks',
      'Service Mesh Integration',
    ],
    github: 'https://github.com/bittush8789/deployment-strategy',
    image: '/deployment-strategy.png',
    isFeatured: true,
  },
];

export const EXPERIENCE = [
  {
    role: 'MLOps Engineer',
    company: 'EXL Service India Pvt. Ltd. – Noida',
    period: 'April 2024 – Present',
    description: 'Independently architecting and deploying scalable ML/LLM systems across distributed cloud environments with production-grade pipelines and end-to-end lifecycle management.',
    achievements: [
      'Designed and implemented end-to-end MLOps workflows covering model training, versioning, deployment, serving, scaling, and lifecycle management — fully automated for async, remote-first operations.',
      'Built and productionized ML models with clear separation between model logic, serving layer, and infrastructure, enabling independent ownership across distributed teams.',
      'Implemented custom model serving using Flask with Gunicorn (WSGI) and evaluated against KServe-managed serving, documenting scalability and operational trade-offs for cross-team reference.',
      'Containerized ML workloads using Docker to ensure reproducible builds and immutable artifacts across multiple cloud environments.',
      'Deployed ML models on Kubernetes using Deployments, Services, and Ingress for scalable, self-healing inference — zero-touch deployments via GitOps.',
      'Implemented KServe-based model serving using standardized inference APIs, enabling seamless handoffs between remote ML and platform teams.',
      'Integrated external model artifact storage using AWS S3 and HTTP-based endpoints for globally accessible model registries.',
      'Configured SageMaker Domain, User Profiles, and IAM execution roles for secure, multi-tenant ML environments supporting remote data science teams.',
      'Designed IAM-based role separation for Data Scientists, ML Engineers, and MLOps Engineers — enforcing least-privilege access across distributed teams.',
      'Automated model training, artifact generation, and deployment readiness using Kubeflow pipelines, reducing manual intervention and enabling async workflow execution.',
      'Maintained comprehensive documentation and runbooks for all ML infrastructure, ensuring smooth knowledge transfer across time zones.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'EXL Service India Pvt. Ltd. – Noida',
    period: 'April 2024 – Present',
    description: 'Independently managing cloud infrastructure, CI/CD automation, and production reliability for distributed development teams across multiple projects.',
    achievements: [
      'Streamlined CI/CD pipelines for Java-based applications using Gradle, achieving a 20% reduction in build and deployment time — enabling faster async release cycles.',
      'Containerized microservices architecture, supporting services for 2 distributed development teams with self-service deployment capabilities.',
      'Drove Kubernetes adoption across teams, contributing to 20% cost efficiency through right-sizing and spot instance strategies.',
      'Implemented Infrastructure as Code using Terraform for microservices and Kubernetes infrastructure on AWS, enabling reproducible environments across teams.',
      'Hands-on experience with AWS networking (VPC, ALB, Route53, IAM), integrating Route53 with ALB for custom domains in Kubernetes and resolving critical VPC peering issues.',
      'Introduced Git best practices and branching strategies, improving collaboration and traceability for remote-first development teams.',
      'Mentored junior DevOps engineers remotely on Kubernetes onboarding, PoCs, and CI/CD automation — conducted async knowledge-sharing sessions.',
      'Resolved critical production incidents independently, ensuring system availability and minimizing business impact with detailed post-mortem documentation.',
      'Implemented Kubernetes Ingress for multiple microservices and set up Terraform remote backend with S3/DynamoDB state locking for multi-team state management.',
      'Leveraged AI tools to accelerate automation, troubleshooting, and documentation — maintaining a self-driven, high-output remote work style.',
    ],
  },
];
