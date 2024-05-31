// import bio from '../assets/biography.jpg';
// import romance from '../assets/romance.jpg';
// import kids from '../assets/kids.jpg';
// import horror from '../assets/horror.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookCategory = () => {

    // const books = useLoaderData();
    // console.log(books)
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://readio-server.vercel.app/bookList');
            const data = await response.json();
            const categoryData = data.map(item => item.category);
            const uniqueCategories = new Set(categoryData);
            setCategories(Array.from(uniqueCategories));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <div>
            <div className='text-center dark:text-white'>
                <h2 className='lg:text-4xl text-3xl font-bold mt-5 mb-4'>All Category</h2>
                <p>Explore Our Latest Category of Books and Grab Yours</p>
            </div>
            <div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-10 '>
                    {categories.map((category, index) => (
                        <div key={index} className="card w-72 dark:bg-gray-900 dark:text-white bg-gray-100 shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title">{category}</h2>
                                <div className="card-actions">
                                    <Link to={`/book/${category}`}><button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566]">Explore</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookCategory;