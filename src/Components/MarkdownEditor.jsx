import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import rehypeHighlight from 'rehype-highlight'

const MarkdownEditor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
          previewOptions={{}}
        />
        {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      </div>
    );
}

export default MarkdownEditor
