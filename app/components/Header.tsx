import Link from 'next/link';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10">
            <nav className="flex justify-between items-center bg-transparent p-8">
                <div className="logo ml-18 text-white text-4xl font-bold"><span className="text-[#00fa9a]">ザ</span>クワン</div>
                <ul className="flex space-x-4 mr-10">
                    <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
                    <li><Link href="/about" className="text-white hover:text-gray-400">About</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-400">Service</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-400">Portofolio</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-400">Education</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-400">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;