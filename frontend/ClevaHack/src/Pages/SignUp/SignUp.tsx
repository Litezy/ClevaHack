import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), ""], "Passwords must match"),
    });

    // Handle form submission
    const handleSubmit = (values: { username: string; email: string; password: string; confirmPassword: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setIsLoading(true);
        setTimeout(() => {
            console.log("Form values:", values);
            setIsLoading(false);
            setSubmitting(false);
            navigate("/otppage"); // Navigate to OTP page
        }, 2000); // Simulating API request
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-10 bg-gray-100">
            {/* Left side - Form */}
            <div className="w-1/2 flex flex-col space-y-4 p-10 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-black mb-6">Sign Up</h1>

                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            {/* Username Field */}
                            <div>
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full bg-[#EAEAEA] rounded-xl"
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Submit Button with Spinner */}
                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="btn btn-success w-full rounded-xl text-black flex justify-center items-center"
                            >
                                {isLoading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Right side - Image */}
            <div className="w-1/2 flex justify-center items-center">
                <img
                    src="https://via.placeholder.com/400"
                    alt="Sign Up"
                    className="w-3/4 rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default SignUp;
