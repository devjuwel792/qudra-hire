"use client";

import React from "react";
import Wallet from "@/components/shared/Wallet";

export default function CandidateWalletPage() {
  const transactions = [
    { desc: "Top-up • Momentum bundle", method: "Apple Pay", date: "Mar 14", amount: "+150", positive: true },
    { desc: "Auto-apply • Emirates NBD", method: "Credits", date: "Mar 13", amount: "-1", positive: false },
    { desc: "AI cover letter • Careem", method: "Credits", date: "Mar 13", amount: "-2", positive: false },
    { desc: "AI interview • STC Pay", method: "Credits", date: "Mar 12", amount: "-5", positive: false },
    { desc: "Referral reward", method: "Bonus", date: "Mar 10", amount: "+20", positive: true },
    { desc: "Auto-apply • ADNOC", method: "Credits", date: "Mar 09", amount: "-1", positive: false },
  ];

  const bundles = [
    { credits: 50, desc: "Starter pack", price: "AED 99", active: false },
    { credits: 150, desc: "Most popular", price: "AED 249", active: true },
    { credits: 400, desc: "Fast track bundle", price: "AED 499", active: false },
  ];

  const infoRows = [
    { label: "Used this month", value: "32" },
    { label: "Auto-Applied", value: "18 times" },
    { label: "Member since", value: "Jan 2026" },
  ];

  return (
    <Wallet
      subtitle="Credits never expire. Use them for auto-applies, AI CV reviews, and AI interviews."
      balance="1,240"
      balanceValue="≈ AED 1,860 value • enough for ~1,240 auto-applies or ~248 AI interviews."
      infoRows={infoRows}
      bundles={bundles}
      activityTitle="Recent transactions"
      transactions={transactions}
    />
  );
}
