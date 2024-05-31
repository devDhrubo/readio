import { Link, useLoaderData, useParams } from 'react-router-dom';

const CategoryWiseBookList = () => {
    const { category } = useParams();
    const books = useLoaderData();

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-10'>
                {
                    books.map((book, index) => {
                        return (
                            <div key={index} className="card w-80 h-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={book.image} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{book.name}</h2>
                                    <div className="card-actions">
                                        <Link to={`/book-details/${book._id}`}>
                                            <button className="btn btn-primary">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default CategoryWiseBookList;
