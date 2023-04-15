import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import app from "../../Firebase.config.js/firebase.config";
import { Link } from "react-router-dom";
const auth = getAuth(app);
const SignUp = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one upper case");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Account Created Successfully");
        setError("");
        senVerification(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
    const senVerification = (user) => {
      sendEmailVerification(user).then((result) => {
        console.log(result);
        alert("Please Verify your Email");
      });
    };
  };
  return (
    <div className="flex justify-center mt-8 mb-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold"> Sign up here</h1>
        </div>
        <p className="text-sm mb-2 text-center dark:text-gray-400">
          Already have a account!
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Login here
          </Link>
        </p>
        <form
          onSubmit={handleSignUp}
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <p className="text-red-500">{error}</p>
            <p className="text-green-500">{success}</p>
          </div>
          <div className="space-y-2">
            <div>
              <input
                type="submit"
                value="Register"
                className="w-full px-8 py-3 font-semibold border rounded-md dark:bg-violet-400 dark:text-gray-900"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
