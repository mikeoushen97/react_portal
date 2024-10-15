import React from "react";
import BreadcrumbsStyles from "./Breadcrumbs.module.css"
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {

    const location = useLocation();

    const pathnames = location.pathname.split('/').filter((x) => x);

    const routeNameMap: { [key: string]: string } = {
        '/archive': 'Архив',
    };

    return (
        <div className={BreadcrumbsStyles["breadcrumbs"]}>
            <ul>
                <li>
                    <Link to="/home">Главная</Link>
                </li>

                {pathnames.map((value, index) => {
                    const linkTo = `/${pathnames.slice(0, index + 1).join('/')}`;


                    return (
                        <React.Fragment>
                            {index <= pathnames.length - 1 && <span> / </span>}
                            <li key={index}>
                                <Link
                                    to={linkTo}
                                    style={{ pointerEvents: index === pathnames.length - 1 ? 'none' : 'auto' }}
                                >
                                    {routeNameMap[linkTo]}
                                </Link>
                            </li>

                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    )
}

export default Breadcrumbs