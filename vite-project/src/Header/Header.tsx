import { useEffect, useState } from 'react';
import HeaderStyles from './Header.module.css'
import NavigationLink from './NavigationLink';
import SearchIcon from '/icons/search_icon.svg';
import CloseIcon from '/icons/close_icon.svg';

function Header() {

    const [searchIcon, setSearchIcon] = useState(SearchIcon)
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch('/json_files/file_groups.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCities(data.base.cities)
            })
    })

    return (
        <header className={HeaderStyles['header']}>
            <div className={HeaderStyles['header__top']}>
                <div className={HeaderStyles['header__weather']}>
                    <div className={HeaderStyles['header__dropdown']} id={HeaderStyles['city-dropdown']}>
                        <div className={HeaderStyles['header__dropdown-trigger']}></div>
                        <ul className={HeaderStyles['header__city-list']} id={HeaderStyles['city-list']}>
                            {cities.map((name: string, index: number) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={HeaderStyles['header__temperature']}>
                        <img className={HeaderStyles['header__temperature-icon']} src='/icons/weather/hard_cloudy.svg' alt='' />
                        <span id={HeaderStyles['temperature']}>+4℃</span>
                    </div>
                </div>
                <a href='#' className={HeaderStyles['header__logo']}>Новосибирский Портал</a>
                <div className={HeaderStyles['header__log-in']}>
                    <img src='icons/user_icon.svg' alt='' width='18px' height='18px' />
                    <span>Войти</span>
                </div>
            </div>
            <nav className={HeaderStyles['header__navigation']}>
                <div className={HeaderStyles['header__hamburger']} id={HeaderStyles['hamburger']}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href='#' className={HeaderStyles['header__mobile-logo']}>Новосибирский Портал</a>
                <ul className={HeaderStyles['header__menu']}>
                    <div id={HeaderStyles['close-hamburger']}>
                    </div>
                    < NavigationLink linkTo={'home'} pageName={'Главная'} />
                    < NavigationLink linkTo={''} pageName={'Новости'} />
                    < NavigationLink linkTo={''} pageName={'Объявления'} />
                    < NavigationLink linkTo={''} pageName={'Афиша'} />
                    < NavigationLink linkTo={''} pageName={'Транспорт'} />
                    < NavigationLink linkTo={''} pageName={'Форум'} />
                    < NavigationLink linkTo={''} pageName={'Администрация'} />
                    < NavigationLink linkTo={'archive'} pageName={'Архив'} />
                </ul>
                <div className={HeaderStyles['header__search-button']} onClick={() => setSearchIcon(CloseIcon)}>
                    <img src={searchIcon} alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Header