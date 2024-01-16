import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import emoji from "remark-emoji";

const MarkdownDisplayer = ({ markdown }) => {
  return (
    <div className="prose">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[[remarkGfm], [emoji]]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={atomOneDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default MarkdownDisplayer;
