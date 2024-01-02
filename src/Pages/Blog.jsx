import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| 1 | 2 |
`

const Blog = () => {
    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]}>
                {markdown}
            </Markdown>
        </div>
    )
}

export default Blog
