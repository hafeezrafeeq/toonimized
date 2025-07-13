

import work from '../assets/work.png';
import demoVideo from '../assets/Video.mp4';

function works() {
    return (
        <>
            <div className="flex flex-col items-center justify-center pt-30   min-h-screen text-center bg-stone-50 pb-100 ">
                <h1 className="text-4xl font-bold mb-6 raleway">How it works?</h1>
                <p className="text-md text-gray-900 text-center ">TWorking with our team means 100% customer satisfaction. <br />
                    Our english speaking team pays attention to every tiny detail until the final drawing speaks for itself -</p>
                <h2 className="text-2xl font-bold mt-3 raleway" >Unlimited Revision Rounds </h2>

                <img className=" relative bottom-70 w-220 " src={work} alt="Logo" />
                <div className="custpmizeCircle w-65 h-65 rounded-full relative bottom-240 left-4">
                    <img className='mt-25 relative -right-6' src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088828/Home/cat_eip0vj.png" alt="img" />
                </div>

                <div className='absolute z-10 top-1040 flex flex-col items-center justify-center'>
                    <h1 className="text-4xl font-bold raleway mt-80">...And Behind the Scenes?</h1>
                    <p className="text-1xl text-gray-900 font-bold text-center mt-4">All Hand Drawn ! No generic software! <br />
                        We use professional artists to hand-draw your portrait
                    </p>

                    <div className="flex justify-center items-center h-screen pb-20">
                        <video
                            src={demoVideo}
                            controls
                            autoPlay
                            loop
                            className="w-[65%]  shadow-lg"
                        />
                    </div>
                </div>

                   
                <div className="halfCircle"> </div>

                <div><img className='rotate-180 z-0 w-200 h-180 absolute top-1092 left-60' src="https://toonimized.netlify.app/static/media/neclace.116d1ed1.png" alt="img" /></div>

            </div>




        </>
    );
}

export default works;
