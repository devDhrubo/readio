import axios from "axios";
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const AllBook = () => {

    const [books, setBooks] = useState([]);
    const [displayBook, setDisplayBooks] = useState([]);

    // setDisplaySpot(spots);
    const handleSpotFilter = filter => {
        if (filter === 'quantity') {
            const sortedSpot = [...books].filter(book => book.quantity > 0);
            setDisplayBooks(sortedSpot);
        }
    }
    useEffect(() => {
        setDisplayBooks(books);
    }, [books])

    useEffect(() => {
        // fetch('https://readio-server.vercel.app/bookList')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setBooks(data)
        //     })
        axios.get('https://readio-server.vercel.app/bookList', { withCredentials: true }
            .then(res => {
                setBooks(res.data)
            })
        )
    }, [])

    return (
        <div>
            <div className='text-center '>
                <h2 className='lg:text-4xl text-3xl font-bold mt-5 mb-4'>All Books</h2>
                <p>Explore Our Latest Category of Books and Grab Yours</p>
            </div>
            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#6C0345] hover:bg-[#370525] text-white">
                        Sort By<IoIosArrowDown></IoIosArrowDown>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSpotFilter('quantity')}>
                            <a>Show Available Books</a>
                        </li>
                    </ul>
                </details>
            </div>
    

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 mx-auto container">
                {
                    displayBook?.map(book => <div key={book._id}>
                        <div className="card w-80 h-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={book.image} alt="Shoes" className="rounded-xl w-48 h-44" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{book.name}</h2>
                                <div>
                                    <p><span className="font-bold">Category:</span> {book.category}</p>
                                    <p><span className="font-bold">Author:</span> {book.author}</p>
                                    <p><span className="font-bold">Rating:</span> {book.rating}</p>
                                    <p><span className="font-bold">Quantity:</span> {book.quantity}</p>
                                </div>
                                <div className="card-actions flex items-center">
                                    <Link to={`/updateBook/${book._id}`}>
                                        <button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566] ">Update<GrUpdate></GrUpdate></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllBook;