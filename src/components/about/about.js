import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Skill from './skill/skill'
import './about.scss'

const SKILLS = graphql`
    query {
        allContentfulSkill(sort: { order: ASC, fields: createdAt }) {
            edges {
                node {
                    id
                    title
                    percentage
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
                <div className='container-sm'>
                    <p className='about__paragraph'>
                        I'm a full-stack web developer, based in Tbilisi,
                        Georgia, who enjoys building modern and performant web
                        apps.
                        <br />
                        Here are technologies I've been working with:
                    </p>
                </div>

                <div className='skills'>
                    {data.allContentfulSkill.edges.map(({ node }) => (
                        <Skill key={node.id} {...node} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
