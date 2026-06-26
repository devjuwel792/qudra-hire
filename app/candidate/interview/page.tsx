"use client";

import React, { useState, useEffect } from "react";
import { 
  Bot, 
  Video, 
  Mic, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Volume2, 
  Sparkles,
  Send,
  Loader2
} from "lucide-react";
import Link from "next/link";

export default function CandidateInterviewPage() {
  const [stage, setStage] = useState<"intro" | "checking" | "active" | "submitting" | "completed">("intro");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [timer, setTimer] = useState(120); // 2 minutes per question
  const [response, setResponse] = useState("");
  const [isListening, setIsListening] = useState(false);

  const questions = [
    "Tell me about a time you designed a design system from scratch. What challenges did you face with cross-functional adoption, and how did you resolve them?",
    "How do you balance user needs with tight business requirements when product priorities clash?",
    "Describe a complex product flow you optimized. What metrics did you use to define success, and what was the outcome?",
    "Why are you interested in joining Emirates NBD as a Senior Product Designer, and what do you hope to accomplish?"
  ];

  // Timer effect for active stage
  useEffect(() => {
    let interval: any;
    if (stage === "active" && timer > 0) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else if (timer === 0 && stage === "active") {
      handleNextQuestion();
    }
    return () => clearInterval(interval);
  }, [stage, timer]);

  const handleStartChecking = () => {
    setStage("checking");
    setTimeout(() => {
      setStage("active");
      setTimer(120);
    }, 2500); // simulation time
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setResponse("");
      setTimer(120);
    } else {
      setStage("submitting");
      setTimeout(() => {
        setStage("completed");
      }, 3000); // simulation submission
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center text-white">
      {/* INTRO STAGE */}
      {stage === "intro" && (
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-3xl p-8 md:p-10 space-y-8 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#00D07C]/10 border border-[#00D07C]/20 rounded-2xl text-[#00D07C]">
              <Bot className="h-8 w-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Emirates NBD • AI Interview Invite</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-1 tracking-tight">Senior Product Designer</h1>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 font-medium">
            <p className="leading-relaxed">
              Welcome, Layla! You have been invited to complete a QudraHire interactive AI assessment. This helps the Emirates NBD recruitment team evaluate your design methodologies and communication style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0A0F1D]/60 border border-[#1E293B]/40 space-y-2">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Duration & Format</span>
                <p className="text-white font-bold text-sm">4 Questions • ~10 mins</p>
                <p className="text-xs text-slate-400">Up to 2 minutes of response time per question.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0A0F1D]/60 border border-[#1E293B]/40 space-y-2">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Requirements</span>
                <p className="text-white font-bold text-sm">Mic & Camera Enabled</p>
                <p className="text-xs text-slate-400">Ensure you are in a quiet, well-lit environment.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1E293B]/40 pt-6 flex justify-between items-center">
            <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              Response will be transcribed by AI
            </span>
            <button 
              onClick={handleStartChecking}
              className="flex items-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-2xl transition-all shadow-lg shadow-[#00D07C]/15 active:scale-[0.98]"
            >
              Start setup check
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* CHECKING STAGE */}
      {stage === "checking" && (
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="relative mx-auto h-20 w-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-[#00D07C]/20 border-t-[#00D07C] animate-spin" />
            <Bot className="h-8 w-8 text-[#00D07C]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Configuring AI environment...</h2>
            <p className="text-xs text-slate-400 mt-1.5">Checking microphone, camera stream, and transcribing agent connection.</p>
          </div>
          <div className="max-w-xs mx-auto space-y-2.5 text-xs text-left font-semibold text-slate-400">
            <p className="flex items-center justify-between"><span>Camera access</span> <span className="text-[#00D07C]">Active</span></p>
            <p className="flex items-center justify-between"><span>Microphone volume</span> <span className="text-[#00D07C]">Optimal</span></p>
            <p className="flex items-center justify-between"><span>Transcribe socket</span> <span className="text-[#00D07C]">Connected</span></p>
          </div>
        </div>
      )}

      {/* ACTIVE INTERVIEW STAGE */}
      {stage === "active" && (
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl h-[580px]">
          
          {/* Main Interview Panel */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              {/* Top Meta */}
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#00D07C] bg-[#00D07C]/10 border border-[#00D07C]/20 px-3 py-1 rounded-full">
                  Question {currentQuestionIdx + 1} of {questions.length}
                </span>
                <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {formatTime(timer)}
                </span>
              </div>

              {/* Question text */}
              <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed mt-4">
                {questions[currentQuestionIdx]}
              </h2>
            </div>

            {/* Answer Input and Microphones */}
            <div className="space-y-4 mt-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Write or Speak your response</span>
                <button 
                  onClick={() => setIsListening(!isListening)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                    isListening 
                      ? "bg-red-900/20 text-red-400 border-red-800/30 animate-pulse" 
                      : "bg-[#162032] text-[#00D07C] border-[#2A3C58]"
                  }`}
                >
                  <Mic className="h-3 w-3" />
                  {isListening ? "Listening..." : "Dictate Response"}
                </button>
              </div>

              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Type your response here or click 'Dictate Response' to dictate by voice..."
                className="w-full h-40 bg-[#080C14] border border-[#1E293B]/60 rounded-2xl p-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00D07C] resize-none"
              />
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleNextQuestion}
                disabled={!response.trim()}
                className="flex items-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-[#080C14] font-bold px-6 py-3 rounded-2xl transition-all active:scale-[0.98]"
              >
                {currentQuestionIdx === questions.length - 1 ? "Submit Interview" : "Next Question"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Camera Sidebar Simulation */}
          <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-[#1E293B]/60 bg-[#080C14] p-5 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Camera Feed</span>
                <span className="h-2 w-2 rounded-full bg-[#00D07C]" />
              </div>
              
              {/* Simulated Camera Window */}
              <div className="aspect-video md:aspect-square bg-slate-900 rounded-2xl border border-[#1E293B] relative overflow-hidden flex items-center justify-center">
                {/* Simulated User Stream representation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#162032] to-[#0A0F1D]/80 flex items-center justify-center flex-col">
                  <div className="h-12 w-12 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center font-bold text-white text-base">
                    LM
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">Layla Al-Mansoori</span>
                </div>

                <div className="absolute bottom-2 left-2 bg-[#080C14]/80 backdrop-blur border border-slate-700/60 rounded-md px-1.5 py-0.5 text-[9px] text-slate-300 font-semibold flex items-center gap-1">
                  <Video className="h-2.5 w-2.5 text-[#00D07C]" /> Live
                </div>
              </div>
            </div>

            {/* AI Advisor Panel */}
            <div className="p-4 rounded-2xl bg-[#0F172A] border border-[#1E293B]/60 space-y-2 mt-4 md:mt-0">
              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-[#00D07C]" />
                AI Trainer Note
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                Try to detail your specific contribution and state the metrics or results you drove in your answer.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* SUBMITTING STAGE */}
      {stage === "submitting" && (
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <Loader2 className="h-10 w-10 text-[#00D07C] animate-spin mx-auto" />
          <div>
            <h2 className="text-xl font-bold text-white">Submitting your responses...</h2>
            <p className="text-xs text-slate-400 mt-1.5">Generating semantic transcriptions, sentiment report, and skills alignment matrix.</p>
          </div>
        </div>
      )}

      {/* COMPLETED STAGE */}
      {stage === "completed" && (
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-3xl p-8 md:p-10 text-center space-y-6 shadow-2xl max-w-xl mx-auto">
          <div className="h-16 w-16 bg-[#00D07C]/10 border border-[#00D07C]/20 rounded-full flex items-center justify-center mx-auto text-[#00D07C] shadow-lg shadow-[#00D07C]/10">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Interview Completed!</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Well done, Layla! Your responses and media files have been submitted successfully to Emirates NBD.
            </p>
          </div>
          <div className="bg-[#0A0F1D]/50 border border-[#1E293B]/40 rounded-2xl p-4 text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
            The hiring team will review the AI transcript and feedback report. You will be notified in your Inbox regarding subsequent rounds.
          </div>
          <div className="pt-4">
            <Link 
              href="/candidate" 
              className="inline-block bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-2xl transition-all shadow-md shadow-[#00D07C]/10 active:scale-[0.98]"
            >
              Return to dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
