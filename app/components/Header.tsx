const Header = () => {
    return (
        <header>
            <nav className="flex justify-between items-center bg-transparent p-8 border-2 border-gray-800 rounded-lg shadow-lg">
                <div className="logo text-white text-4xl font-bold"><span className="text-green-500">A</span>piip</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Service</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Portofolio</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Education</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;