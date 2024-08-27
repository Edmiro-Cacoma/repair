'use client'
import React, { useState, useEffect } from 'react'


interface Slides { title: string, image: string, text: string }

const Hero: React.FC = () => {

    const slides: Slides[] = [
        {
            image: '/man.png',
            title: 'Por que consertar você mesmo? Deixe para os profissionais.',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit incidunt aspernatur, perspiciatis accusamus illum quam!'
        },
        {
            image: '/home2.png',
            title: 'Profissionais experientes prontos para ajudar.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.'
        },
        {
            image: '/mechanic.png',
            title: 'Conserte com qualidade e segurança.',
            text: 'Fusce cursus lacus quis gravida vehicula. Nulla facilisi. Cras ultricies ligula sed magna dictum porta.'
        }
    ];


    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };


    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

  return (
      <>
          <section className="flex items-center bg-whiteGray">
              <div className="hidden md:flex md:flex-1">
                  <img src={slides[currentSlide].image} alt="home image" />
              </div>
              <div className="flex-1 p-8">
                  <h3 className='text-5xl mb-6 text-gray-600'>{slides[currentSlide].title}</h3>
                  <p className='mb-8 text-2xl text- blackGray'>{slides[currentSlide].text}</p>
                  <a href="#about" className="py-4 px-12 rounded-2xl text-white text-3xl bg-lightBlue capitalize hover:bg-yellow hover:text-veryBlackBlue">Começar</a>
              </div>
          </section>
      </>
  )
}

export default Hero