const Footer = () => {
    return (
        <div className="bg-[#D9D9D9] font-semibold text-gray-950 p-8">
            {/* Support Links */}
            <div className="flex flex-col cursor-pointer items-end space-y-3 text-right">
                <span className="hover:text-green-600 text-xl">Support</span>
                <span className="hover:text-green-600">Help Center</span>
                <span className="hover:text-green-600">Contact Us</span>
                <span className="hover:text-green-600">FAQs</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row items-end justify-end space-x-4 mt-8">
                <img className="cursor-pointer w-8 h-8" src="Group 27.png" alt="Facebook Logo" />
                <img className="cursor-pointer w-8 h-8" src="Group 29.png" alt="Instagram Logo" />
                <img className="cursor-pointer w-8 h-8" src="Group 30.png" alt="X Logo" />
                <img className="cursor-pointer w-8 h-8" src="Group 34.png" alt="YouTube Logo" />
            </div>

            {/* Copyright Section */}
            <hr className="border-gray-400 my-4" />
            <div className="text-center text-sm text-gray-700 pt-4">
                <p>© {new Date().getFullYear()} ClevaHack. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
