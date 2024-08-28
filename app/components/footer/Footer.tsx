import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SocialMediaIcons from '../socialMedia/SocialMediaIcons';
import Link from 'next/link';

const Footer: React.FC = () => {
    const footerQuickLinks = [
        { title: "Home" },
        { title: "Sobre" },
        { title: "Serviços" },
        { title: "Galeria" },
        { title: "Team" },
        { title: "Reviews" },
        { title: "Contatos" }
    ];

    const footerHours = [
        { day: "segunda feira", hour: "10:00am as 21:00" },
        { day: "terça feira", hour: "10:00am as 21:00" },
        { day: "quarta feira", hour: "10:00am as 21:00" },
        { day: "quinta feira", hour: "10:00am as 21:00" },
        { day: "sexta feira", hour: "10:00am as 21:00" },
        { day: "sabádo", hour: "10:00am as 21:00" },
        { day: "domingo", hour: "fechado" }
    ];

    return (
        <div className='bg-whiteGray mt-8 shadow-lg py-8 px-4 w-full'>
            <div className="flex flex-wrap justify-around py-0 px-8 my-0 mx-auto gap-8 sm:gap-4">
                <div className="flex flex-col max-w-full sm:max-w-[15.625rem] mb-8">
                    <h3 className="text-2xl sm:text-3xl capitalize mb-4 text-veryBlackBlue">Acesso rápido</h3>
                    <ul className="p-0 m-0 list-none flex flex-col items-start gap-4">
                        {footerQuickLinks.map((item, index) => (
                            <li key={index} >
                                <Link href="#" className='flex items-center text-lg sm:text-2xl text-blackGray transition-colors duration-300 ease-in-out hover:text-lightBlue'>
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className="text-xl mr-2 text-lightBlue"
                                    />
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center max-w-full sm:max-w-none">
                    <h3 className='text-2xl sm:text-3xl capitalize mb-4 text-veryBlackBlue'>Horário de funcionamento</h3>
                    {footerHours.map((item, index) => (
                        <p key={index} className='text-lg sm:text-2xl text-blackGray my-2 mx-0'>
                            <span className='text-lightBlue'>{item.day} : </span> {item.hour}
                        </p>
                    ))}
                </div>

                <div className="flex flex-col items-center max-w-full sm:max-w-none">
                    <h3 className='text-2xl sm:text-3xl capitalize mb-4 text-veryBlackBlue'>Contato</h3>
                    <div className="flex flex-col gap-4">
                        <Link href={``} className='flex items-center text-lg sm:text-2xl text-blackGray transition-colors duration-300 ease-in-out hover:text-lightBlue'>
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-xl mr-2 text-lightBlue"
                            />
                            Telefone: 926830912
                        </Link>
                        <Link href={``} className='flex items-center text-lg sm:text-2xl text-blackGray transition-colors duration-300 ease-in-out hover:text-lightBlue'>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-xl mr-2 text-lightBlue"
                            />
                            Email: edmirocacoma99@gmail.com
                        </Link>
                        <Link href={``} className='flex items-center text-lg sm:text-2xl text-blackGray transition-colors duration-300 ease-in-out hover:text-lightBlue'>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-xl mr-2 text-lightBlue"
                            />
                            Cidade: Luanda
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center max-w-full sm:max-w-none">
                    <h3 className='text-2xl sm:text-3xl capitalize mb-4 text-veryBlackBlue'>Newsletter</h3>
                    <p className='text-lg sm:text-2xl text-blackGray my-2 mx-0'>Subscreva-se para receber as novidades</p>
                    <form action="" className='flex flex-col sm:flex-row items-center gap-4 mb-4'>
                        <input
                            type="email"
                            placeholder="Insira o email"
                            className="w-full sm:w-auto border-none rounded p-[0.8rem] text-lg sm:text-2xl border border-blackGray"
                        />
                        <input
                            type="submit"
                            value="Subscreva-se"
                            className="bg-lightBlue p-[0.8rem] border-none text-whiteGray cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:bg-lightBlue w-full sm:w-auto"
                        />
                    </form>
                    <SocialMediaIcons />
                </div>
            </div>
        </div>
    );
};

export default Footer;
