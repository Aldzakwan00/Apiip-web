"use client";
import Header from './components/Header';
import Lanyard from './components/Lanyard/Lanyard';
import SplitText from './components/SplitText/SplitText';
import Image from 'next/image';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Home() {
  return (
    <main className='h-screen relative text-white'>
      <Header />
      <div className='grid grid-cols-1 sm:grid-cols-12 h-full'>
        
        <div className='sm:hidden flex justify-center pt-8'>
          <Image 
            src="/images/Profile-ilustration.jpg" 
            alt="Profile illustration"
            width={400}
            height={400}
            className="object-contain animate-fadeIn"
          >
          </Image>
        </div>

        <div className='col-span-12 sm:col-span-6 flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-6 sm:pl-28 gap-2'>
          <div className='intro text-4xl sm:text-6xl'>
            <SplitText
              text="Hello, I'm Afif"
              className="font-bold"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className='lencana text-xl sm:text-2xl'>
            IT Education Student | Software Developer
          </div>
          <div className='quote text-base sm:text-xl text-gray-300 italic'>
            “No guilt can change the past, and no worry can alter the future.” <br />
            <span className="text-sm">- Umar bin Khattab (r.a)</span>
          </div>

          <div className='social-media flex items-center gap-4 flex-wrap justify-center sm:justify-start'>
            <a className='flex justify-center items-center w-13 h-13 border-[0.2rem] border-[#00fa9a] 
                          rounded-full text-[2rem] text-[#00fa9a] 
                          my-5 transition duration-300 ease-in-out
                          hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]' 
              href="https://www.instagram.com/_aldzakwan/">
              <i className='bx bxl-instagram'></i>
            </a>
            <a className='flex justify-center items-center w-13 h-13 border-[0.2rem] border-[#00fa9a] 
                          rounded-full text-[2rem] text-[#00fa9a] 
                          my-5 transition duration-300 ease-in-out
                          hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]' 
              href="https://github.com/Aldzakwan00">
              <i className='bx bxl-github'></i>
            </a>
            <a className='flex justify-center items-center w-13 h-13 border-[0.2rem] border-[#00fa9a] 
                          rounded-full text-[2rem] text-[#00fa9a] 
                          my-5 transition duration-300 ease-in-out
                          hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]' 
              href="https://linkedin.com/in/afif-al-dzakwan-0899942b3">
              <i className='bx bxl-linkedin'></i>
            </a>
            <button onClick={() => window.location.href= 'https://drive.google.com/file/d/1zAKL-gwB8TLVFsUQctmbEgN7w9n_anXs/view?usp=sharing'} 
              className='flex justify-center items-center w-30 h-13 border-[0.2rem] border-[#00fa9a] 
                         rounded text-[#00fa9a] 
                         my-5 transition duration-300 ease-in-out
                         hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]'>
              Hire Me <i className='bx bxs-chevrons-right text-2xl' ></i>
            </button>
          </div>
        </div>

        <div className='col-span-6 hidden sm:block'>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </main>
  );
}
