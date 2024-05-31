import { Link } from 'react-router-dom';
import error from '../assets/error.png';

const Error = () => {
    return (
        <div>
            <img className='w-[700px] mt-20 h-[400px] object-cover mx-auto' src={error}/>
            <Link to='/'>
                <button className="bg-[#C41981] btn btn-primary duration-500 text-white border-none hover:bg-[#9b1566] flex items-center mx-auto mt-10">Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;