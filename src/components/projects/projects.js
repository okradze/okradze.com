import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Project from './project/project'
import './projects.scss'

const PROJECTS = graphql`
    query {
        allContentfulProject {
            edges {
                node {
                    id
                    title
                    body
                    web
                    github
                    tech {
                        id
                        content
                    }
                    image {
                        fluid {
                            src
                            base64
                            sizes
                            srcSet
                            aspectRatio
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
            <div className='container-md'>
                <h2 className='projects__heading'>Some Projects I've Made</h2>
                <div className='projects'>
                    {data.allContentfulProject.edges.map(({ node }) => (
                        <Project key={node.id} {...node} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
