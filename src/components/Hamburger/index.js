import React from 'react'
import { HamburgerIcon } from './Hamburger.style'

const Hamburguer = ({ menuOpen, setMenuOpen }) => {
    return (
        <HamburgerIcon role="button" menuOpen={menuOpen} onClick={() => setMenuOpen(prev => !prev)}>
            <div />
        </HamburgerIcon>
    )
}

export default Hamburguer