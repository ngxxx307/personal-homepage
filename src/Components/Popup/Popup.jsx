import React, { useState, useContext, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import axios from "axios";

import MarkdownDisplayer from "../MarkdownDisplayer";
import { postArticleRequest, editArticleRequest, deleteArticleRequest, getArticle } from "../../Requests/ArticleRequest";
import { authAction } from "../../Store/Slice/authSlice";
import { useAxiosInterceptor } from "../../Requests/BaseAPI";
import { useField } from "../../hooks/hooks";

export const CreateArticle = ({ popup, setPopup, setErrorPopup }) => {
  useAxiosInterceptor()

  const createArticleMutation = useMutation({
    mutationFn: postArticleRequest,
    onSuccess: () => {
      setPopup(!popup);
      window.location.reload();
    },
    onError: (error) => {
      setErrorPopup(error)
      if (error.response.status === 440) {
        setPopup(!popup);
      }
    },
    retry: 3,
  });

  const title = useField("");
  const subtitle = useField("");
  const imgURL = useField("");
  const hashtags = useField("");
  const markdown = useField("");
  const [publicStatus, setPublicStatus] = useState(false)

  return (
    <div>
      <div className="flex flex-wrap fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[75%] w-[75%] z-50">
        <textarea
          className="w-[50%] outline outline-2 p-2"
          placeholder="Title"
          onChange={title.onChange}
        ></textarea>
        <textarea
          className="w-[50%] outline outline-2 p-2"
          placeholder="Subtitle"
          onChange={subtitle.onChange}
        ></textarea>
        <textarea
          className="w-[50%] outline outline-2 p-2"
          placeholder="imgURL"
          onChange={imgURL.onChange}
        ></textarea>
        <textarea
          className="w-[50%] outline outline-2 p-2"
          placeholder="hashtags"
          onChange={hashtags.onChange}
        ></textarea>
        <textarea
          className="w-[50%] h-[75%] outline outline-2 p-2"
          placeholder="Type your markdown here..."
          {...markdown}
        >
          {" "}
        </textarea>
        <div className="w-[50%] h-[75%] outline outline-2 overflow-scroll bg-white p-2">
          <MarkdownDisplayer markdown={markdown.value} />
        </div>
        <div className="flex flex-row-reverse w-full">
          <button onClick={() => {
              createArticleMutation.mutate({
                title: title.value,
                subtitle: subtitle.value,
                imgURL: imgURL.value,
                hashtags: hashtags.value.split('#').slice(1).map(hashtag => hashtag.replace(/^\s+|\s+$/gm, '')),
                markdown: markdown.value,
                publicStatus
              });
            }}
            className="z-50 bg-soapStone rounded-2xl p-2 m-2">
            Create
          </button>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={publicStatus}
                        readOnly />
                    <div onClick={() => setPublicStatus(!publicStatus)}
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:-translate-y-[50%] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" />
                    <span className="ml-2 text-sm font-medium text-white">
                        Public?
                    </span>
                </label>
        </div>
      </div>
      <div
        id="popup-overlay"
        onClick={() => {
          if (confirm("Are you sure you want to leave now? All text will not be saved") == true) {
            setPopup(!popup);
          }
        }}
      />
    </div>
  );
};

export const EditArticle = ({ popup, setPopup, errorPopup, setErrorPopup, articleID }) => {
  useAxiosInterceptor()

  const putArticleMutation = useMutation({
    mutationFn: editArticleRequest,
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      setErrorPopup(error)
      if (error.response.status === 440) {
        setPopup(!popup);
      }
    },
    retry: 3,
  });

  const title = useField('');
  const subtitle = useField('');
  const imgURL = useField('');
  const hashtags = useField('');
  const markdown = useField('');
  const [publicStatus, setPublicStatus] = useState(false)

  useEffect(()=> {
    getArticle(articleID).then(article => {
      title.setValue(article.title)
      subtitle.setValue(article.subtitle)
      imgURL.setValue(article.imgURL)
      hashtags.setValue(article.hashtags.map(element => '#' + element).join(''))
      markdown.setValue(article.markdown)
      setPublicStatus(article.publicStatus)
    })
}, [])

  return (
    <div>
        <div>
        <div className="flex flex-wrap fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[75%] w-[75%] z-50">
          <textarea
            className="w-[50%] outline outline-2 p-2"
            placeholder="Title"
            {...title}
          ></textarea>
          <textarea
            className="w-[50%] outline outline-2 p-2"
            placeholder="Subtitle"
            {...subtitle}
          ></textarea>
          <textarea
            className="w-[50%] outline outline-2 p-2"
            placeholder="imgURL"
            {...imgURL}
          ></textarea>
                    <textarea
            className="w-[50%] outline outline-2 p-2"
            placeholder="hashtags"
            {...hashtags}
          ></textarea>
          <textarea
            className="w-[50%] h-[75%] outline outline-2 p-2"
            placeholder="Type your markdown here..."
            {...markdown}
          >
          </textarea>
          <div className="w-[50%] h-[75%] outline outline-2 overflow-scroll bg-white p-2">
            <MarkdownDisplayer markdown={markdown.value} />
          </div>
          <div className="flex flex-row-reverse w-full">
            <button onClick={() => {
                putArticleMutation.mutate({
                  title: title.value,
                  subtitle: subtitle.value,
                  imgURL: imgURL.value,
                  hashtags: hashtags.value.split('#').slice(1).map(hashtag => hashtag.replace(/^\s+|\s+$/gm, '')),
                  markdown: markdown.value,
                  publicStatus,
                  id: articleID,
                });
              }}
              className="z-50 bg-soapStone rounded-2xl p-2 m-2">
              Edit
            </button>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
                      <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={publicStatus}
                          readOnly />
                      <div onClick={() => setPublicStatus(!publicStatus)}
                          className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:-translate-y-[50%] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" />
                      <span className="ml-2 text-sm font-medium text-white">
                          Public?
                      </span>
                  </label>
          </div>
        </div>
        <div
          id="popup-overlay"
          onClick={() => {
            if (confirm("Are you sure you want to leave now? All text will not be saved") == true) {
              setPopup(!popup);
            }
          }}
        />
      </div>
      </div>
  );
};

export const DeleteArticle = ({ popup, setPopup, errorPopup, setErrorPopup ,id }) => {
  useAxiosInterceptor()

  const deleteArticleMutation = useMutation({
    mutationFn: deleteArticleRequest,
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      setErrorPopup(error)
      if (error.response.status === 440) {
        setPopup(!popup);
      }
    },
    retry: 3,
  });

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
              {
                setPopup(!popup);
              }
              deleteArticleMutation.mutate({ id});
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        id="popup-overlay"
        onClick={() => {
          setPopup(!popup);
        }}
      />
    </div>
  );
};

export const Logout = ({ popup, setPopup, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="fixed top-[50%] left-[50%] z-50 -translate-x-1/2 -translate-y-1/2 grid items-center rounded-xl bg-amber-50 text-center p-4">
        <div className="p-4">
          <p>Are you sure that you want logout? </p>
        </div>
        <div>
          <button
            className="bg-red-500 rounded-md px-2 py-1 text-white "
            onClick={() => {
              dispatch(authAction.deleteAuth());
              setPopup(!popup);
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div
        id="popup-overlay"
        onClick={() => {
          setPopup(!popup);
        }}
      />
    </div>
  );
};

export const ErrorMessage = ({ error, setError, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="fixed top-[50%] left-[50%] z-50 -translate-x-1/2 -translate-y-1/2 grid items-center rounded-xl bg-amber-50 text-center p-4">
        <div className="p-4">
        <p>Error</p>
          <p>{error.response?.data.message}</p>
        </div>
        <div>
          <button
            className="bg-red-500 rounded-md px-2 py-1 text-white "
            onClick={() => {
              setError(null);
              if (error.response.status === 440) {
                dispatch(authAction.deleteAuth());
              }
            }}
          >
            Okay
          </button>
        </div>
      </div>
      <div
        id="popup-overlay"
        onClick={() => {
          setError(null);
          if (error.response.status === 440) {
            dispatch(authAction.deleteAuth());
          }
        }}
      />
    </div>
  );
};
