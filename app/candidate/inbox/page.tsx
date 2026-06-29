"use client";

import React from "react";
import Inbox from "@/components/shared/Inbox";

export default function CandidateInboxPage() {
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
        { sender: "them" as const, text: "Hi Majid! Loved your portfolio. Are you free this week for a 30-min intro?" },
        { sender: "me" as const, text: "Absolutely. Tuesday or Wednesday afternoon work for me." },
        { sender: "them" as const, text: "Great, can you do Tue 11am?" },
      ],
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
        { sender: "them" as const, text: "Hi Majid, we saw your application. We'd love to share a take-home." },
      ],
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
        { sender: "them" as const, text: "Thanks for applying! Reviewing now." },
      ],
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
        { sender: "them" as const, text: "Are you open to relocating to AUH?" },
      ],
    },
  ];

  return (
    <Inbox
      chats={chats}
      title="Messages"
      subtitle="Talk directly with recruiters — no recruiter spam, no email tag."
    />
  );
}
