import Header from './components/Header';
import Lanyard from './components/Lanyard/Lanyard';

export default function Home() {
  return (
      <main className='h-screen'>
          <Header />
          <div className='grid grid-cols-12'>
              <div className='col-span-6'>

              </div>
              <div className='col-span-6'>
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
          </div>
      </main>
  );
}
