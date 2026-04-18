import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Server, Brain, ExternalLink } from 'lucide-react';

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
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'hover:border-blue-500/40',
    iconBg: 'group-hover:bg-blue-500',
    iconText: 'group-hover:text-black',
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
    border: 'hover:border-primary/40',
    iconBg: 'group-hover:bg-primary',
    iconText: 'group-hover:text-black',
    tags: ['LangChain', 'Kubeflow', 'MLflow', 'Pinecone', 'KServe'],
    file: '/mlops-resume.pdf',
    downloadName: 'Bittu-Kumar-MLOps-Resume.pdf',
  },
];

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-2xl glass-panel rounded-[40px] md:rounded-[56px] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px] -z-0 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center border-white/10 hover:bg-white/10 transition-all duration-300 z-10"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="text-center mb-10 relative z-10">
                <p className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4">Choose Resume</p>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
                  Download <span className="italic font-light text-neutral-500">Your Pick</span>
                </h3>
                <p className="text-neutral-500 text-sm mt-3 font-medium">Select the resume that matches your hiring needs.</p>
              </div>

              {/* Resume Cards */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 relative z-10">
                {RESUMES.map((resume) => {
                  const Icon = resume.icon;
                  return (
                    <motion.a
                      key={resume.id}
                      href={resume.file}
                      download={resume.downloadName}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`group glass-panel rounded-[28px] p-6 md:p-8 border border-white/5 ${resume.border} transition-all duration-500 cursor-pointer block bg-gradient-to-br ${resume.color} shadow-xl`}
                    >
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5 ${resume.iconBg} transition-all duration-500 group-hover:rotate-[10deg] shadow-lg ring-1 ring-white/10`}>
                        <Icon size={26} className="text-primary group-hover:text-black transition-colors duration-500" />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-black mb-1 group-hover:text-primary transition-colors duration-500 leading-tight">
                        {resume.title}
                      </h4>
                      <p className="text-[10px] font-black tracking-[0.25em] uppercase text-neutral-500 mb-4">
                        {resume.subtitle}
                      </p>
                      <p className="text-neutral-400 text-sm font-medium leading-relaxed mb-5">
                        {resume.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {resume.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-black/30 rounded-full text-[9px] font-black tracking-widest uppercase border border-white/5 text-neutral-500">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-primary group-hover:gap-4 transition-all duration-500">
                        <Download size={14} />
                        Download PDF
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <p className="text-center text-[10px] text-neutral-600 font-medium mt-8 relative z-10">
                PDF downloads directly to your computer
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
