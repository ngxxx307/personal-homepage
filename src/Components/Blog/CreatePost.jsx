import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkdownDisplayer from "../MarkdownDisplayer";

const CreatePost = ({popup, setPopup}) => {
    const [input, setInput] = useState('')
  return (
    <div className="fixed flex flex-wrap top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[75%] w-[75%] z-50">
          <textarea className="w-[50%] h-[100%] outline outline-2 p-2" value={input} placeholder="Write your Markdown here..." onChange={(e) => setInput(e.target.value)}> </textarea>
          <div className="w-[50%] h-[100%] outline outline-2 overflow-scroll bg-white p-2">
            <MarkdownDisplayer markdown={input}/>
          </div>
          <div className="flex flex-row-reverse w-full">
            <button onClick={() => {setPopup(!popup)}} className="z-50 bg-soapStone rounded-2xl p-2 m-2">Create</button>
          </div>
      </div>
  );
};

const Component = ({language, value}) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CreatePost;
