<div align="center">

# 🚀 Bittu Kumar — DevOps & MLOps Portfolio

[![CI/CD Pipeline](https://github.com/bittush8789/Bittu-Kumar-DevOps-MLOps-Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/bittush8789/Bittu-Kumar-DevOps-MLOps-Portfolio/actions)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-EKS-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![ArgoCD](https://img.shields.io/badge/ArgoCD-GitOps-EF7B4D?logo=argo&logoColor=white)](https://argoproj.github.io/cd/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

**A production-grade, "Liquid Glass" portfolio showcasing 2+ years of DevOps, MLOps, and LLMOps engineering experience.**

[📧 Contact](mailto:bittush9534@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/bittu-kumar-54ab13254/) · [🐙 GitHub](https://github.com/bittush8789)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Application Architecture](#-application-architecture)
- [DevOps Architecture](#-devops--devsecops--gitops-architecture)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Local Development](#-local-development)
- [Deployment](#-deployment)
- [Monitoring](#-monitoring)
- [Certifications](#-certifications)
- [Contact](#-contact)

---

## 👨‍💻 About

Hi, I'm **Bittu Kumar** — a DevOps & MLOps Engineer with **2+ years of experience** at **EXL Service India Pvt. Ltd.**

I specialize in:
- 🏗️ **Cloud-Native DevOps** — Kubernetes, Terraform, Helm, AWS
- 🤖 **MLOps & LLMOps** — Kubeflow, MLflow, DVC, LangChain, Pinecone
- 🔒 **DevSecOps** — Trivy, SonarQube, SAST/container scanning
- 🔄 **GitOps** — ArgoCD, automated self-healing deployments
- 📊 **Observability** — Prometheus, Grafana, centralized logging

---

## 🏛️ Application Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND ARCHITECTURE                        │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   React 18 + Vite 6                     │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐             │   │
│  │  │  React   │  │  Framer  │  │ Tailwind │             │   │
│  │  │  .lazy() │  │  Motion  │  │   CSS    │             │   │
│  │  │ Suspense │  │Animations│  │ Styling  │             │   │
│  │  └──────────┘  └──────────┘  └──────────┘             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                  LAZY-LOADED SECTIONS                   │   │
│  │  Hero → About → Skills → Projects → Certificates       │   │
│  │  Experience → Blog → Services → Contact → Footer       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               PERFORMANCE OPTIMIZATIONS                 │   │
│  │  Code Splitting (React.lazy)  |  useMemo Filtering     │   │
│  │  rAF Mouse Throttling         |  Static Variants        │   │
│  │  Image Lazy Loading           |  Bundle Chunk Split     │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                           │
              Nginx (Security Headers + Gzip +
               Asset Caching + SPA Routing)
                           │
              Docker Container (Alpine)
```

### Component Map

```
src/
├── App.tsx                    Root + React.lazy() code splitting
├── constants.ts               All static data (projects, skills, etc.)
├── components/
│   ├── Hero.tsx               Landing section + Resume Modal trigger
│   ├── ResumeModal.tsx        Dual resume download (DevOps + MLOps PDF)
│   ├── About.tsx              Bio + quick stats
│   ├── Skills.tsx             Tech stack grid (memoized SkillItem)
│   ├── Projects.tsx           Filterable project cards (useMemo)
│   ├── Services.tsx           LLMOps / MLOps / DevOps offerings
│   ├── Certificates.tsx       Certifications display
│   ├── Experience.tsx         Work history at EXL Service
│   ├── Blog.tsx               Technical articles (Hashnode)
│   ├── Contact.tsx            Web3Forms contact (session persistence)
│   ├── Navbar.tsx             Responsive nav + theme toggle
│   └── Footer.tsx             Links + email
└── index.css                  Liquid design system (clamp() variables)
```

---

## 🏗️ DevOps + DevSecOps + GitOps Architecture

```
┌────────────────────────────────────────────────────────────┐
│                        DEVELOPER                           │
│                   git push origin main                     │
└───────────────────────────┬────────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────────┐
│                  GITHUB ACTIONS (CI)                       │
│                                                            │
│  [JOB 1] Security Scan                                     │
│    Trivy FS Scan (CVE)  +  Trivy Secret Scan               │
│            │                                               │
│            ▼                                               │
│  [JOB 2] Build Application                                 │
│    npm ci  →  npm run build  →  Upload dist artifact       │
│            │                                               │
│            ▼                                               │
│  [JOB 3] Docker Build + Push                               │
│    docker build  →  Trivy Image Scan  →  ECR push          │
│            │                                               │
│            ▼                                               │
│  [JOB 4] GitOps Manifest Update                            │
│    Update image tag in k8s/deployment.yaml                 │
│    git commit + git push to main                           │
└───────────────────────────┬────────────────────────────────┘
                            │  (Git push triggers ArgoCD)
                            ▼
┌────────────────────────────────────────────────────────────┐
│                   ARGOCD (GitOps CD)                       │
│                                                            │
│  Polls GitHub every 3 min for changes in k8s/              │
│  Detects: deployment.yaml image tag updated                │
│  Auto-Sync → Rolling Deploy → Self-Heal → Prune            │
└───────────────────────────┬────────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────────┐
│              AWS EKS CLUSTER (ap-south-1)                  │
│                                                            │
│   Node 1                    Node 2                         │
│  [Pod: portfolio:80]      [Pod: portfolio:80]              │
│          │                       │                         │
│          └──────────┬────────────┘                         │
│                     │                                      │
│           AWS LoadBalancer (Public DNS)                    │
│                     │                                      │
│          HPA: auto-scale 2-5 replicas                      │
│          (CPU > 70% or Memory > 80%)                       │
└───────────────────────────┬────────────────────────────────┘
                            │  (metrics scrape)
                            ▼
┌────────────────────────────────────────────────────────────┐
│            MONITORING (namespace: monitoring)              │
│                                                            │
│   Prometheus                    Grafana                    │
│   - Pod CPU / Memory     →      - K8s Cluster Dashboard    │
│   - Node metrics                - Resource Usage           │
│   - HTTP request rate           - Alerts (CPU > 80%)       │
└────────────────────────────────────────────────────────────┘
```

### Security Scanning Flow (DevSecOps)

```
Source Code
    │
    ├── Trivy FS Scan ─────────── CVE Report (HIGH/CRITICAL)
    │
    ├── Trivy Secret Scan ──────── Hardcoded credentials check
    │
    └── Docker Image Scan ──────── Container CVE analysis
              │
              ├── [PASS] ──────── Push to ECR → Deploy
              └── [FAIL] ──────── Block pipeline + notify
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 6 | Build tool + bundler |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | Icons |

### DevOps & Infrastructure
| Tool | Purpose |
|---|---|
| Docker (multi-stage) | Containerization |
| Nginx Alpine | Production web server |
| AWS EKS | Managed Kubernetes |
| AWS ECR | Container image registry |
| Helm | Kubernetes package manager |

### DevSecOps
| Tool | Purpose |
|---|---|
| Trivy | CVE + secret scanning |
| SonarQube | Code quality analysis |
| GitHub Actions | CI/CD automation |

### GitOps & CD
| Tool | Purpose |
|---|---|
| ArgoCD | GitOps controller |
| Kubernetes HPA | Auto-scaling (2-5 pods) |
| Rolling Updates | Zero-downtime deployments |

### Monitoring
| Tool | Purpose |
|---|---|
| Prometheus | Metrics collection |
| Grafana | Visualization + alerting |

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 Liquid Glass Design | Glassmorphism, micro-animations, premium UX |
| 📱 Fully Responsive | Mobile-first with fluid `clamp()` typography |
| ⚡ Performance Optimized | Code splitting, lazy loading, rAF throttling |
| 📄 Dual Resume Download | DevOps & MLOps PDF resumes with modal picker |
| 📬 Contact Form | Web3Forms serverless email + session persistence |
| 🌙 Theme Toggle | Dark/Light mode with persistence |
| 🔒 DevSecOps Pipeline | Trivy-scanned on every git push |
| 🔁 GitOps Deployment | ArgoCD auto-syncs on manifest change |
| 📊 Production Monitoring | Prometheus + Grafana dashboards |
| 🏗️ HPA Auto-scaling | Scales 2–5 pods based on CPU/Memory |

---

## 📁 Project Structure

```
Bittu-Kumar-DevOps-MLOps-Portfolio/
├── src/                        React application source
│   ├── App.tsx                 Root + code splitting
│   ├── constants.ts            All data (projects, skills, etc.)
│   ├── index.css               Liquid design system
│   └── components/             All UI components
├── public/                     Static assets
│   ├── devops-resume.pdf       DevOps Engineer resume
│   ├── mlops-resume.pdf        MLOps Engineer resume
│   └── *.png / *.jpg           Project images
├── k8s/                        Kubernetes manifests
│   ├── deployment.yaml         Deployment (replicas, probes)
│   ├── service.yaml            LoadBalancer service
│   └── hpa.yaml                Auto-scaling (2-5 pods)
├── argocd/                     GitOps configuration
│   └── application.yaml        ArgoCD Application manifest
├── .github/workflows/          CI/CD pipelines
│   └── deploy.yml              4-job pipeline
├── Dockerfile                  Multi-stage Docker build
├── nginx.conf                  Nginx (SPA + security + gzip)
├── vite.config.ts              Optimized build config
└── .env.example                Environment variable template
```

---

## 🖥️ Local Development

### Prerequisites
```bash
node --version   # >= 20
npm --version    # >= 9
docker --version # Optional, for container testing
```

### Setup
```bash
# 1. Clone
git clone https://github.com/bittush8789/Bittu-Kumar-DevOps-MLOps-Portfolio.git
cd Bittu-Kumar-DevOps-MLOps-Portfolio

# 2. Install
npm install

# 3. Configure .env
cp .env.example .env
# Add VITE_WEB3FORMS_ACCESS_KEY to .env

# 4. Start dev server
npm run dev
# → http://localhost:3000
```

### Docker (Local)
```bash
docker build -t bittu-portfolio:latest .
docker run -d -p 8080:80 bittu-portfolio:latest
# → http://localhost:8080
```

---

## 🚀 Deployment

### Required GitHub Secrets
```
Settings → Secrets → Actions → New repository secret

AWS_ACCESS_KEY_ID           AWS IAM Access Key
AWS_SECRET_ACCESS_KEY       AWS IAM Secret Key
VITE_WEB3FORMS_ACCESS_KEY   Web3Forms API key
GITOPS_PAT                  GitHub Personal Access Token (repo scope)
```

### Pipeline Flow
```
Push to main
  [1] Trivy security scan
  [2] npm build
  [3] Docker build + ECR push
  [4] Update k8s/deployment.yaml → git push
          ArgoCD detects change → auto-deploys to EKS
```

### Manual Deploy
```bash
kubectl apply -f k8s/
kubectl rollout status deployment/bittu-portfolio
kubectl get svc bittu-portfolio-service
```

---

## 📊 Monitoring

```bash
# Install Prometheus + Grafana
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus -n monitoring --create-namespace
helm install grafana grafana/grafana -n monitoring --set service.type=LoadBalancer

# Access
kubectl port-forward -n monitoring svc/prometheus-server 9090:80
kubectl port-forward -n monitoring svc/grafana 3000:80
# Grafana: admin / (get from secret)
# Import dashboard ID: 3119
```

---

## 📜 Certifications

| Certification | Issuer | Year |
|---|---|---|
| OCI 2025 Certified DevOps Professional | Oracle University | 2025 |
| MLOps Training & Certification | EXL Service India | 2024 |
| LFS147: AI/ML Toolkits with Kubeflow | The Linux Foundation | 2024 |
| Docker Level 1 | KodeKloud Engineer | 2023 |
| Kubernetes Level 1 | KodeKloud Engineer | 2023 |

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | bittush9534@gmail.com |
| LinkedIn | linkedin.com/in/bittu-kumar-54ab13254 |
| GitHub | github.com/bittush8789 |
| Blog | bittublog.hashnode.dev |

---

<div align="center">

**Built with ❤️ by Bittu Kumar**
*DevOps + MLOps Engineer | EXL Service India | New Delhi 🇮🇳*

</div>
