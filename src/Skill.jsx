import FaReact from './assets/react.svg'
import FaFigma from './assets/figma.svg'
import FaGit from './assets/git.svg'
import FaTailwindCSS from './assets/tailwindcss.svg'
import FaJavaScript from './assets/javascript.svg'
import FaCSS from './assets/css.svg'
import FaHTML from './assets/html.svg'
import FaGitHub from './assets/github.svg'

function Skill() {
    return (
        <>
            <div className="skill-skl flex flex-col justify-center items-center gap-[1rem] min-h-[50vh] py-[5rem]">
                <h1 className="text-center text-[#000] font-bold text-[2rem]">Skill</h1>
                <div className='flex flex-row justify-center items-center gap-[5rem]'>
                    <a href="">
                        <img src={FaReact} alt="" /><p>React</p>
                    </a>
                    <a href="">
                        <img src={FaTailwindCSS} alt="" /><p>TailwindCSS</p>
                    </a>
                    <a href="">
                        <img src={FaFigma} alt="" /><p>Figma</p>
                    </a>
                    <a href="">
                        <img src={FaJavaScript} alt="" /><p>JavaScript</p>
                    </a>
                </div>
                <div className='flex flex-row justify-center items-center gap-[5rem]'>
                    <a href="">
                        <img src={FaHTML} alt="" /><p>HTML</p>
                    </a>
                    <a href="">
                        <img src={FaCSS} alt="" /><p>CSS</p>
                    </a>
                    <a href="">
                        <img src={FaGit} alt="" /><p>Git</p>
                    </a>
                    <a href="">
                        <img src={FaGitHub} alt="" /><p>GitHub</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Skill

