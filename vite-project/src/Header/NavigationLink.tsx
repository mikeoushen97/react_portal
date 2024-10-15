
import { NavLink } from "react-router-dom"

interface NavigationLinkProps {
    linkTo: string;
    pageName: string;
}


function NavigationLink({ linkTo, pageName }: NavigationLinkProps) {
    return (
        <li>
            <NavLink

                to={`/${linkTo}`}
                className={({ isActive }) => isActive ? 'activeLink' : ''}>{pageName}
            </NavLink>
        </li>
    )
}

export default NavigationLink