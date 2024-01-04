import React from 'react'
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import remarkTextr from 'remark-textr'

const MarkdownDisplayer = ({markdown}) => {
  return (
    <div>
       <Markdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            console.log("props:", props);
            console.log("match", match);
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={docco}
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
  )
}

export default MarkdownDisplayer
