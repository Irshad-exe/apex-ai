import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Server, Database, Cloud } from 'lucide-react';
import { aboutContent, ctaContent } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {aboutContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10">
              {aboutContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aboutContent.philosophy.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.philosophy.principles.map((principle, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-white">{principle.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aboutContent.expertise.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.expertise.areas.map((area, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                  {index === 0 && <Code className="w-6 h-6 text-cyan-400" />}
                  {index === 1 && <Server className="w-6 h-6 text-cyan-400" />}
                  {index === 2 && <Database className="w-6 h-6 text-cyan-400" />}
                  {index === 3 && <Cloud className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-slate-400 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {aboutContent.process.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {aboutContent.process.steps.map((step, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  <div className="flex items-center space-x-4 mb-6 md:mb-0">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-cyan-400">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{step.phase}</h3>
                      <div className="text-sm text-cyan-400 mt-1">{step.duration}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Client Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              {aboutContent.ideal.title}
            </h2>
            <p className="text-xl text-slate-400 mb-10 text-center leading-relaxed">
              {aboutContent.ideal.description}
            </p>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <div className="space-y-4">
                {aboutContent.ideal.criteria.map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
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

export default About;
