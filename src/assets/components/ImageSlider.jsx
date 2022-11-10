import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider"

const ImageSlider = () => {
    const [image, setImage] = useState({
        width: document.getElementById('root').offsetWidth - 18,
        height: document.getElementById('root').offsetWidth > 500 ? 400 : 180

    })
    
    function imageWidthChanger() {
        setImage({
            width: document.getElementById('root').offsetWidth - 18,
            height: document.getElementById('root').offsetWidth > 500 ? 400 : 180
        })
    }

    useEffect(() => {
        window.addEventListener('resize', imageWidthChanger)
        return window.removeEventListener('resize', imageWidthChanger())
    }, [])

    const images = [
        { url: "./images/banner/super_saving.webp" },
        { url: "./images/banner/covid_saving.webp" },
        { url: "./images/banner/saving_cooking_product.webp" },
        { url: "./images/banner/saving_daily_products.webp" },
    ];
    return (
        <div className='image-slider section-padding-bgcolor'>
            <SimpleImageSlider style={{marginInline:'auto'}} width={image.width} height={image.height} images={images} autoPlay={true} showBullets={true} showNavs={false} />
        </div>
    )
}

export default ImageSlider