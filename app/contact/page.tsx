"use client";
import Header from "../components/Header";

const Contact = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center">
            <Header />

            {/* Heading */}
            <div className="text-center mb-10 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00fa9a]">📞 Get in Touch</h1>
                <p className="text-md md:text-lg text-gray-300 max-w-xl mx-auto">
                    Have questions or want to collaborate? Drop a message below!
                </p>
            </div>

            {/* Contact Form */}
            <form className="w-full max-w-xl bg-gray-900 rounded-2xl p-8 shadow-2xl animate-slide-up">
                <div className="mb-4">
                    <label className="block mb-2 text-gray-300">Name</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[#00fa9a]"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-300">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[#00fa9a]"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-gray-300">Message</label>
                    <textarea
                        rows={4}
                        placeholder="Write your message here..."
                        className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[#00fa9a]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#00fa9a] text-black hover:bg-[#00dfa0] transition duration-300 px-6 py-3 rounded-xl font-semibold"
                >
                    Send Message
                </button>
            </form>

            {/* Social Buttons */}
            <div className="mt-12 flex gap-4 flex-wrap justify-center animate-fade-in">
                {[
                    { name: "Facebook", url: "#", label: "F" },
                    { name: "Twitter", url: "#", label: "T" },
                    { name: "Instagram", url: "#", label: "I" },
                    { name: "LinkedIn", url: "#", label: "L" },
                ].map((btn, idx) => (
                    <a
                        key={idx}
                        href={btn.url}
                        className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#00fa9a] text-[#00fa9a] hover:bg-[#00fa9a] hover:text-black transition duration-300 text-xl font-bold"
                        aria-label={btn.name}
                    >
                        {btn.label}
                    </a>
                ))}
            </div>

            {/* CSS Animations */}
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

export default Contact;
