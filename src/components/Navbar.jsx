import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from '../styles';
import { navLinks } from "../constants";
import { logo, logo2x,  menu, close } from "../assets";
import VisuallyHidden from './VisuallyHidden/VisuallyHidden';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }  
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link   
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); 
            window.scrollTo(0,0)
          }}>
          <img className='w-9 h-9 object-contain' srcSet={`${logo} 1x, ${logo2x} 2x`} src={logo} alt='Portfolio logo' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center transition-colors hover:text-violet-600'>Dara &nbsp; <span className='sm:block hidden'> | Portfolio</span></p>
        </Link>
        <div className='hidden sm:block'>
          <List active={active} setActive={setActive} />
        </div>
        <div className='flex flex-1 justify-end items-center sm:hidden'>
          <button
            type='button'
            onClick={() => setToggled(!toggled)}
          >
            <img src={toggled ? close : menu} alt="Menu" />
            <VisuallyHidden>{toggled ? "Close menu" : "Open menu"}</VisuallyHidden>
          </button>
          <div className={`${toggled ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <List active={active} setActive={setActive} toggled={toggled} setToggled={setToggled} />
          </div>
        </div>
      </div>
    </nav>
  )
}

function List ({ active, setActive, toggled, setToggled }) {
  function handleClick(title) {
    if (setToggled) {
        setToggled(!toggled);
    }
    if (setActive) {
      setActive(title);
    }
  };

  return (
    <ul className='list-none flex flex-col sm:flex-row gap-10'>
      {navLinks.map(({id, title}) => (
        <li
          key={id}
          className={`font-poppins font-medium cursor-pointer text-[18px] ${
            active === title ? "text-white" : "text-secondary"
          }`} 
           onClick={() => handleClick(title)} >
          <a className='transition-colors hover:text-violet-600' href={`#${id}`}>{title}</a>
        </li>
        ))}
    </ul>
  )
}

export default Navbar