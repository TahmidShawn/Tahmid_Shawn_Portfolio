import skills1 from './../../assets/skills/javascript.svg';
import skills2 from './../../assets/skills/react.svg';
import skills3 from './../../assets/skills/node-js.svg';
import skills4 from './../../assets/skills/mongo.svg';
import skills5 from './../../assets/skills/express.png';
import skills6 from './../../assets/skills/tailwind.svg';
import Marquee from "react-fast-marquee";

// const skills = [skills1, skills2, skills3, skills4, skills5, skills6];

const Experience = () => {
    return (
        <section className="text-black pt-10">
            <h2 className="text-3xl pb-4 border-b-[1px] border-gray-400">EXPERIENCE</h2>

            <Marquee className='max-w-6xl mx-auto mt-10 bg-white p-5'>

                <div className='flex gap-32  w-max p-3 rounded-xl mx-auto'>
                    <img className='h-10 w-10' src={skills1} alt="" />
                    <img className='h-10 w-10' src={skills2} alt="" />
                    <img className='h-10 w-10' src={skills3} alt="" />
                    <img className='h-10 w-10' src={skills4} alt="" />
                    <img className='h-10 w-10' src={skills5} alt="" />
                    <img className='h-10 w-10' src={skills6} alt="" />
                </div>

            </Marquee>

        </section>
    );
};

export default Experience;
