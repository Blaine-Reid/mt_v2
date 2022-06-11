import React, {useState} from 'react';
import { string } from 'prop-types';

import Logo from '../Image/Image';

// logo
import logo from '../../assets/images/logo-black.svg'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { Link } from 'gatsby';

// 
const MenuButton = Button

// Container for NavBar logic and display components
const Nav = ({classNames}) => {
  const [menu, setMenu] = useState(false)
  const menuItems = ['Home','About','Features','Road Map','Mythic Team Adventures','FAQ','Reports']

  return (
  <nav id="nav" className={classNames} >

    {/* Logo */}
    <Logo 
    svg={logo} 
    alt={"Mythic Table Logo" }
    link={'/' }
    classNames={'logo-sm'}
    />

    {/* Menu Button */}
    <MenuButton 
    label={"" }
    icon={'fa-solid fa-bars' }
    onclick={()=>setMenu(true)}
    />

    {/* Content Displayed in Menu  */}
    {menu &&
        <Modal 
        closeModal={()=>setMenu(false)}
        classNames={"modal"}
        >
            <ul>
            {menuItems.map(item=>{
                            return (
                                <li className=''>
                                    <Link to={`/${item}`}>{item}</Link>
                                </li>
                                )
                        })}
            </ul>
        </Modal>
    }
  </nav>
  );
};

Nav.propTypes = {
  classNames:string
};

export default Nav;
