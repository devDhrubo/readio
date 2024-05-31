import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Author = () => {
    return (
        <div>
            <div className='text-center dark:text-white'>
                <h2 className='lg:text-4xl text-3xl font-bold mt-5 mb-4'>Featured Authors</h2>
                <p>Meet Our Featured Authors</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-5 mx-auto">
                <div>
                    <div className="card lg:w-96 md:w-78 dark:bg-gray-900 bg-gray-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/RBySdLQ/2c7d99fe281ecd3bcd65ab915bac6dd5.jpg" alt="" className="rounded-full w-28 h-28" />
                        </figure>
                        <div className="card-body items-center text-center dark:text-white">
                            <h2 className="card-title text-2xl">Lucy</h2>
                            <p className="text-lg">Horror Writer</p>
                            <p>
                                Lucy, a mistress of horror, crafts chilling tales that linger, captivating readers with her dark imagination and spine-tingling narratives.
                            </p>
                            <div className="card-actions cursor-pointer text-[#C41981]">
                                <p><FaFacebook></FaFacebook></p>
                                <p><FaTwitter></FaTwitter></p>
                                <p><FaInstagram></FaInstagram></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card lg:w-96 md:w-78 dark:bg-gray-900 bg-gray-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/FwjNrSP/fa33964c6065acf9d0348d177213ec83.jpg" alt="" className="rounded-full w-28 h-28" />
                        </figure>
                        <div className="card-body items-center text-center dark:text-white">
                            <h2 className="card-title text-2xl">Selena</h2>
                            <p className="text-lg ">Romance Writer</p>
                            <p>
                                Selena, a luminary in romance, paints love's tapestry with words, weaving heartwarming tales that enrapture readers in passion's embrace.
                            </p>
                            <div className="card-actions cursor-pointer text-[#C41981]">
                                <p><FaFacebook></FaFacebook></p>
                                <p><FaTwitter></FaTwitter></p>
                                <p><FaInstagram></FaInstagram></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card lg:w-96 md:w-78 dark:bg-gray-900  bg-gray-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/BV9B4w7/205e460b479e2e5b48aec07710c08d50.png" alt="" className="rounded-full  w-28 h-28" />
                        </figure>
                        <div className="card-body items-center text-center dark:text-white">
                            <h2 className="card-title text-2xl">John</h2>
                            <p className="text-lg">Kids Writer</p>
                            <p>
                                John, a whimsical wordsmith, conjures enchanting worlds where imagination reigns, inviting young minds on wondrous adventures through his captivating tales.
                            </p>
                            <div className="card-actions cursor-pointer text-[#C41981]">
                                <p><FaFacebook></FaFacebook></p>
                                <p><FaTwitter></FaTwitter></p>
                                <p><FaInstagram></FaInstagram></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;