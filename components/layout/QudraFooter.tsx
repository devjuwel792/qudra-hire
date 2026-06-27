import Link from "next/link";

export default function QudraFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#080C14] text-slate-500 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-lg font-extrabold text-white">
              Qudra<span className="text-[#4BC957]">Hire</span>
            </span>
          </Link>
          <p className="leading-relaxed text-slate-500">
            AI-powered hiring for the GCC. Stop searching. Start progressing.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-200 font-semibold">Platform</h4>
          <ul className="space-y-2">
            {["Find jobs", "Pricing"].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="hover:text-slate-300 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-200 font-semibold">Company</h4>
          <ul className="space-y-2">
            {["About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="hover:text-slate-300 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
        <span>© 2026 QudraHire. All rights reserved.</span>
        <span className="flex items-center gap-2">
          Built for the GCC
          <span className="mx-1 text-slate-700">•</span>
          <Link href="/contact?lang=en" className="hover:text-slate-400 transition-colors">EN</Link>
          <span className="text-slate-700">/</span>
          <Link href="/contact?lang=ar" className="hover:text-slate-400 transition-colors">العربية</Link>
        </span>
      </div>
    </footer>
  );
}
