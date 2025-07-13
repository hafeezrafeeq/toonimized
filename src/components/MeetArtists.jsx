function MeetArtists() {
    return (
        <>
            <div className="flex justify-center items-start gredient shadow-lg absolute top-1600">
                <div className="raleway text-stone-800  font-bold text-7xl  w-full h-full p-25" >
                    <h1>Meet The Amazing Artists</h1>
                    <div className=" w-40 rounded-lg h-2 "></div>
                    <div className=" raleway font-bold mt-6">
                        <p className="text-2xl">Meet the team with the skillest hands and most vivid vision.!</p>
                        <p className="text-sm">If you are curious and wish to know more about us, we are one call away!
                            Also for any questions about the artists, check FAQ or contact us.</p>
                    </div>
                    <div className=" ">
                        <button className="btn-color w-60 border-4 text-sm rounded-md ">SEE THE ARTISTS</button>
                    </div>


                </div>

                <div><img className="w-280" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600029842/Home/Done_Transparent_1_1_xkc2dg.png" alt="" /></div>
            </div>

        </>
    )
}

export default MeetArtists;