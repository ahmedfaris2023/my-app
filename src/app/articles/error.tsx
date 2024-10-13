"use client";

import Link from "next/link";
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="fix-height pt-7 text-center">
      <p>This is custom error page for articles router/page</p>
      <div className="text-3xl text-red-600 font-semibold">
        something went wrong
      </div>
      <h2 className="text-gray-700 my-3 text-xl">
        Error Message:{error.message}
      </h2>
      <Link className="text-xl underline text-blue-700 block mt-6" href="/">
        go to home page
      </Link>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;