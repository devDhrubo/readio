import book from '../assets/email.png'
const Subscribe = () => {
    return (
        <div>
            <div className="hero dark:bg-gray-800 min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row md:flex-row w-1/2 lg:gap-20 md:gap-10 md:p-4">
                    <img src={book} className="lg:max-w-sm rounded-lg shadow-2xl dark:bg-gray-800" />
                    <div className='dark:text-white'>
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Stay With Us</h1>
                        <p className="py-6 lg:text-center">Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</p>
                        <label className="input input-bordered flex items-center gap-2 ">
                            <input type="text" className="grow" placeholder="Email" />
                            <span className="text-black hover:text-[#c41981] duration-500 cursor-pointer">Subscribe</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;