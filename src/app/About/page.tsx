import React from 'react'

import Image from 'next/image';


const About = () => {
    return (


        <div className=" md:flex border-b-4 border-red-400 bg-white">
            {/* Text Section */}
            <div className="w-full h-auto  px-6 py-12 md:px-24 md:py-24 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                    Hi I am Abdul Mannan
                </h1>
                <p className="text-lg md:text-xl mt-6 md:mt-9 font-serif leading-relaxed font-medium">
                    Hi I am a passionate web developer eager to create beautiful and functional websites. I specialize in building user-friendly interfaces and seamless web experiences using modern tools like Next.js and Sanity.io. As a beginner developer, I am always learning and excited to grow my skills, tackling new challenges with enthusiasm. Whether it's designing responsive layouts or optimizing website performance, I am committed to delivering value through my work. Lets connect and build something amazing together
                </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center md:justify-end items-center px-6 py-6 md:p-11">
                <Image
                    src="/AboutImg/myPic.png"
                    alt="Profile-Pic"
                    width={300}
                    height={300}
                    className="rounded-[50%]  shadow-black shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]"
                />

            </div>

        </div>

    );
}

export default About;
