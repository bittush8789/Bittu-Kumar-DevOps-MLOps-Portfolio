import React from 'react';
import { X, Download, Server, Brain } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUMES = [
  {
    id: 'devops',
    title: 'DevOps Engineer',
    subtitle: 'CI/CD · Kubernetes · Terraform · AWS',
    description: 'Infrastructure automation, cloud-native deployments, container orchestration, and GitOps engineering.',
    icon: Server,
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'hover:border-blue-400/50',
    tagBg: 'bg-blue-500/10',
    tagText: 'text-blue-400',
    tags: ['Kubernetes', 'Terraform', 'Docker', 'AWS', 'GitHub Actions'],
    file: '/devops-resume.pdf',
    downloadName: 'Bittu-Kumar-DevOps-Resume.pdf',
  },
  {
    id: 'mlops',
    title: 'MLOps & LLMOps Engineer',
    subtitle: 'RAG · LangChain · Kubeflow · MLflow',
    description: 'End-to-end ML pipeline engineering, LLM deployment, RAG systems, and AI infrastructure at scale.',
    icon: Brain,
    color: 'from-primary/20 to-accent/10',
    border: 'hover:border-primary/50',
    tagBg: 'bg-primary/10',
    tagText: 'text-primary',
    tags: ['LangChain', 'Kubeflow', 'MLflow', 'Pinecone', 'KServe'],
    file: '/mlops-resume.pdf',
    downloadName: 'Bittu-Kumar-MLOps-Resume.pdf',
  },
];

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-all duration-500"
      />

      {/* Modal Container */}
      <div className="w-full max-w-4xl glass-panel rounded-[40px] md:rounded-[56px] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden z-[101]">
        {/* Background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-0 pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center border-white/10 hover:bg-white/10 transition-all duration-300 z-10 group"
        >
          <X size={20} className="group-hover:scale-110 transition-transform" />
        </button>

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <p className="text-[11px] font-black tracking-[0.5em] uppercase text-primary mb-4">Resume Repository</p>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Download <span className="italic font-light text-neutral-500">Your Expertise</span>
          </h3>
          <p className="text-neutral-400 text-base mt-4 font-medium max-w-lg mx-auto">Select the professional profile that aligns with your technical requirements.</p>
        </div>

        {/* Resume Cards */}
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          {RESUMES.map((resume) => {
            const Icon = resume.icon;
            return (
              <a
                key={resume.id}
                href={resume.file}
                download={resume.downloadName}
                className={`group glass-panel rounded-[32px] p-8 md:p-10 border border-white/10 ${resume.border} transition-all duration-500 cursor-pointer block bg-gradient-to-br ${resume.color} hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 group-hover:rotate-[8deg] shadow-xl ring-1 ring-white/10">
                  <Icon size={32} className="text-primary group-hover:text-black transition-colors duration-500" />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-black mb-2 text-white group-hover:text-primary transition-colors duration-500 leading-tight">
                  {resume.title}
                </h4>
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/70 mb-6">
                  {resume.subtitle}
                </p>
                <p className="text-neutral-300 text-base font-medium leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {resume.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {resume.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`px-4 py-1.5 ${resume.tagBg} rounded-full text-[9px] font-black tracking-[0.15em] uppercase border border-white/5 ${resume.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[11px] font-black tracking-[0.3em] uppercase text-primary group-hover:gap-5 transition-all duration-500">
                    <Download size={16} />
                    Download PDF
                  </div>
                  <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    <Download size={12} className="text-primary" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-neutral-500 font-bold tracking-widest mt-10 relative z-10 uppercase opacity-60">
          Secure PDF Transmission • {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
