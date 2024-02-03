import React from "react";

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base leading-6 text-gray-400">
            &copy; {new Date().getFullYear()} Opticom Kenya Limited. All rights reserved.
            </p>
        </div>
        </footer>
    );
}
export default Footer;

