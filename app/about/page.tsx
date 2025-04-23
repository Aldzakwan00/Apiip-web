'use client';
import Header from '../components/Header';
import Image from 'next/image';
import 'boxicons/css/boxicons.min.css';

const About = () => {
    return (
        <section className="min-h-screen relative text-white flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-4 py-20">
            <Header />
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 fade-in">
                <div className="flex justify-center items-center slide-in-left">
                    <Image
                        className="rounded-2xl shadow-2xl"
                        src="/images/Profile.jpeg"
                        alt="Profile"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="flex flex-col justify-center px-5 slide-in-right">
                    <h3 className="text-2xl font-semibold text-[#00fa9a]">Discover</h3>
                    <h1 className="text-5xl font-bold mt-2">About Me</h1>
                    <hr className="w-1/6 border-t-2 border-[#00fa9a] my-2" />
                    <p className="text-justify my-3 leading-relaxed">
                        Hello! I'm Afif Al Dzaqwan, a 21-year-old Software Developer from Tapanuli Selatan, North Sumatra.
                        With a passion for crafting seamless and visually appealing web experiences, I thrive on turning ideas into interactive realities.
                        When I'm not coding, you'll likely find me relaxing or exploring new inspirations!
                    </p>
                    <div className="w-full rounded-lg p-5 border-2 border-[#00fa9a] mt-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <ul className="list-none space-y-1">
                                <li><strong>Name:</strong> Afif Al Dzaqwan</li>
                                <li><strong>Phone:</strong> +6285261880343</li>
                                <li><strong>Experience:</strong> 1+ Years</li>
                            </ul>
                            <ul className="list-none space-y-1">
                                <li><strong>Age:</strong> 21</li>
                                <li><strong>Address:</strong> Malang, Indonesia</li>
                            </ul>
                        </div>
                    </div>
                    <button
                        onClick={() => window.location.href = 'https://drive.google.com/file/d/1zAKL-gwB8TLVFsUQctmbEgN7w9n_anXs/view?usp=sharing'}
                        className="mt-6 w-fit px-6 py-3 border-2 border-[#00fa9a] rounded text-[#00fa9a] 
                        hover:bg-[#00fa9a] hover:text-black transition duration-300 ease-in-out shadow-lg">
                        Hire Me <i className="bx bxs-chevrons-right text-2xl ml-2"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
