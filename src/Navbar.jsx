import blackLogo from './assets/black-logo.png'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-[1.3rem] py-[0.5rem]'>
        <div className="logo">
            <img src={blackLogo} alt="logo" className='w-10' />
        </div>
        <div className="navbar-nav flex gap-[1.5rem]">
            <a href="http://">Home</a>
            <a href="http://">About</a>
            <a href="http://">Contact</a>
        </div>
    </nav>
  );
}

export default Navbar;

