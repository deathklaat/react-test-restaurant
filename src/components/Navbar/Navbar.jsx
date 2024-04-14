import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { images, data } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        {data.navLinks.map((link, i) => <li className='p__opensans' key={i}><a href={link.href}>{link.text}</a></li>)}
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log In / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book a table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              {data.navLinks.map((link, i) => <li className='p__opensans' key={i}><a href={link.href}>{link.text}</a></li>)}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
