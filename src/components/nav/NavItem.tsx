import React from 'react';
import  { Link } from 'react-router-dom'
export interface NavItemProps{
    isActive?: boolean;
    text: string,
    to?: string
}

const NavItem: React.FC<NavItemProps> = ({isActive, text, to}) => {
    return (
        <li className={`nav-item ${isActive && "active"}`}>
            <Link to={to!} className="nav-link">
                {text}
            </Link>
          </li>
    )
}

NavItem.defaultProps = {
    isActive: false,
    to: "#"
}

export default NavItem;