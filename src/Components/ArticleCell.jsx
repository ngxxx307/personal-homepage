import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import { DeleteArticle, EditArticle } from './Popup/Popup'
import { ErrorMessage } from './Popup/Popup';
import DeleteButton from "../assets/Buttons/DeleteButton.png"
import EditButton from "../assets/Buttons/EditButton.png"

const ArticleCell = ({article}) => {
  const authState = useSelector((state) => state.auth)
  
  const [deletePopup, setDeletePopup] = useState(false)
  const [editPopup, setEditPopup] = useState(false)
  const [errorPopup, setErrorPopup] = useState(null);

  return (
    <div>
      <Link to={`/Blog/Article/${article.id}`} className='  no-underline'>
       <h1 className='text-oliveDark font-roboto font-semibold'>{article.title}</h1>
      </Link>
        <div className='grid grid-cols-2'>
          <div className='text-left w-full font-roboto text-medium'>{new Date(article.createdAt).toDateString()}</div>
          {authState?.accessToken && authState?.roles?.includes("admin") && <div className='flex flex-row-reverse'>
            {<button>
              <img src={DeleteButton} className='object-contain	h-6 w-6 mx-1' onClick={() => setDeletePopup(!deletePopup)}></img>
            </button>}
            <button>
              <img src={EditButton} className='object-contain	h-6 w-6 mx-1' onClick={() => setEditPopup(!editPopup)}></img>
            </button>
          </div>}
        </div>
        { deletePopup && <DeleteArticle popup={deletePopup} setPopup={setDeletePopup} id={article.id} errorPopup={errorPopup} setErrorPopup={setErrorPopup} />}
        { editPopup && <EditArticle popup={editPopup} setPopup={setEditPopup} article={article} errorPopup={errorPopup} setErrorPopup={setErrorPopup} />}
        { errorPopup && <ErrorMessage error={errorPopup} setError={setErrorPopup} />}
    </div>
  )
}

export default ArticleCell
