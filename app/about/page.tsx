'use client';
import Header from '../components/Header';
import Image from 'next/image';
import 'boxicons/css/boxicons.min.css';


const About = () => {
    return (
    <section className='h-screen relative text-white flex items-center justify-center'>
        <Header />
        <div className='w-[60%] h-[70%] grid grid-cols-2'>
            <div className='col-span-1 flex items-center justify-center'>
                <Image className='rounded-2xl'
                    src="/images/Profile.jpeg"
                    alt='Profile'
                    width={400}
                    height={400}>

                </Image>
            </div>
            <div className='col-span-1 py-20 flex flex-col justify-center'>
                <div className='bio px-20'>
                    <h3 className='text-2xl font-semibold text-[#00fa9a]'>Discover</h3>
                    <h1 className='text-5xl font-bold mt-2'>About Me</h1>
                    <hr className='w-1/6 border-t-2 border-[#00fa9a]' />
                    <p className='text-justify my-3'>Hello! I'm Afif Al Dzaqwan, a 21-year-old Software Developer hailing from Tapanuli Selatan, North Sumatra. 
                        With a passion for crafting seamless and visually appealing web experiences, I thrive on turning ideas into interactive realities. 
                        When I'm not immersed in coding, you'll likely find me indulging in my favorite hobby — lounging comfortably!</p>
                    <div className='w-full rounded h-auto p-5 border-2 border-[#00fa9a]'>
                        <div className='grid grid-cols-2'>
                            <ul className='list-none col-span-1'>
                                <li>Name : Afif Al Dzaqwan</li>
                                <li>Phone : +6285261880343</li>
                                <li>Experience : 1+ Years</li>
                                <li>-</li>
                            </ul>
                            <ul className='list-none col-span-1'>
                                <li>Age : 21</li>
                                <li>Address : Malang, Indonesia</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => window.location.href= 'https://drive.google.com/file/d/1zAKL-gwB8TLVFsUQctmbEgN7w9n_anXs/view?usp=sharing'}
                            className='flex justify-center items-center w-30 h-13 border-[0.2rem] border-[#00fa9a] 
                                rounded  text-[#00fa9a] 
                                my-5 transition duration-300 ease-in-out
                              hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]'>Hire Me <i className='bx bxs-chevrons-right text-2xl' ></i></button>
                </div>
            </div>

        </div>
        
    </section>
    )}

export default About;