import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Worker as PDFWorker } from "pdfjs-dist/build/pdf.worker.entry";
import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = PDFWorker;

export default function App() {
  const [code, setCode] = useState("\\documentclass{article}\n\\begin{document}\nHello LaTeX!\n\\end{document}");

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-800 border-r border-gray-700 p-3">
        <h2 className="text-lg font-semibold mb-3">📂 Explorer</h2>
        <ul className="text-sm space-y-1">
          <li>main.tex</li>
          <li>packages.sty</li>
          <li>images/</li>
        </ul>
      </aside>

      {/* Editor */}
      <main className="flex-1 border-r border-gray-700">
        <Editor
          height="100%"
          defaultLanguage="latex"
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value)}
        />
      </main>

      {/* PDF Preview */}
      <section className="w-1/3 bg-gray-850 p-3">
        <h2 className="text-lg font-semibold mb-3">📄 Aperçu PDF</h2>
        <div className="bg-gray-700 h-[90%] rounded-lg flex items-center justify-center">
          <p className="text-gray-400 italic">[PDF Preview à venir]</p>
        </div>
      </section>
    </div>
  );
}
