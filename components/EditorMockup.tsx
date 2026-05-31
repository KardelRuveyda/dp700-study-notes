// components/EditorMockup.tsx
// Cloud Shell editor (Monaco) görünümünü taklit eden mockup.
"use client";

import { motion } from "framer-motion";

type Props = {
  files: string[];
  activeFile: string;
  code: string;
  caption?: string;
};

export default function EditorMockup({ files, activeFile, code, caption }: Props) {
  const lines = code.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden border border-slate-700 shadow-lg"
    >
      <div className="bg-[#1b2735] px-3 py-1.5 text-xs text-slate-200 flex items-center gap-3 border-b border-slate-700">
        <span className="px-2 py-0.5 rounded bg-slate-700">PowerShell ▾</span>
        <span className="ml-auto opacity-60 text-[11px]">{activeFile}</span>
      </div>
      <div className="flex bg-[#1e1e1e] min-h-[220px]">
        {/* file tree */}
        <div className="w-48 bg-[#252526] text-slate-300 text-xs py-2">
          <div className="px-3 pb-2 uppercase tracking-wider text-slate-500">Files</div>
          {files.map((f) => (
            <div
              key={f}
              className={`px-3 py-1 cursor-default ${
                f === activeFile ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e]"
              }`}
            >
              {f}
            </div>
          ))}
        </div>
        {/* code area */}
        <div className="flex-1 font-mono text-[13px] leading-6 py-2">
          {lines.map((ln, i) => (
            <div key={i} className="flex">
              <span className="w-10 text-right pr-3 text-slate-600 select-none">{i + 1}</span>
              <span className="text-amber-200">{ln || "\u00A0"}</span>
            </div>
          ))}
        </div>
      </div>
      {caption && (
        <div className="bg-slate-900 text-slate-400 text-xs px-3 py-2 border-t border-slate-700">
          {caption}
        </div>
      )}
    </motion.div>
  );
}
