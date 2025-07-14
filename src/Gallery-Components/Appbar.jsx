import { Link } from "react-router-dom"

function Appbar() {
    return (
        <div className="gredient">
            <div className="flex justify-between gredient-nav appbar px-12">
                <div className="flex justify-center gap-18  p-6  items-center  ">

                    <div><img className="w-50" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo_hafewu.png" alt="img" /></div>

                    <nav>
                        <ul className="flex gap-10 raleway font-bold text-lg">
                            <Link className="text- hover:text-amber-200" to="/">Home</Link>
                            <Link className="text- hover:text-amber-200" to="/gallery">Gallery</Link>
                            <Link className="text- hover:text-amber-200" to="/articts">Articts</Link>
                            <Link className="text- hover:text-amber-200" to="/faq">FAQ</Link>
                        </ul>
                    </nav>
                </div>

                <div className="flex justify-center gap-18  items-center ">
                    <div><i className="fa-solid fa-cart-shopping text-2xl text-stone-200"></i></div>
                    <button class="btn-nav hover:bg-white text-white font-semibold py-2 px-4 rounded-lg shadow">
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>


    )

}
export default Appbar
