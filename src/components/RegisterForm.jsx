import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit the data or perform further actions
            console.log("Form submitted:", formData);
        } else {
            // Form is invalid, display errors
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};
        const nameRegex = /^[A-Za-z\s'-]+$/; // Regular expression for alphabetic characters, spaces, hyphens, and apostrophes
        const phoneRegex = /^\d{10}$/; // Regular expression for exactly 10 digits

        if (!data.name.trim()) {
            errors.name = "Name is required";
        } else if (!nameRegex.test(data.name)) {
            errors.name = "Invalid name format";
        }

        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email is invalid";
        }

        if (!data.password.trim()) {
            errors.password = "Password is required";
        }

        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = "Confirm password is required";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Passwords do not match";
        }

        if (!data.phoneNumber.trim()) {
            errors.phoneNumber = "Phone number is required";
        } else if (!phoneRegex.test(data.phoneNumber)) {
            errors.phoneNumber = "Phone number must contain exactly 10 digits";
        }

        if (!data.termsAccepted) {
            errors.termsAccepted = "You must accept the terms and conditions";
        }

        return errors;
    };

    return (
        <><Navbar /><section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-8 h-8 mr-2" src="" alt="logo" />
                    UIT Dashboard
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Name field */}
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="..." required />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>
                                {/* Email field */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="..." required />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                {/* Password field */}
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="..." required />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>
                                {/* Confirm Password field */}
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                    <input type="password" name="confirmPassword" id="confirm-password" value={formData.confirmPassword} onChange={handleChange} className="..." required />
                                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                                </div>
                                {/* Phone Number field */}
                                <div>
                                    <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                                    <input type="text" name="phoneNumber" id="phone-number" value={formData.phoneNumber} onChange={handleChange} className="..." required />
                                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                                </div>
                            </div>
                            {/* Terms and Conditions checkbox */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="..." required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                                {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        </form>
                        {/* Login link */}
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/register/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-400">Login here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section></>
    );
}

export default RegisterForm;
