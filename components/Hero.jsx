'use client'

import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col items-center mt-10 lg:grid lg:grid-cols-2 lg:min-h-full lg:my-10 xl:grid-cols-3 xl:px-32'>
        <div className='hero_picture'>
            <Image
                src='/assets/sandro.png'
                height={500}
                width={500}
                objectFit='cover'
                className='blur-to-r'
            />
        </div>
        <div className='mx-auto xl:col-span-2'>
            <div className='text-center'>
                <h2 className='text-2xl py-2 mt-10 font-medium text-white md:text-4xl'>Sandro Mendoza</h2>
                <h3 className='text-lg py-2 text-white md:text-2xl'>Aspiring Developer</h3>
                <p className='text-sm mt-10 px-10 leading-8 text-white md:px-16 md:text-lg lg:px-32'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti enim inventore, obcaecati unde voluptas, numquam fugiat sed esse minima itaque rerum, ullam at perspiciatis eveniet doloremque debitis qui optio quod.
                </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 text-primary my-6 md:my-20'>
                <a className='hover:text-secondary' href="https://www.facebook.com/jr.valencia.143" target="_blank">
                    <AiFillTwitterCircle />
                </a>
                <a className='hover:text-secondary' href="https://www.linkedin.com/in/sandro-mendoza-78203b196/" target="_blank">
                    <AiFillLinkedin />
                </a>
                <a className='hover:text-secondary' href="https://www.youtube.com/channel/UCf3SLKVIw5H0WD2MtgIAdYg" target="_blank">
                    <AiFillYoutube />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero