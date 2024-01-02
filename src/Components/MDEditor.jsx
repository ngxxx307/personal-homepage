import React, {useRef} from 'react'
import MDEditor from '@uiw/react-md-editor';

const MDEditor = () => {
    const ref = useRef<MDXEditorMethods>(null)
    return (
      <>
        <button onClick={() => ref.current?.setMarkdown('new markdown')}>Set new markdown</button>
        <button onClick={() => console.log(ref.current?.getMarkdown())}>Get markdown</button>
        <MDXEditor ref={ref} markdown='hello world' onChange={console.log} />
      </>)
}

export default MDEditor
