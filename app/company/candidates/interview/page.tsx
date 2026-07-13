"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Trash2,
  Plus,
  Send,
  Eye
} from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

export default function SetAIInterviewPage() {
  const [roleContext, setRoleContext] = useState("Senior Product Designer");
  const [duration, setDuration] = useState("20 min");
  const [selectedPack, setSelectedPack] = useState("Product design • Senior");

  const [questions, setQuestions] = useState([
    "Walk me through a recent project end-to-end.",
    "Tell me about a time you handled a difficult stakeholder.",
    "How do you measure success in your role?",
    "Describe your experience working in the GCC market.",
    "Why this role, and why now?"
  ]);
  const [newQuestion, setNewQuestion] = useState("");

  const [allowVoice, setAllowVoice] = useState(true);
  const [notifyComplete, setNotifyComplete] = useState(true);

  const packs = [
    { name: "Product design • Senior", qCount: 6, time: "20 min" },
    { name: "Full-stack engineer • Mid", qCount: 8, time: "30 min" },
    { name: "Behavioural • Leadership", qCount: 5, time: "15 min" },
    { name: "Culture fit • GCC", qCount: 4, time: "12 min" }
  ];

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion.trim()]);
      setNewQuestion("");
    }
  };

  const handleRemoveQuestion = (idx: number) => {
    setQuestions(questions.filter((_, i) => i !== idx));
  };

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
      {/* Top Navigation Back */}
      <div>
        <Link
          href="/company/candidates"
          className="inline-flex items-center gap-2 font-semibold text-on-surface-muted hover:text-on-surface transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-surface-item border border-surface flex items-center justify-center font-extrabold text-on-surface text-lg shadow-md flex-shrink-0">
          LM
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-on-surface tracking-tight">AI interview for Majid Al-Mansoori</h1>
          <p className=" text-on-surface-muted font-semibold mt-1">Senior Product Designer • Dubai</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Configuration Card (2/3 width) */}
        <div className="lg:col-span-2 bg-surface-card border border-surface rounded-2xl p-6 space-y-6">

          {/* Role Context & Duration inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Role context</label>
              <input
                type="text"
                value={roleContext}
                onChange={(e) => setRoleContext(e.target.value)}
                className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Preloaded Question Packs Grid */}
          <div className="space-y-3">
            <label className=" font-bold text-on-surface-muted uppercase tracking-wider block">Preloaded question packs</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packs.map((pack) => {
                const isSelected = selectedPack === pack.name;
                return (
                  <div
                    key={pack.name}
                    onClick={() => setSelectedPack(pack.name)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${isSelected
                      ? "bg-surface-item border-[#4BC957]/50 shadow-[0_0_15px_-3px_rgba(0,208,124,0.15)]"
                      : "bg-surface-deep border-surface hover:border-inner"
                      }`}
                  >
                    <p className="text-sm font-bold text-on-surface">{pack.name}</p>
                    <p className="text-[13px] text-on-surface-subtle font-semibold mt-1">{pack.qCount} questions • {pack.time}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Questions list with index badges */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className=" font-bold text-on-surface-muted uppercase tracking-wider">Questions ({questions.length})</span>
              <button className=" text-[#4BC957] font-bold flex items-center gap-1 bg-[#4BC957]/10 border border-[#4BC957]/20 px-3 py-1.5 rounded-lg hover:bg-[#4BC957]/20 transition-all">
                <Sparkles className="h-3.5 w-3.5" />
                AI suggest
              </button>
            </div>

            <div className="space-y-2.5">
              {questions.map((q, idx) => (
                <div key={idx} className="flex items-center justify-between bg-surface-deep border border-surface rounded-xl p-3.5 gap-4 group">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded-full bg-[#4BC957]/10 border border-[#4BC957]/20 text-[#4BC957] flex items-center justify-center font-bold text-[13px] flex-shrink-0">
                      {idx + 1}
                    </span>
                    <p className=" font-medium text-on-surface">{q}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveQuestion(idx)}
                    className="p-1 rounded text-on-surface-subtle hover:text-red-500 transition-all flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add custom question input */}
            <form onSubmit={handleAddQuestion} className="flex gap-2">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Add custom question..."
                className="flex-1 bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-surface-item border border-surface text-on-surface-muted hover:text-on-surface p-3 rounded-xl hover:border-inner transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Settings Switches */}
          <div className="border-t border-surface pt-6 space-y-4">
            <h3 className=" font-bold text-on-surface-muted uppercase tracking-wider">Settings</h3>
            <div className="flex items-center justify-between">
              <span className=" font-semibold text-on-surface-muted">Allow voice answers</span>
              <Switch checked={allowVoice} onCheckedChange={setAllowVoice} className="data-checked:bg-[#4BC957]!" />
            </div>
            <div className="flex items-center justify-between">
              <span className=" font-semibold text-on-surface-muted">Notify me when complete</span>
              <Switch checked={notifyComplete} onCheckedChange={setNotifyComplete} className="data-checked:bg-[#4BC957]!" />
            </div>
          </div>

        </div>

        {/* Sidebar Preview Details (1/3 width) */}
        <div className="space-y-4">
          <div className="bg-surface-card border border-surface rounded-2xl p-6 space-y-5">
            <span className="text-[13px] text-[#4BC957] bg-[#4BC957]/10 border border-[#4BC957]/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-bold uppercase tracking-wider w-fit">
              <Eye className="h-3.5 w-3.5" />
              Preview
            </span>

            <p className=" text-on-surface-muted leading-relaxed font-medium">
              CareerSprint AI will conduct a 5-question interview, transcribe voice, and score answers on clarity, depth and rubric fit.
            </p>

            <div className="space-y-3.5  font-semibold pt-2">
              <div className="flex justify-between items-center text-on-surface-muted">
                <span>Questions</span>
                <span className="text-on-surface">{questions.length}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-muted">
                <span>Estimated duration</span>
                <span className="text-on-surface">{duration}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-muted">
                <span>Cost</span>
                <span className="text-on-surface">5 credits</span>
              </div>
            </div>

            <Link href="/company/candidates/interview/sent" className="w-full flex items-center justify-center gap-2 bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold py-3 px-5 rounded-xl transition-all duration-200 active:scale-[0.98]">
              <Send className="h-4 w-4" />
              Send interview
            </Link>
          </div>

          {/* Under-sidebar info box */}
          <div className="border border-surface bg-surface-deep rounded-2xl p-4">
            <p className="text-[13px] text-on-surface-subtle leading-relaxed font-medium">
              Candidates get a link to complete the interview anytime within 48 hours. You receive a scored report instantly after submission.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
