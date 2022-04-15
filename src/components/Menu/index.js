import { Link } from 'gatsby'
import React from 'react'
// Styles
import { Nav } from './Menu.styles'


const Menu = ({ items }) => {
    console.log(items)
    return (
        <Nav>
            {items.map(item => (
                <li key={item.id}>
                    <Link to={item.link} activeClassName="active">
                        {item.name}
                    </Link>
                </li>
            ))}
        </Nav>
    )
}

export default Menu