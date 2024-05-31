import logo from '../assets/Readio.png';
const Footer = () => {
    return (
        <footer className="footer dark:text-white dark:bg-gray-900 p-10 bg-base-200 text-base-content mt-20">
            <nav>
                <div className='flex items-center'>
                    <img className='w-28 h-28' src={logo} alt="" />
                    <div className=' ml-5'>
                        <h2 className='lg:text-3xl text-2xl font-bold'>READIO</h2>
                        <p>Unlock the World of Knowledge, <br /> Just turn the Page</p>
                    </div>
                </div>

            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;