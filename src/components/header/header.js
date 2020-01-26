import React, { useState } from 'react'
import './header.scss'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className={`header ${isNavOpen ? 'header--nav-open' : ''}`}>
            <div className='container-xl header__container'>
                <h1 className='header__logo'>Okradze</h1>

                <span
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className='nav-toggle-container'
                >
                    <span
                        aria-label='Toggle menu'
                        className='nav-toggle'
                    ></span>
                </span>

                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className='nav__link'
                                href='#home'
                            >
                                Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className='nav__link'
                                href='#about'
                            >
                                About Me
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className='nav__link'
                                href='#projects'
                            >
                                Projects
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                className='button nav__link'
                                href='mailto:okradzemirian@gmail.com'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
