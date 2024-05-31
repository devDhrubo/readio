import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState();
    const [showPass, setShowPass] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.url.value;
        const password = form.password.value;
        // console.log(name, email, photoUrl, password);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or Longer');
            return;
        }
        else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}/.test(password)) {
            setRegisterError("Password Should be at least one UPPERCASE, lowercase and Special Character")
            return;
        }
        // else if (!/[A-Z]/.test(password)) {
        //     setRegisterError("Password Should be at least one UPPERCASE and lowercase Character")
        //     return;
        // }


        setRegisterError('');
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoUrl)
                    .then(() => {
                        Swal.fire("Registration Successful");
                    })
            })
            .catch(error => {
                console.error(error.message);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 shadow-xl  dark:text-gray-800 mx-auto mb-20 mt-10">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleSignUp} className="space-y-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="url" placeholder="Photo URL" className="input input-bordered" required />
                </div>


                <div className="form-control space-y-1 text-sm">
                    <label className="block">Password</label>
                    <div className="flex items-center">
                        <input
                            type={showPass ? "text" : "password"}
                            name="password"
                            id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md input input-bordered" />
                        <span className="ml-2 text-lg" onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEyeSlash className="cursor-pointer"></FaEyeSlash> : <FaEye className="cursor-pointer"></FaEye>
                            }
                        </span>
                    </div>
                </div>

                <button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566] w-full">Sign Up</button>
            </form>
            <p className="text-sm text-center sm:px-6 dark:text-gray-600">Already Registered
                <Link to='/login'>
                    <a rel="noopener noreferrer" href="#" className="text-blue-800 underline"> Sign in</a>
                </Link>

            </p>
            {
                registerError && <p className="text-red-500">{registerError}</p>
            }
        </div>
    );
};

export default Register;