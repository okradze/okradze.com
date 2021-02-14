import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './footer.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/rockon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="container footer__container">
        <h4 className="footer__right">
          Designed & Developed by Mirian Okradze
          <span className="footer__emoji-wrapper">
            <Img
              className="footer__emoji"
              fluid={data.image1.childImageSharp.fluid}
            />
          </span>
        </h4>

        <div className="footer__social">
          <a
            rel="noopener noreferrer"
            href="mailto:okradzemirian@gmail.com"
            target="_blank"
            className="footer__social-link"
          >
            EMAIL
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/okradze"
            target="_blank"
            className="footer__social-link"
          >
            GITHUB
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
