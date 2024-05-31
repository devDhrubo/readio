import { useLoaderData, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BookDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams();
    const bookdetails = useLoaderData();
    console.log(bookdetails);
    const { user } = useContext(AuthContext);

    const { _id, image, name, quantity, author, category, rating, description } = bookdetails;

    const book = bookdetails.find((book) => book._id === id);

    const handleAddBook = e => {
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const email = user.email;
        const name = user.displayName;
        const bookName = book.name;
        const category = book.category;
        const image = book.image;

        const currentDate = new Date();

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Note: Month is zero-based, so we add 1
        const year = currentDate.getFullYear();

        const today = `${day}/${month}/${year}`;

        const info = { date, email, name, bookName, category, image, today };
        console.log(info)

        fetch('https://readio-server.vercel.app/borrowBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                if (data.insertedId) {
                    Swal.fire("Book Borrowed Successfully");
                }
            })

        console.log(info);
    }

    return (
        <div className="hero mt-16 mx-20">
            <div className="hero-content flex-col gap-10 lg:flex-row">
                <img src={book.image} className="max-w-sm rounded-lg shadow-2xl h-72" />
                <div>
                    <h1 className="text-5xl font-bold">{book.name}</h1>
                    <p className="py-6 w-1/2">{book.description}</p>
                    <div className="flex items-center gap-5 mb-5">
                        <button className="btn disabled">Author: {book.author}</button>
                        <button className="btn disabled">Rating: {book.rating}</button>
                        <button className="btn disabled">Quantity: {book.quantity}</button>
                    </div>
                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566]" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow Book</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box h-80">
                            <form onSubmit={handleAddBook}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Return Date: </span>
                                        <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </label>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} readOnly className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} readOnly className="input input-bordered" required />
                                </div>
                                <div className="modal-action">
                                    <button method='dialog' className="btn btn-primary mt-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;