
import React, { useState } from 'react';


const CartoonStyle = () => {
    const itemImages = [
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087973/Home/turn-me-yellow_2x_uguj33.svg',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-family_xmefva.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-cartman_q7zql9.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-goku_f1pdnc.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-rick_nb6rpb.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088040/Home/turn-me-future_uh7oxf.png',

    ];

    const mainSliderImages = [
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Dragonball1_jjwsxg.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087655/Home/Southpark1_u3mgqr.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087652/Home/Family_Guy1_uem0rp.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Futurama1_sppeoo.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087651/Home/Simpsons1_uxw7ji.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMainClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mainSliderImages.length);
    };

    return (
        <div className="flex  justify-center gredient">
            {/* Section Heading */}
            <div className="raleway text-stone-800 font-bold text-6xl w-160 pt-100">
                <h1>Choose between popular cartoon styles</h1>
                <div className="bg-stone-800 w-40 rounded-lg h-2 mt-4"></div>
                <p className="text-stone-800 raleway text-lg md:text-xl font-bold pb-100">
                    Curious About how the Customization is Made?
                </p>
            </div>

      
            <div className='relative top-120 , right-20 w-160 h-160 flex justify-center items-center'>
                <div
                    className="absolute top-1/8  l m-auto w-120 h-120 rounded-full flex justify-center items-center overflow-hidden -translate-x-1/9 -translate-y-1/2 z-10 cursor-pointer custpmizeCircle"
                    onClick={handleMainClick}
                >
                    <div className='flex justify-center items-center'> <img
                        src={mainSliderImages[currentIndex]}
                        alt={`Main ${currentIndex}`}
                        className=" object-cover w-1/2 h-1/2"
                    /></div>
                </div>

                {/* 8 Item Circles in Circle Layout */}
                {itemImages.map((imgSrc, i) => {
                    const angle = (190 / itemImages.length) * i;
                    return (
                        <div
                            key={i}
                            className="absolute w-60 rounded-full overflow-hidden"
                            style={{
                                top: '0%',
                                left: '50%',
                                transform: `translate(-50%, 0) rotate(${angle}deg) translateY(-360px) rotate(-${angle}deg)`,
                            }}
                        >
                            <img
                                src={imgSrc}
                                alt={`item-${i}`}
                                className="w-full mt-2 h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>


        </div>
    );
};

export default CartoonStyle;

