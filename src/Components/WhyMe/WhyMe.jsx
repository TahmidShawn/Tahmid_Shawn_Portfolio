

const WhyMe = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-white mt-16 pt-10 md:pt-0">
                <div className="hero-content flex-col justify-center gap-0 lg:flex-row">
                    <div>
                        <h1 className='text-5xl md:ml-2 font-bold md:mb-10'>WHY ME ?</h1>
                        <div className="min-h-[350px] flex items-center justify-center text-[#333]">
                            <div className="bg-white grid grid-cols-2 sm:gap-24 gap-12 rounded-3xl  md:pr-36 py-10">

                                <div className="text-center">
                                    <h3 className="text-4xl font-extrabold">10+</h3>
                                    <p className="text-gray-500 font-semibold mt-3">Total Project</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-extrabold">1Y+</h3>
                                    <p className="text-gray-500 font-semibold mt-3">Experience</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-extrabold">10H+</h3>
                                    <p className="text-gray-500 font-semibold mt-3">Daily Time</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-extrabold">100%</h3>
                                    <p className="text-gray-500 font-semibold mt-3">Committed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'>

                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-End Services</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I create dynamic functionality with React and sleek designs using Tailwind CSS for an enhanced user experience.</p>

                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Backend Cover</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    With hands-on experience in using Node.js, Express, and MongoDB, I craft efficient server-side solutions for seamless user interactions.</p>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Responsive Design Excellence</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Specializing in responsive design, I ensure your website adapts flawlessly to diverse devices, providing a consistent and engaging user experience across all screens.</p>
                            </li>
                        </ol>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMe;