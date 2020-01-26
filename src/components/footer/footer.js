import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import rockon from '../../images/rockon.png'
import './footer.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "rockon.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <footer className='footer'>
            <div className='container-xl footer__container'>
                <h4 className='footer__right'>
                    Designed & Developed by Mirian Okradze
                    <span className='footer__emoji-wrapper'>
                        <Img
                            className='footer__emoji'
                            fluid={data.image1.childImageSharp.fluid}
                        />
                    </span>
                </h4>

                <div className='footer__social'>
                    <a
                        href='mailto:okradzemirian@gmail.com'
                        target='_blank'
                        className='footer__social-link'
                    >
                        EMAIL
                    </a>
                    <a
                        href='https://github.com/okradzemirian'
                        target='_blank'
                        className='footer__social-link'
                    >
                        GITHUB
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
