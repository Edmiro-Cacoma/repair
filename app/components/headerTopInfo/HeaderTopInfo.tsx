import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeaderTopInfo:React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-lightBlue py-8 px-[10%] w-full flex items-center justify-center">
            <div className="absolute whitespace-nowrap animate-scroll flex gap-10 ">
                <p className="text-2xl text-white">
                    <FontAwesomeIcon icon={faLocationDot} className="text-yellow mr-2" /> Luanda, Angola
                </p>
                <p className="text-2xl text-white">
                    <FontAwesomeIcon icon={faEnvelope} className="text-yellow mr-2" /> edmirocacoma99@gmail.com
                </p>
                <p className="text-2xl text-white">
                    <FontAwesomeIcon icon={faPhone} className="text-yellow mr-2" /> +244 - 926830912
                </p>
            </div>
        </section>
    );
};

export default HeaderTopInfo;
