"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function CandidateInboxPage() {
  const [activeChat, setActiveChat] = useState(0);
  const [inputText, setInputText] = useState("");

  const chats = [
    {
      id: 0,
      name: "Emirates NBD • Recruiter",
      role: "Senior Product Designer",
      location: "Dubai",
      time: "2m",
      lastMsg: "Great, can you do Tue 11am?",
      unread: 1,
      messages: [
        { sender: "them", text: "Hi Layla! Loved your portfolio. Are you free this week for a 30-min intro?" },
        { sender: "me", text: "Absolutely. Tuesday or Wednesday afternoon work for me." },
        { sender: "them", text: "Great, can you do Tue 11am?" }
      ]
    },
    {
      id: 1,
      name: "Careem • Talent",
      role: "Full-Stack Engineer",
      location: "Dubai",
      time: "1h",
      lastMsg: "We'd love to share a take-home.",
      unread: 0,
      messages: [
        { sender: "them", text: "Hi Layla, we saw your application. We'd love to share a take-home." }
      ]
    },
    {
      id: 2,
      name: "STC Pay • People",
      role: "ML Engineer",
      location: "Riyadh",
      time: "Yesterday",
      lastMsg: "Thanks for applying! Reviewing now.",
      unread: 0,
      messages: [
        { sender: "them", text: "Thanks for applying! Reviewing now." }
      ]
    },
    {
      id: 3,
      name: "ADNOC • TA",
      role: "Talent Lead",
      location: "Abu Dhabi",
      time: "Mar 4",
      lastMsg: "Are you open to relocating to AUH?",
      unread: 0,
      messages: [
        { sender: "them", text: "Are you open to relocating to AUH?" }
      ]
    }
  ];

  const [currentChats, setCurrentChats] = useState(chats);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const updatedChats = [...currentChats];
    updatedChats[activeChat].messages.push({
      sender: "me",
      text: inputText.trim()
    });
    updatedChats[activeChat].lastMsg = inputText.trim();
    setCurrentChats(updatedChats);
    setInputText("");
  };

  const selectedChat = currentChats[activeChat];

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Messages</h1>
        <p className="text-sm text-slate-400 mt-1">Talk directly with recruiters no recruiter spam, no email tag.</p>
      </div>

      {/* Main chat box */}
      <div className="flex-1 bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl overflow-hidden flex flex-row min-h-0">
        {/* Left column (Chats List) */}
        <div className="w-[380px] border-r border-[#1E293B]/60 flex flex-col bg-[#0F172A] flex-shrink-0">
          <div className="flex-1 overflow-y-auto divide-y divide-[#1E293B]/30">
            {currentChats.map((chat, idx) => (
              <div
                key={chat.id}
                onClick={() => {
                  setActiveChat(idx);
                  // Clear unread
                  if (chat.unread > 0) {
                    const next = [...currentChats];
                    next[idx].unread = 0;
                    setCurrentChats(next);
                  }
                }}
                className={`p-5 flex flex-col gap-1 cursor-pointer transition-colors text-left ${
                  activeChat === idx ? "bg-[#162032]" : "hover:bg-[#162032]/45"
                }`}
              >
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-white truncate pr-2">
                    {chat.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium flex-shrink-0">
                    {chat.time}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-[#00D07C] leading-tight">
                  {chat.role}
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-slate-400 truncate max-w-[280px]">
                    {chat.lastMsg}
                  </p>
                  {chat.unread > 0 && (
                    <span className="h-5 w-5 rounded-full bg-[#00D07C] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column (Chat Details) */}
        <div className="flex-1 flex flex-col bg-[#0A0F1D]/25">
          {/* Active Chat Header */}
          <div className="p-5 border-b border-[#1E293B]/60 bg-[#0F172A]/80 flex flex-col justify-center">
            <h2 className="text-sm font-bold text-white">{selectedChat.name}</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {selectedChat.role} • {selectedChat.location}
            </p>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 flex flex-col">
            {selectedChat.messages.map((msg, idx) => {
              const isMe = msg.sender === "me";
              return (
                <div
                  key={idx}
                  className={`flex flex-col space-y-1 max-w-[70%] ${
                    isMe ? "ml-auto items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl text-xs font-medium leading-relaxed ${
                      isMe
                        ? "bg-[#00D07C] text-[#080C14] rounded-tr-none"
                        : "bg-[#1E293B] text-slate-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-[#1E293B]/60 bg-[#0F172A] flex gap-3">
            <input
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-[#080C14] border border-[#1E293B]/60 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00D07C]"
            />
            <button
              type="submit"
              className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] p-3 rounded-xl transition-all duration-200 shadow-md shadow-[#00D07C]/10 flex-shrink-0"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
