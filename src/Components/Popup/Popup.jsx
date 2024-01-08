import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import MarkdownDisplayer from "../MarkdownDisplayer";
import { postArticle, deleteArticle, putArticle } from "../../Requests/Request";

// Define useField custom hook for textField
const useField = (initialState) => {
    const [value, setValue] = useState(initialState)
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      value,
      onChange
    }
  }

export const CreateArticle = ({popup, setPopup}) => {
      const queryClient = useQueryClient()
      
      const createArticleMutation = useMutation({
        mutationFn: postArticle,
        onSuccess: (newArticle) => {
          const articles = queryClient.getQueryData(['articles'])
          queryClient.setQueryData(['articles'], articles.concat(newArticle))
        },
      })
  
      const title = useField('') 
      const subtitle = useField('')
      const imgURL = useField('')
      const markdown = useField('')
  
    return (
        <div>
            <div className="flex flex-wrap fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[75%] w-[75%] z-50">
                <textarea className="w-[50%] outline outline-2 p-2" placeholder="Title" onChange={title.onChange}></textarea>
                <textarea className="w-[50%] outline outline-2 p-2" placeholder="Subtitle" onChange={subtitle.onChange}></textarea>
                <textarea className="w-full outline outline-2 p-2" placeholder="imgURL" onChange={imgURL.onChange}></textarea>
                <textarea className="w-[50%] h-[75%] outline outline-2 p-2" placeholder="Type your markdown here..." {...markdown}> </textarea>
                <div className="w-[50%] h-[75%] outline outline-2 overflow-scroll bg-white p-2">
                    <MarkdownDisplayer markdown={markdown.value}/>
                </div>
                <div className="flex flex-row-reverse w-full">
                <button 
                    onClick={() => {
                    setPopup(!popup);
                    createArticleMutation.mutate({
                        title: title.value,
                        subtitle: subtitle.value,
                        imgURL: imgURL.value,
                        markdown: markdown.value,
                        date: new Date(),
                    })
                    }} 
                    className="z-50 bg-soapStone rounded-2xl p-2 m-2">
                    Create
                </button>
                </div>
            </div>
            <div id="popup-overlay" onClick={() => {setPopup(!popup);}}/>
        </div>
    );
  };

export const DeleteArticle = ({popup, setPopup, id}) => {
        const queryClient = useQueryClient()
        const deleteArticleMutation = useMutation({
          mutationFn: deleteArticle,
          onSuccess: () => {
            const articles = queryClient.getQueryData(['articles'])
            queryClient.setQueryData(['articles'], articles.filter((article) => article.id != id))
          },
        })
    
      return (
          <div>
                <div className="fixed top-[50%] left-[50%] z-50 -translate-x-1/2 -translate-y-1/2 grid items-center rounded-xl bg-amber-50 text-center p-4">
                    <div className="p-4">
                        <p>Are you sure that you want to delete this article? </p>
                        <p>This action is inreversible</p>
                    </div>
                    <div>
                        <button 
                            className="bg-red-500 rounded-md px-2 py-1 text-white "
                            onClick={() => {
                                {setPopup(!popup);}
                                deleteArticleMutation.mutate(id)
                            }}>
                            Delete
                        </button>
                    </div>
                </div>
              <div id="popup-overlay" onClick={() => {setPopup(!popup);}}/>
          </div>
      );
}

export const EditArticle = ({popup, setPopup, article}) => {

    const queryClient = useQueryClient()

    const putArticleMutation = useMutation({
      mutationFn: putArticle,
      onSuccess: (updatedArticle) => {
        queryClient.setQueryData(['articles'], (old) => old.map((element) => element !== article ? element : updatedArticle ))
      },
    })

    const title = useField(article.title) 
    const subtitle = useField(article.subtitle)
    const imgURL = useField(article.imgURL)
    const markdown = useField(article.markdown)

  return (
      <div>
          <div className="flex flex-wrap fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[75%] w-[75%] z-50">
              <textarea className="w-[50%] outline outline-2 p-2" placeholder="Title" {...title}></textarea>
              <textarea className="w-[50%] outline outline-2 p-2" placeholder="Subtitle" {...subtitle}></textarea>
              <textarea className="w-full outline outline-2 p-2" placeholder="imgURL" {...imgURL}></textarea>
              <textarea className="w-[50%] h-[75%] outline outline-2 p-2" placeholder="Type your markdown here..." {...markdown}> </textarea>
              <div className="w-[50%] h-[75%] outline outline-2 overflow-scroll bg-white p-2">
                  <MarkdownDisplayer markdown={markdown.value}/>
              </div>
              <div className="flex flex-row-reverse w-full">
              <button 
                  onClick={() => {
                  setPopup(!popup);
                  putArticleMutation.mutate({
                      id: article.id,
                      title: title.value,
                      subtitle: subtitle.value,
                      imgURL: imgURL.value,
                      markdown: markdown.value,
                      date: new Date(),
                  })
                  }} 
                  className="z-50 bg-soapStone rounded-2xl p-2 m-2">
                  Edit
              </button>
              </div>
          </div>
          <div id="popup-overlay" onClick={() => {setPopup(!popup);}}/>
      </div>
  );
}