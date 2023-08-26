import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
            <img src="https://gymate-stefvndev.vercel.app/static/media/logo.c5ac0791c9f959f36051cff4c1188c2c.svg" alt="" />
        </div>
        <ul className='flex gap-5'>
            <li className='hover:text-[#ff0336]'><a href="#">Home</a></li>
            <li className='hover:text-[#ff0336]'><a href="#">About</a></li>
            <li className='hover:text-[#ff0336]'><a href="#">Gallery</a></li>
            <li className='hover:text-[#ff0336]'><a href="#">Schedule</a></li>
            <li className='hover:text-[#ff0336]'><a href="#">Blog</a></li>
            <li className='hover:text-[#ff0336]'><a href="#">Pricing</a></li>
            <li className='hover:text-[#ff0336]'><a href="#">Classes</a></li>
            <li className='hover:text-[#ff0336]'><a href="#">Contact</a></li>
        </ul>
        <ul className='flex gap-10 justify-center items-center'>
            <li className='font-bold hover:text-[#ff0336]'><a href="#"></a><i className="fa-regular fa-user fa-xl"></i></li>
            <li className='font-bold hover:text-[#ff0336]'><a href="#"><i className="fa-solid fa-ellipsis fa-xl"></i></a></li>
            <li className='join-btn rounded-sm border-[rgb(255,255,255,0.3)] border-2'><a className='font-bold text-sm' href="#"><i className="fa-solid fa-plus"></i>JOIN CLASS NOW</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
