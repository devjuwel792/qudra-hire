"use client";

import React from "react";
import Inbox from "@/components/shared/Inbox";

export default function CompanyInboxPage() {
  const chats = [
    {
      id: 0,
      name: "Layla Al-Mansoori",
      initials: "LM",
      role: "Senior Product Designer",
      time: "10:24 AM",
      lastMsg: "Thank you for the update! I am excited about the next steps.",
      unread: 1,
      match: 97,
      messages: [
        { sender: "them" as const, text: "Hi, thanks for reaching out. I reviewed your job description for the Senior Product Designer role and would love to schedule our initial interview call." },
        { sender: "me" as const, text: "Hello Layla, absolutely! I will send over a calendly link so you can select the time slot that works best for you. Looking forward to speaking!" },
        { sender: "them" as const, text: "Thank you for the update! I am excited about the next steps." },
      ],
    },
    {
      id: 1,
      name: "Omar Haddad",
      initials: "OH",
      role: "Full-Stack Engineer",
      time: "Yesterday",
      lastMsg: "Here is the updated link to my portfolio repository.",
      unread: 0,
      match: 94,
      messages: [
        { sender: "them" as const, text: "Here is the updated link to my portfolio repository." },
      ],
    },
    {
      id: 2,
      name: "Sara Khan",
      initials: "SK",
      role: "ML Engineer",
      time: "Monday",
      lastMsg: "Are the interview slots still flexible for this week?",
      unread: 0,
      match: 91,
      messages: [
        { sender: "them" as const, text: "Are the interview slots still flexible for this week?" },
      ],
    },
  ];

  return (
    <Inbox
      chats={chats}
      title="Hiring Workspace"
      subtitle="Inbox"
      showSearch
      showMatchBadge
    />
  );
}
