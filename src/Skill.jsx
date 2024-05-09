import FaReact from './assets/react.svg'

function Skill(){
    return(
        <>
        <div className="skill-skl flex flex-col justify-center items-center gap-[1rem]">
        <h1 className="text-center text-[#000] font-bold text-[2rem]">Skill</h1>
        <div className='flex flex-row justify-center items-center gap-[5rem]'>
            <a href="">
                <img src={FaReact} alt="" /><p>React</p>
            </a>
            <a href="">
                <img src={FaReact} alt="" /><p>TailwindCSS</p>
            </a>
            <a href="">
                <img src={FaReact} alt="" /><p>Figma</p>
            </a>
            <a href="">
                <img src={FaReact} alt="" /><p>JavaScript</p>
            </a>
            </div>
            <div className='flex flex-row justify-center items-center gap-[5rem]'>
            <a href="">
                <img src={FaReact} alt="" /><p>HTML</p>
            </a>
            <a href="">
                <img src={FaReact} alt="" /><p>CSS</p>
            </a>
            <a href="">
                <img src={FaReact} alt="" /><p>Git</p>
            </a>
            <a href="">
                <img src={FaReact} alt="" /><p>GitHub</p>
            </a>
        </div>
        </div>
        </>
    );
}

export default Skill

