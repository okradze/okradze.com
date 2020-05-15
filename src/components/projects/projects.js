import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Project from './project/project'
import './projects.scss'

const PROJECTS = graphql`
    query {
        allMarkdownRemark(
            sort: { order: ASC, fields: frontmatter___order }
            filter: { fileAbsolutePath: { regex: "/projects/[^/]*.md$/" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        github
                        body
                        title
                        web
                        tech
                        image {
                            childImageSharp {
                                fluid(quality: 100, maxWidth: 350) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const Projects = () => {
    const data = useStaticQuery(PROJECTS)

    return (
        <section id='projects'>
            <div className='container'>
                <h2 className='projects__heading'>Some Projects I've Made</h2>
                <div className='projects'>
                    {data.allMarkdownRemark.edges.map(
                        ({ node: { frontmatter, id } }) => (
                            <Project key={id} {...frontmatter} />
                        ),
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects
