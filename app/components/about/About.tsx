import React from 'react'

type Props = {}

const About: React.FC = () => {
    return (
        <section className='flex items-center flex-wrap-reverse gap-12'>
            <div className="flex flex-1 basis-[42rem] p-4 flex-col items-start">
                <h3 className='capitalize text-veryBlackBlue pb-5 text-5xl'>serviços de reparo da melhor qualidade</h3>
                <p className='text-2xl text-gray-700 leading-[2]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim laboriosam quidem eaque, ex qui fugit velit veniam veritatis a nostrum amet perspiciatis pariatur ducimus ipsam officiis quae cumque maiores voluptates!</p>
                <p className='text-2xl text-gray-700 leading-[2]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste ab eos ea rerum obcaecati illo ex recusandae expedita aspernatur?</p>
                <a href="#services" className="inline-block mt- text-xl py-4 px-12 bg-white capitalize text-veryBlackBlue rounded-2xl border-[0.2rem] border-[#123456] hover:bg-lightBlue hover:text-white">leia +</a>
            </div>
            <div className="flex flex-1 basis-[42rem]">
                <img src="/about-img.svg" alt="" />
            </div>
        </section>
    )
}

export default About