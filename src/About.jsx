import AboutPic from './assets/About.jpeg'

function About() {
  return (
    <div className="flex justify-evenly items-center min-w-[100%] pt-[10%]">
      <div className="flex flex-col  w-[30%] gap-[0.5rem]">
        <h1 className="font-bold text-[2rem]">About Me</h1>
        <p className="text-gray-500 text-[1rem]"> I am a frontend developer with a passion for creating user-friendly and visually appealing websites. I specialize in HTML, CSS, JavaScript, and im still learning React.js. I am constantly learning and improving my skills to stay updated with the latest technologies and trends in web development.</p>
        <a href="" className="bg-black text-white p-2 rounded-md w-[34%] border-white border-[1px] hover:bg-white hover:text-black hover:border-black hover:border-[1px] hover:w-[34%]">Download CV</a>
      </div>
      <img src={AboutPic} alt="" className="w-[40%] hover:w-[40%] transition-all duration-300" />
    </div>
  );
}

export default About

