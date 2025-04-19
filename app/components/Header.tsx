const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10">
            <nav className="flex justify-between items-center bg-transparent p-8">
                <div className="logo ml-18 text-white text-4xl font-bold"><span className="text-[#00fa9a]">ザ</span>クワン</div>
                <ul className="flex space-x-4 mr-10">
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