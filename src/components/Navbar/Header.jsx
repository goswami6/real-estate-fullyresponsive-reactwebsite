import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../assets/img/logo1.png'
import menu_icon from '../../assets/img/main-menu.png'


const Header = () => {
const [sticky, setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll', ()=> {
    window.scrollY > 50 ? setSticky(true) : setSticky(false) 
  })
},[]);

  const [activeLink, setActiveLink] = useState('#page-top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set the initial active link

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const ToggleMenu = () =>{
           mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
   <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul className={mobileMenu?'': 'hide-mobile-menu'}>
    <li><a href="#page-top" className={`scroll ${activeLink === '#page-top' ? 'active' : ''}`}>Home</a></li>
                            <li><a href="#about" className={`scroll ${activeLink === '#about' ? 'active' : ''}`}>About</a></li>
                            <li><a href="#gallery" className={`scroll ${activeLink === '#about' ? 'active' : ''}`}>Gallery</a></li>
                            <li><a href="#pricing" className={`scroll ${activeLink === '#about' ? 'active' : ''}`}>Pricing</a></li>
                            <li><a href="#contact" className={`scroll ${activeLink === '#about' ? 'active' : ''}`}>Contact</a></li>
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={ToggleMenu}/>
   </nav>
  )
}

export default Header
