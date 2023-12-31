"use client"
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image'
import me from '../../../public/me.png'
import Link from 'next/link';

const Resume = () => {
    const [text, setText] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    const texts: string[] = useMemo(() => ['Software Developer', 'Web Developer', 'Mobile Developer'], []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (text.length < texts[index].length) {
                setText(texts[index].slice(0, text.length + 1));
            } else {
                clearInterval(intervalId);
                setTimeout(() => {
                    const nextIndex = (index + 1) % texts.length;
                    setIndex(nextIndex);
                    setText('');
                }, 500);
            }
        }, 80);

        return () => clearInterval(intervalId);
    }, [text, index, texts]);

    return (
        <div className="flex flex-col lg:flex-row  gap-4 lg:gap-2  justify-between items-center px-4 py-2  lg:divide-x-2 lg:divide lg:divide-auxiliar divide-opacity-70">
            <div className="flex-1 text-left">
                <div className='text-2xl'>
                    <h1 className='font-bold'>Hi There!</h1>
                    <p>I am <span className='text-auxiliar font-bold'>Raimundo Molide</span></p>
                    <p><span className='text-auxiliar font-bold'>{text}</span> Based In Maputo, Mozambique</p>
                    <div className='flex mt-10 gap-2 justify-center lg:justify-start'>
                        <Link href="https://www.linkedin.com/in/raymolide/" target='_blank' className="hover:text-white font-bold px-2 py-1 box-shadow bg-secundary text-auxiliar uppercase">Connect me</Link>
                        <Link href="https://raymolide.vercel.app/" target='_blank' className="hover:text-white font-bold px-2 py-1 box-shadow bg-secundary text-auxiliar uppercase">Resume</Link>
                    </div>
                </div>
            </div>
            <div className="flex-1 text-center">
                <div className="flex items-center justify-center">
                    <div className="rounded-lg overflow-hidden bg-[#87CEEB]">
                        <Image
                            src={me}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                            className="rounded-lg w-full h-full object-cover p-5"
                        />
                        <div className=''>
                            <div className='rounded-ss-full p-3 bg-[#FFA07A]'>
                                <span className='text-auxiliar font-bold'>Raimundo Molide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
