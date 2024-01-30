import React, { useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { CreateArticle, Logout, ErrorMessage } from "../Popup/Popup";
import { getArticles } from '../../Requests/ArticleRequest'
import CreateButton from "../../assets/Buttons/CreateButton.png";
import LogoutButton from "../../assets/Buttons/LogoutButton.png";
import ArticleCell from "../ArticleCell";

const ArticleList = () => {
  const [filterState, setfilterState] = useState(false);
  
  const [createPopup, setCreatePopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(null);
  const authState = useSelector((state) => state.auth);

  const result = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  if (result.isLoading) {
    return <div>loading data...</div>;
  }
  if (result.isError) {
    return <div>Error</div>;
  }
  const articles = result.data;
  
  return (
    <div className="p-2 lg:px-24">
      <div className="flex bg-white bg-opacity-50 rounded-3xl px-8 py-4 m-4  items-center transition-all duration-100">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input className="grow mx-4 px-4 py-2 inline-block align-baseline bg-transparent outline-none focus:text-3xl transition-all duration-100" placeholder="Title"></input>
          <div className={`relative flex flex-col transition-all ${filterState ? "scale-100 " : "scale-150"}`}>
            <div className={`rounded-3xl border-gray-500 border-2 px-4 text-center align-middle transition-all duration-100 cursor-pointer ${filterState ? "" : "bg-gray-300 bg-opacity-50"}`} onClick={() => setfilterState(!filterState)}>
              <span className="mr-2">Tags</span>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className={ `absolute top-0 translate-y-[100%] transition-all origin-top ${filterState ? "scale-y-0" : "scale-y-100"}`}>test</div>
          </div>
      </div>
  
      <div
        id="BlogList"
        className=" bg-soapStone px-8 py-4 rounded-2xl bg-opacity-50 divide-y divide-dark w-auto">
        {articles.map((blogData) => (
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
