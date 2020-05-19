import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Toggle from 'react-toggle'
import Img from 'gatsby-image'
import 'react-toggle/style.css'
import './switch.scss'

const Switch = () => {
    const [darkMode, setDarkMode] = useState(false)

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
        <div className='switch'>
            <Img
                className='switch__icon'
                fluid={data.sun.childImageSharp.fluid}
                alt='Sun'
            />
            <Toggle
                defaultChecked={false}
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                icons={false}
                aria-label='Toggle dark mode'
            />
            <Img
                className='switch__icon'
                fluid={data.moon.childImageSharp.fluid}
                alt='Moon'
            />
        </div>
    )
}

export default Switch
