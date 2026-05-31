// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Exam Preparation · DP-700",
  description: "Gamified Microsoft Fabric DP-700 exam preparation experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-200">
        <LangProvider>
          <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>
        </LangProvider>
      </body>
    </html>
  );
}
