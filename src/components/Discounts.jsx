function discounts() {

    return (
        <div className="">
            <div className="flex flex-col  items-center mt-60 ">

                <h1 className="text-4xl raleway font-bold">Who doesn’t love Discounts? – Get 15% off</h1>

                <p className="text-xl raleway font-bold w-2/3 text-center mt-6">Enter your email and get 15% discount on your total order,
                    also you’ll be in touch with our latest discounts and news.
                    No worries, we hate spam too.</p>
                <input
                    type="email"
                    placeholder="Add your Email"
                    className="w-150 px-4 bg-stone-300 py-2 mt-12 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />


                <div className="flex items-start gap-2 mt-4">
                    <input
                        type="checkbox"
                        placeholder="Add your Email"
                        className="w-5 h-5 accent-green-600 mt-1  border-gray-50 focus:ring-2 focus:ring-green-500"

                    />
                    <p>I accept the privacy policy.</p>
                </div>

                
                    <div className="mt-12 pb-40 ">
                        <button className="btn-color w-60 border-4 text-sm rounded-md ">Get my discount</button>
                        <p className="text-gray-500 font-bold raleway  mt-2 text-center">Need help? Check FAQ.</p>
                    </div>

                    <div className="halfCircle "></div>
              
            </div>
        </div>
    )
}
export default discounts;