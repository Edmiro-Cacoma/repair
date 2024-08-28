interface Card {
    title: string;
    description: string;
    img: string;
}

const Services: React.FC = () => {
    const cards: Card[] = [
        { title: "Reparação de Desktops", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.', img: '/service-1.svg' },
        { title: "Reparação de laptops", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.', img: '/service-2.svg' },
        { title: "Reparação de Telefones", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.', img: '/service-3.svg' },
        { title: "Reparação de consola de jogos", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.', img: 'service-4.svg' },
        { title: "Reparação de multimédias", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.', img: 'service-1.svg' },
        { title: "Reparação de SmartRelogios", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.', img: 'service-6.svg' }
    ];

    return (
        <section className="bg-whiteGray">
            <h1 className="text-veryBlackBlue capitalize text-center mb-12 text-6xl">Nossos <span className='text-lightBlue'>Serviços</span></h1>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] bg-whiteGray p-8">
                {cards.map((item, index) => (
                    <div
                        className="bg-white text-center py-12 px-8 relative transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-lightBlue group flex flex-col items-center cursor-pointer"
                        key={index}>
                        <img src={item.img} alt="" className="relative z-20 h-[10rem] mb-2 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
                        <h3 className='capitalize py-4 px-0 relative z-20 text-5xl transition-colors duration-300 ease-in-out group-hover:text-white'>{item.title}</h3>
                        <p className='text-2xl z-20 leading-8 text-blackGray transition-colors duration-300 ease-in-out group-hover:text-white'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
