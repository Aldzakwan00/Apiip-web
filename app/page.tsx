"use client";
import Header from './components/Header';
import Lanyard from './components/Lanyard/Lanyard';
import SplitText from './components/SplitText/SplitText';
import Link from 'next/link';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Home() {

  return (
      <main className='h-screen relative text-white'>
          <Header />
          <div className='grid grid-cols-12'>
              <div className='col-span-6 justify-center flex flex-col pl-28 gap-2'>  
                <div className='intro text-5xl'>
                  <SplitText
                    text="Hello, I'm Afif"
                    className="font-bold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </div>
                <div className='lencana text-xl'>IT Education Student | Software Developer</div>
                <div className='quote text-lg'>“No guilt can change the past, and no worry can alter the future.” - Umar bin Khatab (r.a)</div>
                <div className='social-media flex items-center gap-4'>
                  <a className='flex justify-center items-center w-13 h-13 border-[0.2rem] border-[#00fa9a] 
                                rounded-full text-[2rem] text-[#00fa9a] 
                                my-5 transition duration-300 ease-in-out
                              hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]' href=""><i className='bx bxl-instagram'></i></a>
                  <a className='flex justify-center items-center w-13 h-13 border-[0.2rem] border-[#00fa9a] 
                                rounded-full text-[2rem] text-[#00fa9a] 
                                my-5 transition duration-300 ease-in-out
                              hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]' href=""><i className='bx bxl-github'></i></a>
                  <a className='flex justify-center items-center w-13 h-13 border-[0.2rem] border-[#00fa9a] 
                                rounded-full text-[2rem] text-[#00fa9a] 
                                my-5 transition duration-300 ease-in-out
                              hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]' href=""><i className='bx bxl-linkedin'></i></a>
                  <button className='flex justify-center items-center w-30 h-13 border-[0.2rem] border-[#00fa9a] 
                                rounded  text-[#00fa9a] 
                                my-5 transition duration-300 ease-in-out
                              hover:bg-[#00fa9a] hover:text-black hover:shadow-[0_0_1rem_#00fa9a]'>Hire Me <i className='bx bxs-chevrons-right text-2xl' ></i></button>
                </div>
              </div>
              <div className='col-span-6'>
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
          </div>
      </main>
  );
}
