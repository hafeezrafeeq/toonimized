
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Opinions() {

    const imagePairs = [
        ["https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/fans_vuecfm.jpg", "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939814/Image1_1_ywp9q2.jpg"],
        ["https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/originalGirl_pv2n0h.png", "https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/artificialGirl_mkflpr.png"],
        ["https://res.cloudinary.com/dapozvnbr/image/upload/v1600762629/Opinion_Image_2_qgjban.jpg", "https://res.cloudinary.com/dapozvnbr/image/upload/v1600762586/Opinion_Image_pqsvzs.png"],
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
    };


    return (
        <>
            <div className="bg-stone-800 pb-10 items-center">
                <div className=" flex justify-around  pt-40 pb-60 ">


                    <div className="flex flex-col  mr-40  ">
                        <div className="custpmizeCircle absolute top-1342  right-290 w-20 h-20 rounded-full"></div>
                        <img className=" w-90 absolute top-1350" src="https://toonimized.netlify.app/static/media/shirtDesign.ae2a0493.png" alt="" />
                        <img className=" w-80 absolute top-1400 z-2 mt-30" src="https://toonimized.netlify.app/static/media/mobileCover.9c27fff0.png" alt="" />
                        <img className=" w-90 absolute z-1 top-1500 " src="https://toonimized.netlify.app/static/media/bookCover.4576bcbd.png" alt="" />

                    </div>



                    <div className="raleway text-stone-50 font-bold text-8xl    text-end z-10" >
                        <h1>Opinions?</h1>

                        <div className="text-stone-50 raleway text-3xl font-bold mt-8">
                            <div className="text-stone-50 raleway text-4xl font-bold mt-8">
                                <p>Ana & Jorge. 28 & 32 y.o, Married</p></div>
                        </div>

                        <div className="text-stone-500 raleway text-2xl font-bold mt-6">
                            <p>Pittsburgh, United States</p>
                        </div>

                        <div >
                            <p className="text-stone-50 raleway text-xl font-bold  mt-6 w-160" >“My husband is a huge fan of the TV series and was extremely pleased with the picture.
                                The most beautiful day of our life is now printed on a canvas hanging on our living
                                room wall.”</p>
                        </div>

                        <div className="relative w-full max-w-4xl mx-auto mt-10">
                            <div className="grid grid-cols-2 gap-4">
                                {imagePairs[currentIndex].map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`slide-${idx}`}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg transition duration-500"
                                    />
                                ))}
                            </div>

                            {/* Left Arrow */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 gredient bg-opacity-50 text-stone-900 p-2 rounded-full hover:bg-opacity-75 transition"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 gredient bg-opacity-50 text-stone-900 p-2 rounded-full hover:bg-opacity-75 transition"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center relative bottom-180 z-0">
                <img src="https://toonimized.netlify.app/static/media/quotes.a635bff8.png" alt="" />
            </div>








        </>
    )


}

export default Opinions;