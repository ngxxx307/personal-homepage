import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import emoji from "remark-emoji";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  resetErrorBoundary() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const MarkdownDisplayer = ({ markdown }) => {
    return (
      <ErrorBoundary>
      <div className="prose">
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkMath, remarkGfm, emoji]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
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
                <code {...rest} className={className}>{children}</code>
              );
            },
          }}
        />
      </div>
      </ErrorBoundary>
    );
  }


export default MarkdownDisplayer;
