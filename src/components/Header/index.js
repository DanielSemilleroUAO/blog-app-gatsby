import React from 'react'
import { Link } from 'gatsby'
// Componets

// Hooks
import { useConfigQuery } from 'hooks/useConfigQuery'
import { Logo, Wrapper } from './Header.styles'
import Menu from 'components/Menu'
// Styles


const Header = ({ siteTitle }) => {
    const siteConfig = useConfigQuery()
    console.log(siteConfig)
    return (
        <Wrapper>
            <Menu items={siteConfig.menu} />
            <Link to='/'>
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
            <div>Theme Bottom</div>
        </Wrapper>
    )
}

export default Header