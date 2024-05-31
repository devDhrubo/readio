import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BorrowedBook = () => {

    const { user } = useContext(AuthContext);
    const [item, setItem] = useState();

    useEffect(() => {
        fetch(`https://readio-server.vercel.app/myBook/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [user])

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://readio-server.vercel.app/borrowed-book/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Returned!",
                                text: "Your Book has been Returned.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className="overflow-x-scroll dark:text-white container mx-auto lg:p-12">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Borrowed Date</th>
                        <th>Return Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item?.map(spot =>
                            <tr key={spot._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={spot.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{spot.bookName}</td>
                                <td>{spot.category}</td>
                                <td>{spot.today}</td>
                                <td>{spot.date}</td>
                                <td className="flex items-center gap-4">
                                    <Link>
                                        <button onClick={() => handleDelete(spot._id)} className="btn btn-primary flex items-center">Return</button>
                                    </Link>
                                </td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    );
};

export default BorrowedBook;