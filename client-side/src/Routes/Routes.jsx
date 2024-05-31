import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddBook from "../Pages/AddBook";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import BorrowedBook from "../Pages/BorrowedBook";
import AllBook from "../Pages/AllBook";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error";
import BookDetails from "../Pages/BookDetails";
import UpdateBooks from "../Pages/UpdateBooks";
import CategoryWiseBookList from "../Pages/CategoryWiseBookList";
import BookCategory from "../Pages/BookCategory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/borrowed-book',
                element: <PrivateRoute><BorrowedBook></BorrowedBook></PrivateRoute>
            },
            {
                path: '/allBook',
                element: <PrivateRoute><AllBook></AllBook></PrivateRoute>
            },
            {
                path: '/book-details/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: () => fetch('https://readio-server.vercel.app/bookList')
            },
            {
                path: '/updateBook/:id',
                element: <UpdateBooks></UpdateBooks>,
                loader: ({ params }) => fetch(`https://readio-server.vercel.app/bookList/${params.id}`)
            },
            {
                path: '/book/:category',
                element: <CategoryWiseBookList></CategoryWiseBookList>,
                loader: ({ params }) => fetch(`https://readio-server.vercel.app/book/${params.category}`)
            },
            {
                path: '/book-category',
                element: <BookCategory></BookCategory>,
                loader: () => fetch(`https://readio-server.vercel.app/bookList`)
            },
            {
                path: '/myBook',
                element: <BorrowedBook></BorrowedBook>
            }
        ]
    },
]);

export default router;