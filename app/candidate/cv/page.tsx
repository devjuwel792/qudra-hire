"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Pencil, 
  Plus, 
  Trash2, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  User 
} from "lucide-react";

export default function CandidateCVPage() {
  const [skills, setSkills] = useState([
    "Figma", "Design system", "UX research", "Prototyping", "UI Design", "Tailwind CSS", "React", "Next.js", "User Testing"
  ]);

  const [newSkill, setNewSkill] = useState("");

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">My CV & Profile</h1>
          <p className="text-sm text-slate-400 mt-1">Manage your professional information and let QudraHire AI optimize it for matches.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-xs font-bold transition-all">
            <Download className="h-4 w-4" />
            Export PDF
          </button>
          <button className="flex items-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-[#00D07C]/10 active:scale-[0.98]">
            <Sparkles className="h-4 w-4" />
            AI CV Optimizer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Main Sections */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Personal Info / About */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-[#00D07C] to-[#059669] flex items-center justify-center font-bold text-white text-2xl shadow-md flex-shrink-0">
                  LM
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Layla Al-Mansoori</h2>
                  <p className="text-sm text-[#00D07C] font-semibold mt-0.5">Senior Product Designer</p>
                  <p className="text-xs text-slate-400 mt-1">Dubai, UAE • layla.mansoori@gmail.com • +971 50 123 4567</p>
                </div>
              </div>
              <button className="p-2 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all">
                <Pencil className="h-4 w-4 text-slate-400 hover:text-white" />
              </button>
            </div>

            <div className="border-t border-[#1E293B]/40 pt-5 space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-[#00D07C]" />
                Professional Summary
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Passionate UX/UI and Product Designer with 6+ years of experience designing elegant, high-impact digital products across Fintech, Telecom, and SaaS industries in the Middle East. Expert in systemizing design workflows, cross-functional collaboration, and user-centered methodologies.
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-[#00D07C]" />
                Work Experience
              </h2>
              <button className="flex items-center gap-1 bg-[#162032] border border-[#2A3C58] hover:bg-[#1E293B] text-[#00D07C] px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all">
                <Plus className="h-3.5 w-3.5" />
                Add job
              </button>
            </div>

            <div className="divide-y divide-[#1E293B]/40">
              {/* Job 1 */}
              <div className="py-4 first:pt-0 last:pb-0 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-white">Lead Product Designer</h3>
                    <p className="text-xs text-slate-400 font-semibold mt-0.5">HALA Fintech • Dubai, UAE (Full-time)</p>
                    <p className="text-[10px] text-slate-500 font-medium">Jun 2023 – Present • 3 yrs</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"><Pencil className="h-3.5 w-3.5 text-slate-400" /></button>
                    <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"><Trash2 className="h-3.5 w-3.5 text-red-400" /></button>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 font-medium">
                  <li>Spearheaded product redesign of Hala's mobile wallets, yielding 34% rise in weekly active transactions.</li>
                  <li>Established a comprehensive design system in Figma, slicing design-to-development handoff time by 40%.</li>
                  <li>Coached 3 junior designers and led daily sprints with product managers and engineers.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="py-4 last:pb-0 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-white">Senior UX/UI Designer</h3>
                    <p className="text-xs text-slate-400 font-semibold mt-0.5">Etisalat Group • Abu Dhabi, UAE (Full-time)</p>
                    <p className="text-[10px] text-slate-500 font-medium">Jan 2020 – May 2023 • 3 yrs 5 mos</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"><Pencil className="h-3.5 w-3.5 text-slate-400" /></button>
                    <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"><Trash2 className="h-3.5 w-3.5 text-red-400" /></button>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 font-medium">
                  <li>Designed the self-checkout kiosk interface, lowering queue times at retail centers by 22%.</li>
                  <li>Conducted remote and in-person usability testing with 50+ participants to validate product designs.</li>
                  <li>Coordinated layout options with marketing stakeholders, aligning aesthetics to strict corporate standards.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-[#00D07C]" />
                Education
              </h2>
              <button className="flex items-center gap-1 bg-[#162032] border border-[#2A3C58] hover:bg-[#1E293B] text-[#00D07C] px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all">
                <Plus className="h-3.5 w-3.5" />
                Add degree
              </button>
            </div>

            <div className="divide-y divide-[#1E293B]/40">
              <div className="py-4 first:pt-0 last:pb-0 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-white">B.Sc. in Multimedia & Design</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Zayed University • Dubai, UAE</p>
                  <p className="text-[10px] text-slate-500 font-medium">Graduated 2019 • GPA 3.8/4.0</p>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"><Pencil className="h-3.5 w-3.5 text-slate-400" /></button>
                  <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"><Trash2 className="h-3.5 w-3.5 text-red-400" /></button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Skills, Match Health, Upload options */}
        <div className="space-y-6">
          
          {/* CV Score Strength Card */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">CV Match Strength</h3>
              <span className="text-xs text-[#00D07C] font-extrabold bg-[#00D07C]/10 border border-[#00D07C]/20 px-2 py-0.5 rounded-full">
                88%
              </span>
            </div>
            
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-[#00D07C] h-full rounded-full" style={{ width: "88%" }} />
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-400 font-medium">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00D07C] flex-shrink-0 mt-0.5" />
                <span>Job titles and summaries are highly relevant.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00D07C] flex-shrink-0 mt-0.5" />
                <span>Work history matches senior level specifications.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#00D07C] flex-shrink-0 text-[14px]">💡</span>
                <span>Add 2 quantified key metrics to Hala role to boost to 95%.</span>
              </p>
            </div>
          </div>

          {/* Interactive Skills Card */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Code2 className="h-4 w-4 text-[#00D07C]" />
              Core Skills
            </h3>

            <form onSubmit={addSkill} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Add skill..." 
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-1 bg-[#080C14] border border-[#1E293B]/60 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00D07C]"
              />
              <button type="submit" className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all">
                Add
              </button>
            </form>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-[#162032] border border-[#2A3C58] text-slate-300 text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                >
                  {skill}
                  <button 
                    type="button" 
                    onClick={() => removeSkill(skill)}
                    className="text-slate-500 hover:text-red-400 font-bold ml-0.5 text-[10px]"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Resume Source PDF File */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#00D07C]" />
              Source File
            </h3>
            
            <div className="p-4 rounded-xl border border-dashed border-[#1E293B] bg-[#0A0F1D]/40 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer hover:border-slate-600 transition-all">
              <div className="h-10 w-10 rounded-full bg-[#1E293B] flex items-center justify-center">
                <FileText className="h-5 w-5 text-slate-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Layla_AlMansoori_CV.pdf</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Uploaded on Mar 10, 2026 • 2.4 MB</p>
              </div>
            </div>

            <button className="w-full text-center text-xs font-bold text-[#00D07C] border border-[#00D07C]/20 bg-[#00D07C]/5 hover:bg-[#00D07C]/10 py-2.5 rounded-xl transition-all">
              Upload new version
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
