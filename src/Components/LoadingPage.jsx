import React from 'react'

const DummyArticle = () => {
  let tagsNumber = 2;
  console.log(window.innerWidth)
  if (window.innerWidth > 1024) {
    tagsNumber = 5
  }
  return (
    <div className='my-2 font-roboto text-medium px-16 py-4' >
      <div className='flex flex-col mt-2 gap-y-2'>
        <div className='h-12 w-[50%] loading-background'>
        </div>
        <div className='h-8 w-[80%] loading-background'>
        </div>
        <div className='flex grow gap-x-2'>
        {(()  => {
          const td = []
          for (let i = 0; i < tagsNumber; i++) {
            td.push(<div className='px-2 py-1 rounded-3xl bg-gray-300 bg-opacity-75 loading-background w-[33%] lg:w-[5%] h-8'></div>)
          }
            return td
          })()
          }
        </div>
      </div>
    </div>
  )
}

const LoadingPage = () => {
  return (
    <div className='p-2 lg:px-24'>
      <div className='bg-soapStone rounded-2xl bg-opacity-50 divide-y divide-dark w-auto'>
        {(()  => {
          const td = []
          for (let i = 0; i < 5; i++) {
            td.push(<DummyArticle key={i} />)
          }
          return td
        })()
      }
    </div>
    </div>
  )
}

export default LoadingPage
