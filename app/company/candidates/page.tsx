"use client";

import React, { useState } from "react";
import {
  Users,
  Search,
  SlidersHorizontal,
  Sparkles,
  Lock,
  MessageSquare,
  Bot,
  FileText,
  X,
  Plus
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import Link from "next/link";

export default function CandidatesPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [roleFilter, setRoleFilter] = useState("");
  const [skills, setSkills] = useState(["Figma", "React", "TypeScript"]);
  const [skillInput, setSkillInput] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("All Levels");

  // Candidates list matching the screenshot
  const initialCandidates = [
    {
      id: 1,
      name: "Majid Al-Mansoori",
      role: "Senior Product Designer",
      initials: "LM",
      match: "97%",
      skills: ["Figma", "Design Systems", "Fintech"],
      exp: "7 yrs",
      location: "Dubai",
      credits: 10
    },
    {
      id: 2,
      name: "Omar Haddad",
      role: "Full-Stack Engineer",
      initials: "OH",
      match: "94%",
      skills: ["React", "Node", "AWS"],
      exp: "5 yrs",
      location: "Riyadh",
      credits: 10
    },
    {
      id: 3,
      name: "Sara Khan",
      role: "ML Engineer",
      initials: "SK",
      match: "91%",
      skills: ["PyTorch", "LLMs"],
      exp: "4 yrs",
      location: "Remote",
      credits: 10
    },
    {
      id: 4,
      name: "Khalid Al-Otaibi",
      role: "TA Lead",
      initials: "KO",
      match: "88%",
      skills: ["Recruitment", "Leadership"],
      exp: "9 yrs",
      location: "Abu Dhabi",
      credits: 10
    },
    {
      id: 5,
      name: "Noura Bin Saeed",
      role: "Growth Manager",
      initials: "NB",
      match: "86%",
      skills: ["Paid", "Lifecycle"],
      exp: "6 yrs",
      location: "Kuwait",
      credits: 10
    }
  ];

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const cleanSkill = skillInput.trim().replace(/,/g, "");
      if (cleanSkill && !skills.includes(cleanSkill)) {
        setSkills([...skills, cleanSkill]);
      }
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">AI-ranked candidates</h1>
          <p className="text-sm text-muted-foreground mt-1">Unlock full profiles using credits.</p>
        </div>

        {/* Filters Dialog */}
        <Dialog open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <DialogTrigger
            render={
              <button className="flex items-center gap-2 border border-border bg-card hover:bg-muted text-foreground px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                Filters
              </button>
            }
          />

          <DialogContent className="max-w-md w-full bg-card border border-border p-6 rounded-2xl text-foreground shadow-2xl! ring-0! outline-hidden">
            <DialogHeader className="flex flex-row items-center justify-between border-b border-border pb-4">
              <DialogTitle className="text-xl font-bold text-foreground tracking-tight">Filters</DialogTitle>
              <DialogClose
                render={
                  <button className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <X className="h-5 w-5" />
                  </button>
                }
              />
            </DialogHeader>

            <div className="space-y-5 py-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role</label>
                <input
                  type="text"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  placeholder="Search by role (e.g. Senior Designer)"
                  className="w-full bg-background border border-border focus:border-[#4BC957] text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Skills</label>
                <div className="flex flex-wrap gap-2 items-center w-full bg-background border border-border focus-within:border-[#4BC957] rounded-xl p-2.5 transition-colors">
                  {skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-muted text-foreground border-border rounded-md px-2 py-1 flex items-center gap-1.5 font-medium"
                    >
                      {skill}
                      <button onClick={() => handleRemoveSkill(skill)} className="text-muted-foreground hover:text-foreground">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleAddSkill}
                    placeholder="Add skills..."
                    className="flex-1 min-w-[120px] bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none py-1 text-sm"
                  />
                </div>
                <p className="text-[13px] text-muted-foreground">Separate skills with a comma or press Enter.</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Experience Level</label>
                <Select value={experienceLevel} onValueChange={(val) => setExperienceLevel(val || "All Levels")}>
                  <SelectTrigger className="w-full bg-background border-border text-foreground rounded-xl px-4 py-6 text-sm focus:border-[#4BC957] focus:ring-0! transition-colors">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border text-foreground rounded-xl overflow-hidden shadow-xl">
                    <SelectItem value="All Levels">All Levels</SelectItem>
                    <SelectItem value="Entry Level">Entry Level (0-2 yrs)</SelectItem>
                    <SelectItem value="Mid Level">Mid Level (2-5 yrs)</SelectItem>
                    <SelectItem value="Senior">Senior (5-8 yrs)</SelectItem>
                    <SelectItem value="Lead / Director">Lead / Director (8+ yrs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-border pt-4 mt-2">
              <DialogClose
                render={
                  <button className="border border-border hover:bg-muted text-foreground font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors">
                    Cancel
                  </button>
                }
              />
              <button
                onClick={() => setIsFiltersOpen(false)}
                className="bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98]"
              >
                Apply Filters
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Candidates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {initialCandidates.map((candidate, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-[#4BC957]/30 transition-all duration-300 relative group cursor-pointer shadow-sm"
          >
            {/* Top row: Avatar, Name, Role, Match score */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-muted border border-border flex items-center justify-center font-bold text-foreground text-sm shadow-inner flex-shrink-0">
                  {candidate.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground tracking-tight">{candidate.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{candidate.role}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-[#4BC957] bg-[#4BC957]/10 border border-[#4BC957]/20 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                {candidate.match}
              </span>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-1.5">
              {candidate.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-muted border border-border text-muted-foreground text-[13px] font-semibold px-2.5 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience, Location & Credit cost */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-muted-foreground font-medium border-t border-border pt-3 text-sm">
              <span>{candidate.exp} • {candidate.location}</span>
              <span>{candidate.credits} credits to unlock</span>
            </div>

            {/* Footer actions */}
            <div className="flex items-center gap-2 pt-1.5 flex-wrap">
              <Link
                href={`/company/candidates/profile?id=${candidate.id}`}
                className="flex-1 bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#4BC957]/5 active:scale-[0.98]"
              >
                <Lock className="h-3.5 w-3.5" />
                View profile
              </Link>
              <Link href={`/company/inbox?id=${candidate.id}`} className="p-2.5 bg-muted border border-border text-muted-foreground hover:text-foreground rounded-xl hover:border-[#4BC957]/40 transition-colors">
                <MessageSquare className="h-4 w-4" />
              </Link>
              <Link href={`/company/candidates/interview?id=${candidate.id}`} className="p-2.5 bg-muted border border-border text-muted-foreground hover:text-foreground rounded-xl hover:border-[#4BC957]/40 transition-colors">
                <Bot className="h-4 w-4" />
              </Link>
              <button className="p-2.5 bg-muted border border-border text-muted-foreground hover:text-foreground rounded-xl hover:border-[#4BC957]/40 transition-colors">
                <FileText className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
