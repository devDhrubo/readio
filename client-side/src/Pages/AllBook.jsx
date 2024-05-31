import { useEffect, useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { IoGrid } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AllBook = () => {
    const [viewType, setViewType] = useState('grid');
    const [displayBook, setDisplayBooks] = useState([]);
    const [search, setSearch] = useState('');
    console.log(search)
    // search function

    const setGridView = () => {
        setViewType('grid');
    };

    const setListView = () => {
        setViewType('list');
    };

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://readio-server.vercel.app/bookList')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooks(data)
            })
    }, [])

    const handleSpotFilter = filter => {
        if (filter === 'quantity') {
            const sortedSpot = [...books].filter(book => book.quantity > 0);
            setDisplayBooks(sortedSpot);
        }
    }
    useEffect(() => {
        setDisplayBooks(books);
    }, [books])



    return (

        <div>
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
            <div>
                <label className="input input-bordered flex items-center gap-2 max-w-md mx-auto mt-2">
                    <input
                    onChange={(e)=>setSearch(e.target.value)}
                        type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>

            <div className='flex lg:justify-end justify-center container items-center gap-2 mt-3 ml-16'>
                <button onClick={setGridView}>
                    <IoGrid className='text-2xl text-[#C41981] hover:text-[#9b1566]'></IoGrid>
                </button>
                <button onClick={setListView}>
                    <FaListUl className='text-2xl text-[#C41981] hover:text-[#9b1566]'></FaListUl>
                </button>
            </div>


            {viewType === 'grid' ? (
                <div className="product-grid">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:p-5 mx-auto container mt-2">
                        {
                            displayBook.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                            }).map(book => <div key={book._id}>
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
            ) : (
                <div className="product-list">
                    {
                        <div className="overflow-x-scroll container mx-auto lg:p-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Author</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        displayBook?.map(book =>
                                            <tr key={book._id}>
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{book.name}</td>
                                                <td>{book.category}</td>
                                                <td>{book.author}</td>
                                                <td>{book.quantity}</td>
                                                <td>
                                                    <Link to={`/updateBook/${book._id}`}>
                                                        <button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566] ">Update<GrUpdate></GrUpdate></button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )

                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            )}
        </div>
    );
};

export default AllBook;
