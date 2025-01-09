import React from 'react';
import Link from 'next/link';

const contactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-6">Feel free to reach out to us through any of our social platforms.</p>
            <div className="space-x-6">
                <Link href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white bg-primary p-3 rounded-md hover:underline">GitHub</Link>
                <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white bg-primary p-3 rounded-md hover:underline">LinkedIn</Link>
                <Link href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white bg-primary p-3 rounded-md hover:underline">Facebook</Link>
                <Link href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white bg-primary p-3 rounded-md hover:underline">Instagram</Link>
            </div>
        </div>
    );
};

export default contactUs;
