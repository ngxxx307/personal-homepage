import React, { useEffect, useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { CreateArticle, Logout, ErrorMessage } from "../Popup/Popup";
import { getArticles, getHashtags } from '../../Requests/ArticleRequest'
import CreateButton from "../../assets/Buttons/CreateButton.png";
import LogoutButton from "../../assets/Buttons/LogoutButton.png";
import ArticleCell from "../ArticleCell";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const ArticleList = ({debouncedQuery, searchQuery, selectedTags}) => {
  const [createPopup, setCreatePopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(null);
  const authState = useSelector((state) => state.auth);

  const articlesResult = useQuery({
    queryKey: ["articles", debouncedQuery, selectedTags],
    queryFn: getArticles,
  });

  
  if (articlesResult.isLoading) {
    return <LoadingPage />;
  }
  else if (articlesResult.isError) {
      return <ErrorPage />;
  }

  const articles = articlesResult.data;

  return (
    <div className="p-2 lg:px-24">
      {articles?.length === 0 && <div className="px-8">No Article found...</div>}
      <div
        id="BlogList"
        className=" bg-soapStone rounded-2xl bg-opacity-50 divide-y divide-dark w-auto px-8">
        {articles?.map((blogData) => (
          <div key={blogData.id} className="p-4">
            <ArticleCell article={blogData} />
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        {authState?.accessToken && authState?.roles?.includes("admin") && (
          <button onClick={() => setCreatePopup(!createPopup)}>
            <img
              src={CreateButton}
              className="object-contain	h-6 w-6 mx-1"
            ></img>
          </button>
        )}
        {authState?.accessToken && (
          <button onClick={() => setLogoutPopup(!createPopup)}>
            <img
              src={LogoutButton}
              className="object-contain h-6 w-6 mx-1"
            ></img>
          </button>
        )}
      </div>
      {createPopup && (
        <CreateArticle popup={createPopup} setPopup={setCreatePopup} errorPopup={errorPopup} setErrorPopup={setErrorPopup} />
      )}
      {logoutPopup && <Logout popup={logoutPopup} setPopup={setLogoutPopup} />}
      {errorPopup && <ErrorMessage error={errorPopup} setError={setErrorPopup} />}
    </div>
  );
};

export default ArticleList;
