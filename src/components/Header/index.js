import React, {useState, useContext} from 'react'
import { Link } from 'gatsby'
// Componets

// Hooks
import { useConfigQuery } from 'hooks/useConfigQuery'
import { Logo, Wrapper } from './Header.styles'
import Menu from 'components/Menu'
import Hamburguer from 'components/Hamburger'
import MobileMenu from '../MobileMenu'
import ModeButton from '../ModeButton'
import { ModeContext } from 'context/ModeProvider'
// Styles



const Header = ({ siteTitle }) => {
    const [darkMode, setDarkMode] = useContext(ModeContext)
    const siteConfig = useConfigQuery()
    console.log(siteConfig)
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Wrapper>
            <Hamburguer MenuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
            <Link to='/'>
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
            <Menu items={siteConfig.menu} />
            <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </Wrapper>
    )
}

export default Header