import React from "react";
import clipboard from "clipboard";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ColorCopy() {
  const [copied, setCopied] = React.useState(false);
  const palette = [
    "#fafafa",
    "#ddefd3",
    "#badfa6",
    "#98d07a",
    "#75c04d",
    "#53b021",
    "#428d1a",
    "#326a14",
    "#21460d",
    "#112307",
    "#000000",
  ];

  const content = `
  module.exports = {
    theme: {
      colors: {
        'palette': {
          '50': '${palette[0] || ""}',
          '100': '${palette[1] || ""}',
          '200': '${palette[2] || ""}',
          '300': '${palette[3] || ""}',
          '400': '${palette[4] || ""}',
          '500': '${palette[5] || ""}',
          '600': '${palette[6] || ""}',
          '700': '${palette[7] || ""}',
          '800': '${palette[8] || ""}',
          '900': '${palette[9] || ""}',
          '950': '${palette[10] || ""}',
        }
      }
    }
  }
    `;

  function handleCopyContent() {
    clipboard.copy(content);
    setCopied(true);
  }

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={handleCopyContent}
          className="ml-auto px-6 py-2 flex gap-4 items-center bg-cod-gray-950 text-cod-gray-50 rounded-lg"
        >
          <Copy className="h-5 w-5" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <SyntaxHighlighter language="javascript" style={dracula}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
}
