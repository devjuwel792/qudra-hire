import CompanySidebar from "@/components/company/CompanySidebar";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark min-h-screen w-full bg-[#080C14] text-slate-100 flex flex-row overflow-hidden font-sans">
      <CompanySidebar />
      <main className="flex-1 h-screen overflow-y-auto bg-[#080C14]">
        {children}
      </main>
    </div>
  );
}
