import React, { useState } from 'react';

const cartoonItems = [
    'Anime Style',
    'Disney Style',
    'Pixar Look',
    'Marvel Style',
    'Classic Toon',
];

const sliderImages = [
    'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Dragonball1_jjwsxg.png',
    'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087655/Home/Southpark1_u3mgqr.png',
    'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087652/Home/Family_Guy1_uem0rp.png',
    'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Futurama1_sppeoo.png',
    'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087651/Home/Simpsons1_uxw7ji.png',

];

const CartoonStyle = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
        );
    };

    return (
        < >
            <div className="gredient w-screen h-auto p-10 md:p-20">


                {/* Content Area */}
                < div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-10" >

                    {/* Right: Image Slider */}
                    < div className=" md:w-2/3 custpmizeCircle items-center " >
                        <div className='m-auto flex justify-center items-center '><img
                            src={sliderImages[currentIndex]}
                            alt="cartoon"
                            className='w-80' />
                        </div>

                        {/* Prev Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-yellow-300"
                        >
                            ‹
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-yellow-300"
                        >
                            ›
                        </button>
                    </div>

                    {/* Left: Style List */}
                    < div className="w-full md:w-1/3" >
                        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Styles</h2>
                        <ul className="space-y-3 text-stone-800 font-medium">
                            {cartoonItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-yellow-100 px-4 py-2 rounded hover:bg-yellow-300 transition cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div >


                {/* Section Heading */}
                <div className="raleway text-stone-800 font-bold text-4xl md:text-6xl w-full md:w-2/3 my-10">
                    <h1>Choose between popular cartoon styles</h1>
                    <div className="bg-stone-800 w-40 rounded-lg h-2 mt-4"></div>
                    <p className="text-stone-800 raleway text-lg md:text-xl font-bold mt-4">
                        Curious about how the customization is made?
                    </p>
                </div>
            </div>
        </>
    );
};

export default CartoonStyle;
