import React from 'react'

const Card = ({ title, text, cardColor, content, aspectRatio = 'aspect-square' }) => {
    return (
        <div className={`flex flex-col items-start ${cardColor} h-full rounded-3xl mx-10 overflow-hidden`}>
            <div className='px-4 py-4 w-full'>
                <div className="font-semibold font-syne text-xl text-oliveDark">
                    {title}
                </div>
                <div className="font-semibold font-syne text-normal text-oliveDark">
                    {text}
                </div>
                <div className={`ml-auto mr-auto max-w-md p-2 lg:p-16 ${aspectRatio}`}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Card
