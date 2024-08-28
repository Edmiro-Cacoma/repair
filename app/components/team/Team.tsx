import React from 'react'

interface TeamMenbers {
    name: string;
    role: string;
    image: string;


}

const Team: React.FC = () => {
    const teamMembers: TeamMenbers[] = [
        {
            name: 'Delero King',
            role: 'Project Manager',
            image: '/team-1.jpg',

        },
        {
            name: 'C4 Pedro',
            role: 'Frontend Developer',
            image: '/team-2.jpg',

        },
        {
            name: 'Plutonio',
            role: 'Backend Developer',
            image: '/team-3.jpg',

        }]
    return (
        <section className=''>
            
            <h1 className="heading">Nosso <span>Team</span></h1>

            <div className="grid-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="">
                        <div className="overflow-hidden text-center">
                            <div className="">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="p-8 -mb-8">
                                <h3 className='capitalize text-blackGray text-[2rem]'>{member.name}</h3>
                                <span className='text-[1.4rem]text-blackGray leading-8 py-2 px-0'>{member.role}</span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Team;