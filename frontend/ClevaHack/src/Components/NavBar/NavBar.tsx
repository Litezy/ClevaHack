const NavBar = () => {
    return (
        <header className="p-4 bg-none shadow-md ">
            <nav className="flex justify-between items-center max-w-6xl mx-auto ">
                {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li className="hover:text-green-600 cursor-pointer">About Us</li>
                    <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
                </ul>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md cursor-pointer hover:bg-blue-100 transition">
                        Log In
                    </button>
                    <button className="btn btn-success">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
