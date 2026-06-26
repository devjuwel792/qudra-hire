"use client";

import React, { useState } from "react";
import { Search, Send, Sparkles } from "lucide-react";

interface Message {
  sender: "me" | "them";
  text: string;
}

interface Chat {
  id: number;
  name: string;
  role: string;
  location?: string;
  time: string;
  lastMsg: string;
  unread: number;
  initials?: string;
  match?: number;
  messages: Message[];
}

interface InboxProps {
  chats: Chat[];
  title: string;
  subtitle: string;
  showSearch?: boolean;
  showMatchBadge?: boolean;
}

export default function Inbox({
  chats: initialChats,
  title,
  subtitle,
  showSearch = false,
  showMatchBadge = false,
}: InboxProps) {
  const [activeChat, setActiveChat] = useState(0);
  const [inputText, setInputText] = useState("");
  const [currentChats, setCurrentChats] = useState(initialChats);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const updated = [...currentChats];
    updated[activeChat].messages.push({ sender: "me", text: inputText.trim() });
    updated[activeChat].lastMsg = inputText.trim();
    setCurrentChats(updated);
    setInputText("");
  };

  const selectChat = (idx: number) => {
    setActiveChat(idx);
    if (currentChats[idx].unread > 0) {
      const updated = [...currentChats];
      updated[idx].unread = 0;
      setCurrentChats(updated);
    }
  };

  const selectedChat = currentChats[activeChat];

  return (
    <div className="p-8 max-w-7xl mx-auto h-[calc(100vh-2rem)] flex flex-col space-y-6">
      <div>
        <h1 className="text-sm font-medium text-slate-400 uppercase tracking-widest">{title}</h1>
        <p className="text-3xl font-extrabold text-white mt-1 tracking-tight">{subtitle}</p>
      </div>

      <div className="flex-1 bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl overflow-hidden flex flex-row min-h-0">
        {/* Chat List Sidebar */}
        <div className="w-80 lg:w-[380px] border-r border-[#1E293B]/60 flex flex-col flex-shrink-0">
          {showSearch && (
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
          )}
          <div className="flex-1 overflow-y-auto divide-y divide-[#1E293B]/30">
            {currentChats.map((chat, idx) => (
              <div
                key={chat.id}
                onClick={() => selectChat(idx)}
                className={`p-4 lg:p-5 flex gap-3 cursor-pointer transition-colors text-left ${
                  activeChat === idx ? "bg-[#162032]" : "hover:bg-[#162032]/40"
                }`}
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2E3C51] flex items-center justify-center font-bold text-slate-300 text-sm flex-shrink-0">
                  {chat.initials ?? chat.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white truncate">{chat.name}</p>
                    <span className="text-[10px] text-slate-500 flex-shrink-0 ml-2">{chat.time}</span>
                  </div>
                  <p className="text-[11px] text-[#00D07C] truncate mt-0.5 font-medium">{chat.role}</p>
                  <p className="text-xs text-slate-400 truncate mt-1">{chat.lastMsg}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="h-5 w-5 rounded-full bg-[#00D07C] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 self-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-[#0A0F1D]/25">
          {/* Chat Header */}
          <div className="p-4 lg:p-5 border-b border-[#1E293B]/60 bg-[#0F172A]/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2E3C51] flex items-center justify-center font-bold text-slate-300 text-sm flex-shrink-0">
                {selectedChat.initials ?? selectedChat.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{selectedChat.name}</p>
                <p className="text-xs text-slate-400 font-medium">
                  {selectedChat.role}{selectedChat.location ? ` • ${selectedChat.location}` : ""}
                </p>
              </div>
            </div>
            {showMatchBadge && selectedChat.match && (
              <span className="text-xs text-[#00D07C] bg-[#00D07C]/10 px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                {selectedChat.match}% Match
              </span>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {selectedChat.messages.map((msg, idx) => {
              const isMe = msg.sender === "me";
              return (
                <div
                  key={idx}
                  className={`flex flex-col space-y-1 max-w-[70%] ${isMe ? "ml-auto items-end" : "items-start"}`}
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

          {/* Message Input */}
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
