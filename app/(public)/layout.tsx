import React from "react";
import QudraHeader from "@/components/layout/QudraHeader";
import QudraFooter from "@/components/layout/QudraFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QudraHeader />
      <main className="flex-1">{children}</main>
      <QudraFooter />
    </>
  );
}
