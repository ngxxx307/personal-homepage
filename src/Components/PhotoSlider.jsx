import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"

const PhotoSlider = ({ images }) => {
    const [imageIndex, setimageIndex] = useState(0)

    const showPrevImage = () => {
        setimageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }
    const showNextImage = () => {
        setimageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden", alignItems: "center", flexGrow: 0, flexShrink: 0 }}>
                {images.map(image => {
                    return <img key={image.alt} alt={image.alt} src={image.url} className='img-slider-img' style={{ translate: `${-100 * imageIndex}%` }}></img>
                })}
            </div>
            <button className='img-slider-btn' style={{ left: 0 }} onClick={showPrevImage} aria-label='View Previous Image'>
                <ArrowBigLeft />
            </button>
            <button className='img-slider-btn' style={{ right: 0 }} onClick={showNextImage} aria-label='View Next Image'>
                <ArrowBigRight />
            </button>
            <div style={{
                position: "absolute",
                bottom: "0.5rem",
                left: '50%',
                translate: '-50%',
                display: 'flex',
                gap: '0.25rem'
            }}>
                {images.map((image, index) => {
                    return <button key={image.alt} className='img-slider-dot-btn' onClick={() => setimageIndex(index)}>
                        {index === imageIndex ? <CircleDot /> : <Circle />}
                    </button>
                })}
            </div>
        </div>
    )
}

export default PhotoSlider