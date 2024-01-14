import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { CreateArticle, Logout } from "../Popup/Popup";
import { getArticles } from "../../Query/ArticlesQuery";
import CreateButton from "../../assets/Buttons/CreateButton.png";
import LogoutButton from "../../assets/Buttons/LogoutButton.png";
import ArticleCell from "../ArticleCell";

const ArticleList = () => {
  const [createPopup, setCreatePopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const authState = useSelector((state) => state.auth);

  console.log("authState", authState);
  console.log(authState?.roles?.includes("admin"));

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
        className=" bg-soapStone rounded-2xl bg-opacity-40 divide-y divide-dark"
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
        <CreateArticle popup={createPopup} setPopup={setCreatePopup} />
      )}
      {logoutPopup && <Logout popup={logoutPopup} setPopup={setLogoutPopup} />}
    </div>
  );
};

export default ArticleList;
