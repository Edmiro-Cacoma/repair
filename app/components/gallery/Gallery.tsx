'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Image {
    image: string;
}

const Gallery: React.FC = () => {
    const images: Image[] = [
        { image: "g-img-1.jpg" },
        { image: "g-img-2.jpg" },
        { image: "g-img-3.jpg" },
        { image: "g-img-4.jpg" },
        { image: "g-img-5.jpg" },
        { image: "g-img-6.jpg" }
    ];

    const [activeImage, setActiveImage] = useState<number | null>(null);

    const openLightBox = (index: number): void => {
        if (window.innerWidth >= 768) {
            setActiveImage(index);
        }

    };

    const closeLightBox = (): void => {
        setActiveImage(null);
    };

    const goToNextImage = (): void => {
        if (activeImage !== null) {
            setActiveImage((activeImage + 1) % images.length);
        }
    };

    const goToPreviousImage = (): void => {
        if (activeImage !== null) {
            setActiveImage((activeImage - 1 + images.length) % images.length);
        }
    };

    return (
        <section id="gallery">
            <h1 className="text-veryBlackBlue capitalize text-center mb-12 text-6xl">
                Nossa <span className='text-lightBlue'>Galeria</span>
            </h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] bg-whiteGray p-8">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden h-[25rem] cursor-pointer rounded-xl shadow"
                        onClick={() => openLightBox(index)}
                    >
                        <img
                            src={`./${image.image}`}
                            alt="gallery"
                            className="object-cover transition transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {activeImage !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl mx-auto">
                        <button
                            className="absolute -top-16 -right-16 text-white text-4xl focus:outline-none"
                            onClick={closeLightBox}
                        >
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-3xl text-white"
                            />
                        </button>
                        <img
                            src={`./${images[activeImage].image}`}
                            alt="gallery"
                            className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                        />
                        <button
                            className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none"
                            onClick={goToPreviousImage}
                        >
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                                className="text-3xl text-white"
                            />
                        </button>
                        <button
                            className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none"
                            onClick={goToNextImage}
                        >
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="text-3xl text-white"
                            />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
