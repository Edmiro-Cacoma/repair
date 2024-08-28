
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRightAlt, faStar} from '@fortawesome/free-solid-svg-icons';
const ClientReviews: React.FC = () => {
    const clientsReviews = [
        { image: "pic-1.png", name: "Delero King", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi alias consequatur sint doloribus illo vitae mollitia, iusto excepturi nobis." },
        { image: "pic-2.png", name: "Zuleica Benza", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi alias consequatur sint doloribus illo vitae mollitia, iusto excepturi nobis." },
        { image: "pic-3.png", name: "Marco Victor", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi alias consequatur sint doloribus illo vitae mollitia, iusto excepturi nobis." }]
    return (
        <section className='bg-whiteGray'>
            <h1 className="heading">Deixe-nos saber <span>o que você </span> achou</h1>

            <div className="grid-container">
                {clientsReviews.map((item, index) => {
                    return (
                        <div className='flex items-center flex-col p-8 bg-white shadow' key={index} >
                            <div className="stars">
                               
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-3xl text-gray-600"
                                />
                            </div>
                            <div className="relative py-[1.5rem] px-0 z-0 flex flex-col items-center">
                                <FontAwesomeIcon
                                    icon={faQuoteRightAlt}
                                    className="absolute -z-10 text-[3rem]  text-lightBlue"
                                />
                                <p className='text-2xl leading-8 text-blackGray'>{item.description}</p>
                            </div>
                            <div className="flex items-center flex-col">
                                <img src={item.image} alt={item.name} className='w-[7rem] h-[7rem] capitalize text-veryBlackBlue rounded-full '/>
                                <h3 className=''>{item.name}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>


        </section>
    )
}

export default ClientReviews;