import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'next/document'
import  Head  from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFilTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className =  {darkMode ? "dark" : ""}>
    <Head>
      <title> Matias Riosa Portfolio</title>
      <meta name="description" content="Generated by me" />
      <link rel ="icon" href="/favicon.ico"/>
    </Head>
    <main className='bg-white px-10 md:text-center md:px-20 lg:px-40 dark:bg-gray-950 dark:text-white'>
       <section  className='min-h-screen'>
         <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-serif'>Matias Riosa&apos;s Portfolio</h1>
          <ul className = "flex items-center">
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
          </ul>
         </nav>
         <div className='text-center pt-10 pb-3'>
            <h2 className='text-5xl py-2 font-medium md:text-4xl'>Matias Riosa</h2>
            <h3 className='text-2xl py-2'>Computer Science student at UCF</h3>
            <p className='text-md pt-5 pb-1 leading-8 text-gray-500 dark:text-gray-200'>About me: </p>
            <p className='text-md pt-1 pb-1 leading-8 text-gray-500 max-w-3xl mx-auto  dark:text-gray-200'>
                Hello, I am a current student at the University of Central Florida studying Computer Science.
                I have completed degrees in Finance and Marketing in the past and after some time in the field I decided that 
                wanted to pursue my interest in Computer Science, so after a great deal of individual learning I decided it would be most beneficial
                to return to school. I am now currently on track to graduate in 2024.

            </p> 
            <p className='text-md pt-1 pb-1 leading-8 text-gray-500 max-w-3xl mx-auto  dark:text-gray-200'>
                Outside of my professional life, I love spending time outside, travelling, and being born into an Argentine family has caused me to love
                anything that has to do with futbol. Ideally in the future I would love the opportunity to work in a position that constantly challenges me 
                and causes me to learn new things. I would also love the opportunity to work in different countries around the world.
            </p>
         </div>
         <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-200'>
            <button>
             <a href="https://www.linkedin.com/in/matias-riosa-5a8921180" className="services__links">
              <AiFillLinkedin/>
              </a>
            </button>
            
            <button>
             <a href="https://github.com/m-riosa" className="services__links">
              <AiFillGithub/>
              </a>
            </button>
            
         </div>
         <div className='justify-center flex pt-5'>
            <Image src="/images/linkedin.jpeg" width="250" height = "250" alt="linkedInImage"/>
         </div>
       </section>
       <section>
        <div>
          <h3 className="text-3xl py-1 flex justify-center">Projects I&apos;ve worked on</h3>  
        </div>
        <div className='gap-10 justify-center flex flex-col lg:flex-row lg:flex-wrap dark:text-gray-100'>
          <div className='text-center shadow-lg p-10 my-10 basis-1/3 flex-1 dark:bg-gray-900'>
              <div className='flex justify-center'>
                <Image src="/images/androidstudio.png" width="250" height = "250" alt="FutHubImage"/>
              </div>
              <h3 className='text-lg font-medium'>FutHub app</h3>
              <p className='text-gray-700 py-1 dark:text-white'>Tools used:</p>
              <p className='text-gray-700 dark:text-white'>Java</p>
              <p className='text-gray-700 dark:text-white'>Android Studio</p>
              <p className='text-gray-700 dark:text-white'>Retrofit HTTP client</p>
              <p className='text-gray-700 dark:text-white'>Postman API platform</p>
              <div className= 'pt-5'>
                <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="https://github.com/m-riosa/FutHub-app" className="services__links">
                    View on GitHub
                  </a>
                </button>
              </div>
              
          </div>
          <div className='text-center shadow-lg p-10 my-10 basis-1/3 flex-1 dark:bg-gray-900'>
              <div className='flex justify-center'>
                <Image src="/images/othello.png" width="250" height = "250" alt="OthelloImg"/>
              </div>
              <h3 className='text-lg font-medium'>Othello Board game</h3>
              <p className='text-gray-700 py-1 dark:text-white'>Tools used:</p>
              <p className='text-gray-700 dark:text-white'>C</p>
              <div className= 'pt-5'>
                <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="https://github.com/m-riosa/othello-game" className="services__links">
                    View on GitHub
                  </a>
                </button>
              </div>
          </div>
          <div className='text-center shadow-lg p-10 my-10 basis-1/3 flex-1  dark:bg-gray-900'>
              <div className='flex justify-center'>
                <Image src="/images/next-js-logo.png" width="250" height = "250" alt="nextJS Logo"/>
              </div>
              <h3 className='text-lg font-medium'>This website</h3>
              <p className='text-gray-700 py-1 dark:text-white'>Tools used:</p>
              <p className='text-gray-700 dark:text-white'>JS</p>
              <p className='text-gray-700 dark:text-white'>React</p>
              <p className='text-gray-700 dark:text-white'>Tailwind</p>
              <p className='text-gray-700 dark:text-white'>Vercel</p>
              <div className= 'pt-5'>
                <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="https://github.com/m-riosa/portfolioWebsite" className="services__links">
                    View on GitHub
                  </a>
                </button>
              </div>
          </div>
          <div className='text-center shadow-lg p-10 my-10 basis-1/3 flex-1  dark:bg-gray-900'>
              <div className='flex justify-center'>
                <Image src="/images/next-js-logo.png" width="250" height = "250" alt="nextJS Logo"/>
              </div>
              <h3 className='text-lg font-medium'>Twitter clone for Emojis</h3>
              <p className='text-gray-700 py-1 dark:text-white'>Tools used:</p>
              <p className='text-gray-700 dark:text-white'>JS</p>
              <p className='text-gray-700 dark:text-white'>Next JS</p>
              <p className='text-gray-700 dark:text-white'>Tailwind</p>
              <p className='text-gray-700 dark:text-white'>Prisma</p>
              <div className= 'pt-5'>
                <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="https://github.com/m-riosa/tweety" className="services__links">
                    View on GitHub
                  </a>
                </button>
              </div>
          </div>
        </div>
       </section>
      </main>
    </div>
  );
}
