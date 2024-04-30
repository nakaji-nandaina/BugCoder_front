import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import { Typography } from "@mui/material";

const CodeViewer = ({codeString,language}) => {
  const [copied, setCopied] = useState(false);
  let codes2=''
  codeString.split(/(\\n)/).map((item, index) => {
    codes2+=item.match(/\\n/) ? `
` : item
  })
  console.log({codes2})
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <CopyToClipboard text={codeString} onCopy={handleCopy}>
        <button>{copied ? 'Copied!' : 'Copy code'}</button>
      </CopyToClipboard>
       <SyntaxHighlighter language={language} style={a11yDark} >
       {codes2}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;