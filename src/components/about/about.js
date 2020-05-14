import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Skill from './skill/skill'
import './about.scss'

const SKILLS = graphql`
    query {
        allMarkdownRemark(
            sort: { order: ASC, fields: frontmatter___order }
            filter: { fileAbsolutePath: { regex: "/skills/[^/]*.md$/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        percentage
                        order
                    }
                    html
                    id
                    fileAbsolutePath
                    children {
                        id
                    }
                }
            }
        }
    }
`

const About = () => {
    const data = useStaticQuery(SKILLS)

    return (
        <section id='about'>
            <div className='container'>
                <h2 className='about__heading'>About Me</h2>
                <p className='about__paragraph'>
                    I'm a full-stack web developer, based in Tbilisi, Georgia,
                    who enjoys building modern and performant web apps.
                    <br />
                    Here are technologies I've been working with:
                </p>

                <div className='skills'>
                    {data.allMarkdownRemark.edges.map(
                        ({ node: { frontmatter, id } }) => (
                            <Skill key={id} {...frontmatter} />
                        ),
                    )}
                </div>
            </div>
        </section>
    )
}

export default About
