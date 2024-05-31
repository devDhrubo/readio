import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Root = () => {
    return (
        <div className="dark:bg-gray-800">
            <Header></Header>
            <Outlet cla
            ></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;