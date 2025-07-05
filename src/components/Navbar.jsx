function Appbar() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col gredient  w-3/4">
                <div className="flex justify-between  gredient p-8 items-center  ">

                    <div><img className="w-58" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo_hafewu.png" alt="img" /></div>

                    <div>
                        <ul className="flex gap-10 raleway font-bold text-lg ">
                            <li><a href="">Home</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Artists</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="raleway text-stone-800 font-bold text-8xl mt-35  p-25" >
                    <h1>Cartoonize Yourself</h1>
                    <div className="bg-stone-800 w-40 rounded-lg h-2 mt-6"></div>
                    <div className="text-stone-800 raleway text-2xl font-bold mt-6">
                        <p>No generated animations! <br />
                            Enjoy an artist’s personalized work of you!</p>
                    </div>
                </div>
                <p className="text-ston-800 text-4xl absolute right-200 bottom-2">+</p>
                <p className="text-ston-800 text-5xl absolute right-220 bottom-100">+</p>
                <p className="text-ston-800 text-4xl absolute right-200 bottom-100">+</p>
            </div>

            <div className="flex flex-col w-1/2  ">
                <div className="flex justify-center gap-18  items-center bg-stone-900 p-7">
                    <div><i className="fa-solid fa-cart-shopping text-2xl text-stone-400"></i></div>
                    <button class="btn-nav hover:bg-blue-600bg text-white font-semibold py-2 px-4 rounded-lg shadow">
                        GET STARTED
                    </button>
                </div>

                <div className="flex">

                    <div className="flex flex-col">
                        <img className="w-full " src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086924/Home/home_i1wlpb.png" alt="img" />
                        <img className="w-1/2 absolute top-63 + right-1" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600085486/Home/GREENportalImp.new_1_3_3_jykcsl.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Appbar