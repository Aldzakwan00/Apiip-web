"use client";
import Header from "../components/Header";

const Education = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center">
            <Header />

            {/* Heading Section */}
            <div className="text-center mb-10 animate-fade-in">
                <h1 className="text-5xl font-extrabold mb-4 tracking-wide">📚 My Education Journey</h1>
                <p className="text-lg text-gray-300 max-w-xl mx-auto">
                    Here's a glimpse of my academic path, filled with passion, learning, and growth.
                </p>
            </div>

            {/* Timeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl animate-slide-up">
                {/* Card 1 */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                    <img
                        src="https://via.placeholder.com/600x200?text=High+School"
                        alt="High School"
                        className="rounded-xl mb-4"
                    />
                    <h2 className="text-2xl font-semibold mb-2">High School</h2>
                    <p className="text-gray-300">
                        Studied science with a strong focus on math and technology. Active in various student organizations.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                    <img
                        src="https://via.placeholder.com/600x200?text=University"
                        alt="University"
                        className="rounded-xl mb-4"
                    />
                    <h2 className="text-2xl font-semibold mb-2">University</h2>
                    <p className="text-gray-300">
                        Majoring in Information Technology Education. Passionate about coding, design, and knowledge sharing.
                    </p>
                </div>
            </div>

            {/* Simple CSS Animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-slide-up {
                    animation: slide-up 1.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Education;
