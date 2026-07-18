"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  Bot, 
  Send, 
  Mic, 
  Star, 
  CheckCircle2, 
  Loader2 
} from "lucide-react";
import Link from "next/link";

export default function CandidateInterviewPage() {
  const [mode, setMode] = useState<"text" | "voice">("text");
  const [voiceState, setVoiceState] = useState<"idle" | "recording" | "transcribing">("idle");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [response, setResponse] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [transcribingLoader, setTranscribingLoader] = useState(false);

  const questions = [
    "Welcome! To start, please walk me through your design process for a fintech product.",
    "How do you balance user needs with tight business requirements when product priorities clash?",
    "Describe a complex product flow you optimized. What metrics did you use to define success?",
    "Tell me about a time you designed a design system from scratch. What challenges did you face?",
    "Why are you interested in joining Emirates NBD as a Senior Product Designer?"
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setResponse("");
      setVoiceState("idle");
    } else {
      setIsFinished(true);
    }
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!response.trim()) return;
    handleNextQuestion();
  };

  const handleVoiceToggle = () => {
    if (voiceState === "idle") {
      setVoiceState("recording");
    } else if (voiceState === "recording") {
      // Simulate transcribing
      setVoiceState("transcribing");
      setTranscribingLoader(true);
      setTimeout(() => {
        setResponse("This is a simulated AI voice transcription of your design process answer detailing system design and user metrics.");
        setTranscribingLoader(false);
      }, 2000);
    }
  };

  const handleVoiceSubmit = () => {
    handleNextQuestion();
  };

  if (isFinished) {
    return (
      <div className="p-8 max-w-full mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center text-white">
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-3xl p-8 md:p-10 text-center space-y-6 shadow-2xl">
          <div className="h-16 w-16 bg-[#4BC957]/10 border border-[#4BC957]/20 rounded-full flex items-center justify-center mx-auto text-[#4BC957] shadow-lg shadow-[#4BC957]/10">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Interview Completed!</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Well done, Majid! Your responses have been submitted successfully to Emirates NBD.
            </p>
          </div>
          <div className="bg-[#0A0F1D]/50 border border-[#1E293B]/40 rounded-2xl p-4 text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
            The hiring team will review the AI transcript and feedback report. You will be notified in your Inbox regarding subsequent rounds.
          </div>
          <div className="pt-4">
            <Link 
              href="/candidate" 
              className="inline-block bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold px-6 py-3 rounded-2xl transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98]"
            >
              Return to dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto text-white flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Back button */}
      <div>
        <Link 
          href="/candidate" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Path Meta & Role */}
      <div>
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">AI interview • Emirates NBD</p>
        <h1 className="text-2xl font-extrabold text-white mt-1 tracking-tight">Senior Product Designer</h1>
      </div>

      {/* Main Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start flex-1 min-h-0">
        
        {/* Left Column: Mode Toggle + Chat Area */}
        <div className="lg:col-span-2 flex flex-col space-y-4 h-full">
          
          {/* Mode toggle row */}
          <div className="bg-[#0A0F1D]/60 border border-[#1E293B]/60 p-1.5 rounded-2xl flex w-full">
            <button
              onClick={() => {
                setMode("text");
                setVoiceState("idle");
              }}
              className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all ${
                mode === "text"
                  ? "bg-[#4BC957] text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Text mode
            </button>
            <button
              onClick={() => {
                setMode("voice");
                setResponse("");
              }}
              className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all ${
                mode === "voice"
                  ? "bg-[#4BC957] text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Voice mode
            </button>
          </div>

          {/* Active Chat panel */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 flex flex-col justify-between min-h-[440px] flex-1">
            
            {/* Chat Messages */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-[#4BC957]/10 border border-[#4BC957]/20 flex items-center justify-center text-[#4BC957] flex-shrink-0 mt-0.5">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <div className="bg-[#1E293B] text-slate-200 px-4 py-3 rounded-2xl rounded-tl-none text-xs font-semibold leading-relaxed max-w-[80%]">
                  {questions[currentQuestionIdx]}
                </div>
              </div>

              {/* Show transcribed text when available in Voice Mode */}
              {mode === "voice" && response && (
                <div className="flex gap-3 items-start justify-end">
                  <div className="bg-[#4BC957] text-white px-4 py-3 rounded-2xl rounded-tr-none text-xs font-semibold leading-relaxed max-w-[80%]">
                    {response}
                  </div>
                </div>
              )}
            </div>

            {/* Answer Control Area */}
            <div className="pt-6 border-t border-[#1E293B]/40">
              
              {/* TEXT MODE INPUT */}
              {mode === "text" && (
                <form onSubmit={handleTextSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    placeholder="Type your answer..."
                    className="flex-1 bg-[#080C14] border border-[#1E293B]/60 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#4BC957]"
                  />
                  <button
                    type="submit"
                    disabled={!response.trim()}
                    className="bg-[#4BC957] hover:bg-[#00B96E] disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-md shadow-[#4BC957]/10 flex-shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}

              {/* VOICE MODE CONTROLS */}
              {mode === "voice" && (
                <div className="flex items-center justify-between">
                  {/* LEFT: Microphones controllers */}
                  <div className="flex items-center gap-3">
                    {voiceState === "idle" && (
                      <>
                        <button
                          onClick={handleVoiceToggle}
                          className="h-12 w-12 rounded-full bg-[#4BC957] hover:bg-[#00B96E] text-white flex items-center justify-center transition-all shadow shadow-[#4BC957]/10"
                        >
                          <Mic className="h-5 w-5" />
                        </button>
                        <div className="text-left">
                          <p className="text-xs font-bold text-white">Tap to speak</p>
                          <p className="text-[10px] text-slate-500 font-semibold mt-0.5">We'll transcribe with AI</p>
                        </div>
                      </>
                    )}

                    {voiceState === "recording" && (
                      <>
                        <button
                          onClick={handleVoiceToggle}
                          className="h-12 w-12 rounded-full bg-[#EF4444] animate-pulse text-white flex items-center justify-center transition-all"
                        >
                          <Mic className="h-5 w-5" />
                        </button>
                        <div className="text-left">
                          <p className="text-xs font-bold text-white">Recording...</p>
                          <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Tap again to stop & transcribe</p>
                        </div>
                      </>
                    )}

                    {voiceState === "transcribing" && (
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-[#1E293B] border border-slate-700/60 flex items-center justify-center text-slate-400">
                          {transcribingLoader ? <Loader2 className="h-5 w-5 animate-spin" /> : <CheckCircle2 className="h-5 w-5 text-[#4BC957]" />}
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold text-white">{transcribingLoader ? "Transcribing with AI..." : "Transcribed Successfully"}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT: Submit Actions */}
                  {mode === "voice" && response && !transcribingLoader && (
                    <button
                      onClick={handleVoiceSubmit}
                      className="bg-[#4BC957] hover:bg-[#00B96E] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98]"
                    >
                      Submit answer
                    </button>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Right Column: AI Interviewer Note & Progress list */}
        <div className="space-y-6">
          
          {/* Interviewer intro card */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#4BC957]">
              <Star className="h-4 w-4 fill-[#4BC957]" />
              AI interviewer
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
              Hi, I'm CareerSprint — your AI interviewer trained on Emirates NBD's rubric. Answer naturally; I'll score for clarity, depth, and relevance.
            </p>
          </div>

          {/* Progress list card */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Progress</h3>
            
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-[#4BC957] h-full transition-all duration-300" 
                style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }} 
              />
            </div>

            <div className="space-y-3.5 pt-2">
              {questions.map((_, idx) => {
                const isActive = currentQuestionIdx === idx;
                const isPassed = currentQuestionIdx > idx;
                return (
                  <div key={idx} className="flex items-center gap-3 text-xs font-semibold">
                    <span className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] ${
                      isPassed 
                        ? "bg-[#4BC957]/10 border border-[#4BC957]/20 text-[#4BC957]" 
                        : isActive 
                        ? "bg-white text-[#080C14]" 
                        : "border border-slate-700 text-slate-500"
                    }`}>
                      {idx + 1}
                    </span>
                    <span className={isActive ? "text-white" : isPassed ? "text-slate-400" : "text-slate-500"}>
                      Question {idx + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

