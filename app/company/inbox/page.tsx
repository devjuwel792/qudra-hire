"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Search, Sparkles } from "lucide-react";

export default function InboxPage() {
  const [activeChat, setActiveChat] = useState(0);

  const chats = [
    { name: "Layla Al-Mansoori", role: "Senior Product Designer", lastMsg: "Thank you for the update! I am excited about the next steps.", time: "10:24 AM", unread: true, initials: "LM" },
    { name: "Omar Haddad", role: "Full-Stack Engineer", lastMsg: "Here is the updated link to my portfolio repository.", time: "Yesterday", unread: false, initials: "OH" },
    { name: "Sara Khan", role: "ML Engineer", lastMsg: "Are the interview slots still flexible for this week?", time: "Monday", unread: false, initials: "SK" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto h-[calc(100vh-2rem)] flex flex-col space-y-6">
      <div>
        <h1 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Hiring Workspace</h1>
        <p className="text-3xl font-extrabold text-white mt-1 tracking-tight">Inbox</p>
      </div>

      <div className="flex-1 bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl overflow-hidden flex flex-row">
        {/* Chat List Sidebar (1/3 width) */}
        <div className="w-80 border-r border-[#1E293B]/60 flex flex-col">
          <div className="p-4 border-b border-[#1E293B]/60">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-[#080C14] border border-[#1E293B]/60 rounded-lg py-1.5 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00D07C]"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-[#1E293B]/40">
            {chats.map((chat, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveChat(idx)}
                className={`p-4 flex gap-3 cursor-pointer transition-colors ${activeChat === idx ? "bg-[#162032]" : "hover:bg-[#162032]/40"}`}
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2E3C51] flex items-center justify-center font-bold text-slate-300 text-sm flex-shrink-0">
                  {chat.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white truncate">{chat.name}</p>
                    <span className="text-[10px] text-slate-500">{chat.time}</span>
                  </div>
                  <p className="text-[11px] text-[#00D07C] truncate mt-0.5 font-medium">{chat.role}</p>
                  <p className="text-xs text-slate-400 truncate mt-1">{chat.lastMsg}</p>
                </div>
                {chat.unread && (
                  <span className="h-2 w-2 rounded-full bg-[#00D07C] self-center flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area (2/3 width) */}
        <div className="flex-1 flex flex-col bg-[#0A0F1D]/30">
          <div className="p-4 border-b border-[#1E293B]/60 flex items-center justify-between bg-[#0F172A]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2E3C51] flex items-center justify-center font-bold text-slate-300 text-sm">
                {chats[activeChat].initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{chats[activeChat].name}</p>
                <p className="text-xs text-[#00D07C] font-medium flex items-center gap-1">
                  {chats[activeChat].role}
                </p>
              </div>
            </div>
            <span className="text-xs text-[#00D07C] bg-[#00D07C]/10 px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              97% Match
            </span>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="flex flex-col space-y-1 items-start max-w-[70%]">
              <div className="bg-[#1E293B] text-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-none text-xs">
                Hi, thanks for reaching out. I reviewed your job description for the Senior Product Designer role and would love to schedule our initial interview call.
              </div>
              <span className="text-[9px] text-slate-500 pl-1">10:22 AM</span>
            </div>

            <div className="flex flex-col space-y-1 items-end max-w-[70%] ml-auto">
              <div className="bg-[#00D07C] text-[#080C14] px-4 py-2.5 rounded-2xl rounded-tr-none text-xs font-medium">
                Hello Layla, absolutely! I will send over a calendly link so you can select the time slot that works best for you. Looking forward to speaking!
              </div>
              <span className="text-[9px] text-slate-500 pr-1">10:23 AM</span>
            </div>

            <div className="flex flex-col space-y-1 items-start max-w-[70%]">
              <div className="bg-[#1E293B] text-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-none text-xs">
                {chats[activeChat].lastMsg}
              </div>
              <span className="text-[9px] text-slate-500 pl-1">{chats[activeChat].time}</span>
            </div>
          </div>

          <div className="p-4 border-t border-[#1E293B]/60 bg-[#0F172A] flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-[#080C14] border border-[#1E293B]/60 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00D07C]"
            />
            <button className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] p-2.5 rounded-xl transition-all duration-200 shadow-md shadow-[#00D07C]/10">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
