import AboutPic from './assets/About.jpeg'


function About() {
  return (
    <div className="flex justify-evenly items-center min-w-[100%] bg-black bg-opacity-1">
      <div className="flex flex-col  w-[28%] h-[100%] gap-[0.9rem]">
        <h1 className="font-bold text-[2rem] text-white">About Me</h1>
        <p className="text-gray-400 text-[1rem] pb-[0.5rem]"> I am a frontend developer with a passion for creating user-friendly and visually appealing websites. I specialize in HTML, CSS, JavaScript, and im still learning React.js. I am constantly learning and improving my skills to stay updated with the latest technologies and trends in web development.</p>
        <a href="" className="text-center bg-white text-black p-2 rounded-md w-[34%] border-white border-[1px] hover:bg-black hover:text-white hover:border-white hover:border-[1px] hover:w-[34%]">Download CV</a>
      </div>

      <div className="relative w-[35%]">
        <img src={AboutPic} alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xl font-bold "><span className='text-[5rem]'>&rdquo;</span><br />It takes courage to grow up <br /> and become who you really are. <br /><br /><br /><div className='text-[5rem] text-end'>&rdquo;</div></p>
        </div>
      </div>
    </div>
  );
}

export default About

