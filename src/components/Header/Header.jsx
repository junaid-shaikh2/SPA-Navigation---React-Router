import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    // State to toggle mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Centralized navigation links
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Github", path: "/github" },
    ];

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">

                    {/* ===== LOGO ===== */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-2 h-10"
                            alt="Logo"
                        />
                    </Link>

                    {/* ===== DESKTOP NAVIGATION ===== */}
                    {/* Visible on large screens (lg:) */}
                    <ul className="hidden lg:flex space-x-8 font-medium">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* ===== BUTTONS (ALWAYS VISIBLE) ===== */}
                    <div className="flex items-center lg:space-x-3">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Get started
                        </Link>

                        {/* ===== MOBILE MENU TOGGLE BUTTON ===== */}
                        {/* Only visible on small screens */}
                        <button
                            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ===== MOBILE NAVIGATION ===== */}
                {/* This menu appears when isMenuOpen = true */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-3">
                        <ul className="flex flex-col space-y-2 font-medium">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                                        className={({ isActive }) =>
                                            `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
