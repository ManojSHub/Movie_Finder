import { Link } from "react-router-dom";
import PNF from '../assets/404error.jpeg';

function PageNotFound(){

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1>Page Not Found</h1>
            <section className="text-center">
                <img src={PNF} alt="404" className="w-800"/>
                <Link to="/">
                <button type="button" className="mb-20 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go back to Home</button>
                </Link>
            </section>
        </main>
    );
}

export default PageNotFound;