import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const SocialMediaIcons = () => {
    return (
        <div className="items-center flex gap-4">
            <Link href="#" className="text-2xl bg-lightBlue transition-colors duration-300 ease-in-out flex items-center justify-center text-white rounded-full h-12 w-12 hover:text-blackGray">
                <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link href="#" className="text-2xl bg-lightBlue transition-colors duration-300 ease-in-out flex items-center justify-center text-white rounded-full h-12 w-12 hover:text-blackGray">
                <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="#" className="text-2xl bg-lightBlue transition-colors duration-300 ease-in-out flex items-center justify-center text-white rounded-full h-12 w-12 hover:text-blackGray">
                <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#" className="text-2xl bg-lightBlue transition-colors duration-300 ease-in-out flex items-center justify-center text-white rounded-full h-12 w-12 hover:text-blackGray">
                <FontAwesomeIcon icon={faLinkedin} />
            </Link>
        </div>
    );
};

export default SocialMediaIcons;
