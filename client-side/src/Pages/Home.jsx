import Author from "./Author";
import BookCategory from "./BookCategory";
import Slider from "./Slider/Slider";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <BookCategory></BookCategory>
            <Author></Author>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;