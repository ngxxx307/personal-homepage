import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { postArticleRequest, editArticleRequest, deleteArticleRequest } from "../Requests/Request";
import axios from "axios";

export const getArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      axios.get("http://localhost:3001/api/article").then((res) => {
        return res.data;
      }),
  });
};

export const getArticle = (id) => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      axios.get(`http://localhost:3001/api/article/${id}`).then((res) => {
        return res.data;
      }),
  });
};
export const postArticle = () => {
  return useMutation({
    mutationFn: postArticleRequest,
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const editArticle = () => {
    return useMutation({
        mutationFn: editArticleRequest,
        onSuccess: () => {
          window.location.reload();
        },
        onError: (error) => {
          console.log(error);
        },
      });
};

export const deleteArticle = () => {
  return useMutation({
    mutationFn: deleteArticleRequest,
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
