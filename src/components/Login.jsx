import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Login() {
    return (
        <><Navbar /><div className="flex justify-center items-center h-screen -m-24">
            <div className="w-full max-w-md p-6 rounded-md shadow-lg bg-white">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="kavin@gmail.com"
                                className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">
                                    Password
                                </label>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="text-xs hover:underline text-gray-600"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md" />
                        </div>
                    </div>
                    <div className="flex justify-center">

                        <Link to="/home">
                            <button
                                type="button"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600"
                            >
                                Sign in
                            </button>
                        </Link>

                    </div>
                </form>
            </div>
        </div></>
    );
}
