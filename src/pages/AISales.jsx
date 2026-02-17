import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Cpu, ArrowUpRight } from 'lucide-react';
import { aiSalesContent, ctaContent } from '../mock';

const AISales = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {aiSalesContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10">
              {aiSalesContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aiSalesContent.problem.title}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {aiSalesContent.problem.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {aiSalesContent.problem.stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-3">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Workflow */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {aiSalesContent.solution.title}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              {aiSalesContent.solution.description}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {aiSalesContent.solution.workflow.map((step, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  <div className="flex items-center space-x-4 mb-6 md:mb-0">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-cyan-400">{index + 1}</span>
                    </div>
                    <div className="md:hidden">
                      <h3 className="text-xl font-bold text-white">{step.step}</h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="hidden md:block text-2xl font-bold text-white mb-3">{step.step}</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">{step.description}</p>
                    <div className="inline-flex items-center space-x-2 text-sm text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-lg">
                      <ArrowUpRight className="w-4 h-4" />
                      <span>{step.output}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aiSalesContent.technical.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSalesContent.technical.components.map((component, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                  {index === 0 && <Target className="w-6 h-6 text-cyan-400" />}
                  {index === 1 && <TrendingUp className="w-6 h-6 text-cyan-400" />}
                  {index === 2 && <Cpu className="w-6 h-6 text-cyan-400" />}
                  {index === 3 && <ArrowUpRight className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{component.name}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{component.description}</p>
                <div className="text-sm text-cyan-400 font-mono">{component.tech}</div>
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
              {aiSalesContent.impact.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiSalesContent.impact.metrics.map((metric, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 text-center">
                <div className="mb-6">
                  <div className="text-sm text-slate-500 mb-2">Before</div>
                  <div className="text-3xl font-bold text-slate-400 mb-4">{metric.before}</div>
                  <ArrowUpRight className="w-6 h-6 text-cyan-400 mx-auto mb-4" />
                  <div className="text-sm text-slate-500 mb-2">After</div>
                  <div className="text-3xl font-bold text-cyan-400">{metric.after}</div>
                </div>
                <div className="pt-6 border-t border-slate-700">
                  <div className="text-lg font-semibold text-white mb-2">{metric.metric}</div>
                  <div className="text-sm text-slate-400">{metric.timeframe}</div>
                </div>
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

export default AISales;
