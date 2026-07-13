"use client";

import React, { useState } from "react";
import { Search, Send, Sparkles, ChevronLeft } from "lucide-react";

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
  const [showChatDetail, setShowChatDetail] = useState(false);

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
    setShowChatDetail(true);
  };

  const selectedChat = currentChats[activeChat];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto h-[calc(100vh-2rem)] flex flex-col space-y-4 md:space-y-6">
      <div>
        <h1 className="text-sm font-medium text-on-surface-muted uppercase tracking-widest">{title}</h1>
        <p className="text-2xl md:text-3xl font-extrabold text-on-surface mt-1 tracking-tight">{subtitle}</p>
      </div>

      <div className="flex-1 bg-surface-card border border-surface rounded-2xl overflow-hidden flex flex-row min-h-0">
        {/* Chat List Sidebar - hidden on mobile when chat is open */}
        <div className={`${showChatDetail ? "hidden" : "flex"} md:flex w-full md:w-80 lg:w-[380px] border-r border-surface flex-col flex-shrink-0`}>
          {showSearch && (
            <div className="p-4 border-b border-surface">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-subtle" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full bg-surface-deep border border-surface rounded-lg py-1.5 pl-9 pr-4 text-on-surface placeholder:text-on-surface-subtle focus:outline-none focus:border-[#4BC957]"
                />
              </div>
            </div>
          )}
          <div className="flex-1 overflow-y-auto divide-y divide-surface">
            {currentChats.map((chat, idx) => (
              <div
                key={chat.id}
                onClick={() => selectChat(idx)}
                className={`p-4 lg:p-5 flex gap-3 cursor-pointer transition-colors text-left ${activeChat === idx && showChatDetail ? "bg-surface-item" : "hover:bg-surface-item/50"
                  }`}
              >
                <div className="h-10 w-10 rounded-xl bg-surface-item border border-surface flex items-center justify-center font-bold text-on-surface text-sm flex-shrink-0">
                  {chat.initials ?? chat.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className=" font-semibold text-on-surface truncate">{chat.name}</p>
                    <span className="text-[13px] text-on-surface-subtle flex-shrink-0 ml-2">{chat.time}</span>
                  </div>
                  <p className="text-[13px] text-[#4BC957] truncate mt-0.5 font-medium">{chat.role}</p>
                  <p className=" text-on-surface-muted truncate mt-1">{chat.lastMsg}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="h-5 w-5 rounded-full bg-[#4BC957] flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0 self-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`${!showChatDetail ? "hidden" : "flex"} md:flex flex-1 flex-col bg-surface-deep`}>
          {/* Chat Header */}
          <div className="p-4 lg:p-5 border-b border-surface bg-surface-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowChatDetail(false)}
                className="md:hidden text-on-surface-muted hover:text-on-surface transition-colors p-1"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="h-10 w-10 rounded-xl bg-surface-item border border-surface flex items-center justify-center font-bold text-on-surface text-sm flex-shrink-0">
                {selectedChat.initials ?? selectedChat.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">{selectedChat.name}</p>
                <p className=" text-on-surface-muted font-medium">
                  {selectedChat.role}{selectedChat.location ? ` • ${selectedChat.location}` : ""}
                </p>
              </div>
            </div>
            {showMatchBadge && selectedChat.match && (
              <span className=" text-[#4BC957] bg-[#4BC957]/10 px-2 py-0.5 rounded-md font-semibold flex items-center gap-1 border border-[#4BC957]/20">
                <Sparkles className="h-3 w-3" />
                {selectedChat.match}% Match
              </span>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
            {selectedChat.messages.map((msg, idx) => {
              const isMe = msg.sender === "me";
              return (
                <div
                  key={idx}
                  className={`flex flex-col space-y-1 max-w-[85%] md:max-w-[70%] ${isMe ? "ml-auto items-end" : "items-start"}`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl font-medium leading-relaxed ${isMe
                      ? "bg-[#4BC957] text-white rounded-tr-none"
                      : "bg-surface-item text-on-surface border border-surface rounded-tl-none"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-surface bg-surface-card flex gap-3">
            <input
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-surface-deep border border-surface rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-subtle focus:outline-none focus:border-[#4BC957] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#4BC957] hover:bg-[#00B96E] text-white p-3 rounded-xl transition-all duration-200 shadow-md shadow-[#4BC957]/10 flex-shrink-0 active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
