import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddBook = () => {

    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        // Check if the entered value is less than 6
        if (value === '' || (value >= 0 && value < 6)) {
            setRating(value);
        }
    };

    const handleAddBook = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const email = user.email;

        const info = { image, name, quantity, author, category, rating, description, email };

        fetch('https://readio-server.vercel.app/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire("Book Added Successfully");
                form.reset();
            })

        console.log(info);
    }


    return (
        <div>
            <div className="flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl dark:text-white font-bold text-center mt-4 underline">Add Your Book</h1>
                </div>
                <div className="card">
                    <form onSubmit={handleAddBook} className="card-body lg:w-2/3 md:w-1/2 lg:mx-auto md:ml-24">
                        <div className="lg:flex md:flex items-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Image" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full" >
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="lg:flex md:flex items-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Quantity of Book</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Quantity of Book" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Author Name</span>
                                </label>
                                <input type="text" name="author" placeholder="Author Name" className="input input-bordered" required />
                            </div>

                        </div>
                        <div className="lg:flex md:flex items-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Category Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input onChange={handleChange} value={rating} type="number" name="rating" placeholder="Rating (0-5)" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea type="text" name="description" placeholder="Short Description" className="textarea textarea-bordered"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566]">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;