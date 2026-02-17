import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, MessageSquare, Zap, GitBranch } from 'lucide-react';
import { aiSupportContent, ctaContent } from '../mock';

const AISupport = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {aiSupportContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10">
              {aiSupportContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aiSupportContent.problem.title}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {aiSupportContent.problem.description}
            </p>

            <div className="space-y-4">
              {aiSupportContent.problem.painPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {aiSupportContent.solution.title}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              {aiSupportContent.solution.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSupportContent.solution.architecture.map((component, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                  {index === 0 && <FileText className="w-6 h-6 text-cyan-400" />}
                  {index === 1 && <Zap className="w-6 h-6 text-cyan-400" />}
                  {index === 2 && <MessageSquare className="w-6 h-6 text-cyan-400" />}
                  {index === 3 && <GitBranch className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{component.component}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{component.description}</p>
                <div className="text-sm text-cyan-400 font-mono">{component.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aiSupportContent.integration.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiSupportContent.integration.platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className="text-lg font-bold text-white mb-3">{platform.name}</div>
                <p className="text-sm text-slate-400">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aiSupportContent.impact.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aiSupportContent.impact.metrics.map((metric, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <div className="text-2xl font-bold text-white">{metric.metric}</div>
                </div>
                <p className="text-slate-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {ctaContent.main.title}
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            {ctaContent.main.description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-200 group"
          >
            <span>{ctaContent.main.buttonText}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <p className="text-sm text-slate-500 mt-6">{ctaContent.main.subtext}</p>
        </div>
      </section>
    </div>
  );
};

export default AISupport;
