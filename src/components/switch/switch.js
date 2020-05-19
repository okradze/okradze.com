import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from 'react-toggle'
import Img from 'gatsby-image'

import 'react-toggle/style.css'
import './switch.scss'

const Switch = () => {
    const data = useStaticQuery(graphql`
        query {
            sun: file(relativePath: { eq: "images/sun.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            moon: file(relativePath: { eq: "images/moon.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <div className='switch'>
                    <Img
                        className='switch__icon'
                        fluid={data.sun.childImageSharp.fluid}
                        alt='Sun'
                    />
                    <Toggle
                        checked={theme === 'dark'}
                        onChange={e =>
                            toggleTheme(e.target.checked ? 'dark' : 'light')
                        }
                        icons={false}
                        aria-label='Toggle dark mode'
                    />
                    <Img
                        className='switch__icon'
                        fluid={data.moon.childImageSharp.fluid}
                        alt='Moon'
                    />
                </div>
            )}
        </ThemeToggler>
    )
}

export default Switch
