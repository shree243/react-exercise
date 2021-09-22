import React, { useEffect, useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(() => {
        if(window.innerWidth > 500){
            return false
        }
        return true
    })

    const handleResize = () => {
        if(window.innerWidth < 500){
            setMenuVisible(true)
            console.log('change')
        } else{
            setMenuVisible(false)
        }
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])


    return (
        <div className='nav' >
          <ul className='navbar'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact</li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>Social</li>
          </ul>
          {menuVisible === true ? (
              <button>Menu</button>
          ) : (null)}
        </div>
    )
}

export default Navbar
