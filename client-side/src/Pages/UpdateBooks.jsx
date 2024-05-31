import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
    const books = useLoaderData();
    const { _id, image, name, author, category, rating } = books;
    console.log(_id)

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;

        const info = { image, name, author, category, rating };

        fetch(`https://readio-server.vercel.app/bookList/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Spot has been updated.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <div className="flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-center mt-4 underline">Update Your Book</h1>
                </div>
                <div className="card">
                    <form onSubmit={handleUpdate} className="card-body lg:w-2/3 md:w-1/2 lg:mx-auto md:ml-24">
                        <div className="lg:flex md:flex items-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input defaultValue={image} type="text" name="image" placeholder="Image" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full" >
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input defaultValue={name} type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="lg:flex md:flex items-center gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Author Name</span>
                                </label>
                                <input defaultValue={author} type="text" name="author" placeholder="Author Name" className="input input-bordered" required />
                            </div>

                            <div className="lg:flex md:flex items-center gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select defaultValue={category} name="category" required className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Category</option>
                                        <option>
                                            {category}
                                        </option>
                                        <option>Biography</option>
                                        <option>Horror</option>
                                        <option>Kids</option>
                                        <option>Romance</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input defaultValue={rating} type="number" name="rating" placeholder="Rating (0-5)" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566]">Update Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBooks;