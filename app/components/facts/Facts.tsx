import React from 'react'

interface Stats {
    img: string;
    quantity: number;
    service: string;
}

const Facts: React.FC = () => {
    const stats: Stats[] = [
        { img: "/fun-fact-icon-1.svg", quantity: 2890, service: 'reparações feitas' },
        { img: "/fun-fact-icon-2.svg", quantity: 30, service: 'premios ganhos' },
        { img: "/fun-fact-icon-3.svg", quantity: 4000, service: 'clientes felizes' },
        { img: "/fun-fact-icon-4.svg", quantity: 200, service: 'trabalhadores ativos' }
    ]

    return (
        <section className='bg-white'>
            <div className='grid gap-8 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] bg-whiteGray p-8'>
                {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-center flex-col p-4 bg-white shadow-lg rounded-lg">
                        <img src={stat.img} alt={stat.service} className='h-[10rem]' />
                        <div className='flex items-center flex-col mt-4'>
                            <h3 className='text-5xl capitalize text-veryBlackBlue'>{stat.quantity}</h3>
                            <p className='text-2xl pt-2'>{stat.service}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Facts
