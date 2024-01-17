import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { CreateArticle, Logout, ErrorMessage } from "../Popup/Popup";
import { getArticles } from "../../Query/ArticlesQuery";
import CreateButton from "../../assets/Buttons/CreateButton.png";
import LogoutButton from "../../assets/Buttons/LogoutButton.png";
import ArticleCell from "../ArticleCell";

const ArticleList = () => {
  const [createPopup, setCreatePopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(null);
  const authState = useSelector((state) => state.auth);

  const queryClient = useQueryClient();
  const result = getArticles();

  if (result.isLoading) {
    return <div>loading data...</div>;
  }
  if (result.isError) {
    return <div>Error</div>;
  }
  const articles = result.data;

  return (
    <div className="px-24">
      <div
        id="BlogList"
        className=" bg-soapStone rounded-2xl bg-opacity-40 divide-y divide-dark w-auto"
        onClick={() =>
          queryClient.invalidateQueries({ queryKey: ["articles"] })
        }
      >
        {articles.map((blogData) => (
          <div key={blogData.id} className="mx-8 p-4">
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
