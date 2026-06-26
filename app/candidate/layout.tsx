import CandidateSidebar from "@/components/candidate/CandidateSidebar";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark min-h-screen w-full bg-[#080C14] text-slate-100 flex flex-row overflow-hidden font-sans">
      <CandidateSidebar />
      <main className="flex-1 h-screen flex flex-col bg-[#080C14] overflow-hidden">
        {/* Header Bar */}
        <header className="h-16 border-b border-[#1E293B]/40 flex items-center px-8 flex-shrink-0">
          <h1 className="text-xl font-bold text-white">Welcome</h1>
        </header>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
