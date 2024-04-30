import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";

const GrayBox = ({contentString}) => {
  return (
    <div>
      <SyntaxHighlighter>
        {contentString}
      </SyntaxHighlighter>
    </div>
  );
};

export default GrayBox;