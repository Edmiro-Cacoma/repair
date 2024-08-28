
interface Reasons {
    title: string,
    description: string,
    img: string
}

const Facilities: React.FC = () => {
    const reasons: Reasons[] = [{ title: "Suporte 24/7 ", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum cumque tempore. Quo nobis mollitia quis libero ipsa", img: "/why-choose-icon-1.svg" }, { title: "Serviço de qualidade ", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum cumque tempore. Quo nobis mollitia quis libero ipsa", img: "/why-choose-icon-2.svg" }, { title: "Soluções Rápidas ", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum cumque tempore. Quo nobis mollitia quis libero ipsa", img: "/why-choose-icon-3.svg" }]

    return (
        <section className='bg-whiteGray'>
            <h1 className="text-veryBlackBlue capitalize text-center mb-12 text-6xl">Por quê <span className='text-lightBlue'>escolher-nos</span> ?</h1>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] bg-whiteGray p-8">
                {reasons.map((reason, index) => (
                    <div key={index} className="bg-white p-12 text-center shadow-lg text-white flex flex-col items-center">
                        <img src={reason.img} alt={reason.title} className='h-[10rem] mb-2' />
                        <h3 className='capitalize text-blackGray text-[2rem] mb-3'>{reason.title}</h3>
                        <p className='leading-8 text-blackGray text-[1.4rem]'>{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Facilities;