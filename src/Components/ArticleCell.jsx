import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from "../assets/Buttons/DeleteButton.png"
import EditButton from "../assets/Buttons/EditButton.png"
import { DeleteArticle, EditArticle } from './Popup/Popup'

const ArticleCell = ({article}) => {
  
  const [deletePopup, setDeletePopup] = useState(false)
  const [editPopup, setEditPopup] = useState(false)

  return (
    <div>
      <Link to={`/Blog/Article/${article.id}`} className=' text-dark no-underline'>
       <h1>{article.title}</h1>
        <p>{article.subtitle}</p>
      </Link>
        <div className='grid grid-cols-2'>
          <div className='text-left w-full'>{new Date(article.date).toDateString()}</div>
          <div className='flex flex-row-reverse'>
            <button>
              <img src={DeleteButton} className='object-contain	h-6 w-6 mx-1' onClick={() => setDeletePopup(!deletePopup)}></img>
            </button>
            <button>
              <img src={EditButton} className='object-contain	h-6 w-6 mx-1' onClick={() => setEditPopup(!editPopup)}></img>
            </button>
          </div>
        </div>
        { deletePopup && <DeleteArticle popup={deletePopup} setPopup={setDeletePopup} id={article.id} />}
        { editPopup && <EditArticle popup={editPopup} setPopup={setEditPopup} article={article} />}
    </div>
  )
}

export default ArticleCell
