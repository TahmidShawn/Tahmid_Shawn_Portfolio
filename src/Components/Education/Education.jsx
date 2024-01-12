

const Education = () => {
    return (
        <div className="bg-white mt-10 py-10">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-[#333] mb-10">EDUCATION</h2>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end border-2 p-10">
                        <time className="font-mono italic">2019-present</time>
                        <div className="text-lg font-black">Honours at Mathematics</div>
                        <p className="mt-1">Satkhira govt college, Satkhira</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end border-2 p-10">
                        <time className="font-mono italic">2018</time>
                        <div className="text-lg font-black">Higher Secondary Certificate</div>
                        <p className="mt-1">Daud Public school & college, Jashore</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end border-2 p-10">
                        <time className="font-mono italic">2016</time>
                        <div className="text-lg font-black">Secondary School Certificate</div>
                        <p className="mt-1">Cantonment High School, Jashore</p>
                    </div>
                    <hr />
                </li>

            </ul>
        </div>
    );
};

export default Education;