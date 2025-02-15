"use client"
import React from 'react';
import Link from 'next/link';

const ErrorPage = ({error}:{error:Error}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{error.message}</h1>
      <p className="text-lg text-gray-600 mb-8">
        An error occurred while processing your request. Please try again later.
      </p>
      <Link href="/">
        <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default ErrorPage;