/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import project1 from './../../assets/projects/projects1.png';
import project2 from './../../assets/projects/projects2.png';
import project3 from './../../assets/projects/projects3.png';


const Projects = () => {
    return (

        <div>
            <div className="bg-white mt-20 py-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-[#333]">LATEST PROJECTS</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 font-bold gap-6 mt-16 max-md:max-w-lg mx-7">
                        <Link to='https://github.com/TahmidShawn/ZenFiT-client-side' target='_blanks'>
                            <div className="bg-white cursor-pointer h-96 rounded overflow-hidden border-2 relative group">
                                <img src={project1} alt="Blog Post 1" className="w-full object-cover" />
                                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white hover:bg-gray-300 opacity-90">
                                    <span className="text-sm block text-gray-600 mb-2">10 FEB 2023 | BY TAHMID SHAWN</span>
                                    <h3 className="text-xl font-bold text-[#333]">ZenFiT - Your Fitness Tracker</h3>
                                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                                        <p className="text-gray-600 text-sm">ZenFiT is a fitness tracker designed to help you stay on top of your fitness goals. Whether you're a seasoned athlete or just starting, ZenFiT has got you covered.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='https://github.com/TahmidShawn/SkillBee-client-side' target='_blanks'>
                            <div className="bg-white cursor-pointer rounded h-96 overflow-hidden border-2 relative group">
                                <img src={project2} alt="Blog Post 2" className="w-full object-cover" />
                                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white hover:bg-gray-300 opacity-90">
                                    <span className="text-sm block text-gray-600 mb-2">7 JUN 2023 | BY TAHMID SHAWN</span>
                                    <h3 className="text-xl font-bold text-[#333]">SkillBee - Unleash your Potential</h3>
                                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                                        <p className="text-gray-600 text-sm">SkillBee is a platform dedicated to helping individuals discover, enhance, and showcase their skills. Whether you're a seasoned professional or a passionate learner, SkillBee provides a space for you to grow and connect with others who share your interests.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='https://github.com/TahmidShawn/TechVine-client-side' target='_blanks'>
                            <div className="bg-white cursor-pointer rounded h-96 overflow-hidden border-2 relative group">
                                <img src={project3} alt="Blog Post 3" className="w-full object-cover" />
                                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white hover:bg-gray-300 opacity-90">
                                    <span className="text-sm block text-gray-600 mb-2">5 OCT 2023 | BY TAHMID SHAWN</span>
                                    <h3 className="text-xl font-bold text-[#333]">TechVine - Cultivating Tech Knowledge</h3>
                                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                                        <p className="text-gray-600 text-sm">TechVine is a platform that cultivates tech knowledge, providing a space for tech enthusiasts to explore, learn, and collaborate. Whether you're a seasoned developer or just starting your tech journey, TechVine is here to nurture your passion for technology.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
