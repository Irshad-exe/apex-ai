import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Database, Code, TrendingUp, Clock } from 'lucide-react';
import { homeContent, ctaContent } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {homeContent.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed">
              {homeContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 group"
              >
                <span>{homeContent.hero.cta}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all duration-200 border border-slate-700">
                {homeContent.hero.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {homeContent.problem.title}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              {homeContent.problem.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.problem.stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {homeContent.solution.title}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              {homeContent.solution.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.solution.features.map((feature, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  {index === 0 && <Database className="w-6 h-6 text-cyan-400" />}
                  {index === 1 && <TrendingUp className="w-6 h-6 text-cyan-400" />}
                  {index === 2 && <Code className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{feature.description}</p>
                <div className="text-sm text-cyan-400 font-mono">{feature.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {homeContent.roi.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {homeContent.roi.examples.map((example, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">{example.metric}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Before</div>
                    <div className="text-lg text-slate-300">{example.before}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">After</div>
                    <div className="text-lg text-cyan-400 font-semibold">{example.after}</div>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-2xl font-bold text-white mb-2">{example.savings || example.impact}</div>
                    <div className="text-sm text-slate-400">{example.timeframe}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {homeContent.timeline.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {homeContent.timeline.phases.map((phase, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="text-lg font-bold text-cyan-400 min-w-[100px]">{phase.week}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white mb-2">{phase.task}</div>
                      <div className="text-slate-400">{phase.deliverable}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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

export default Home;