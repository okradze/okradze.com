import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Project from './project/project'
import './projects.scss'

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "podcast.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image2: file(relativePath: { eq: "color-generator.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section id='projects'>
            <div className='container-md'>
                <h2 className='projects__heading'>Some Projects I've Made</h2>
                <div className='projects'>
                    <Project
                        title='Podcast Player'
                        paragraph='A web app for listening to podcasts. View the top podcasts, discover new podcasts, get detailed information and recommendations.'
                        github='https://github.com/okradzemirian/podcast-player'
                        web='https://podcast-c573db.netlify.com/'
                        tech={['React', 'Redux', 'ListenNotes API']}
                        fluid={data.image1.childImageSharp.fluid}
                    />
                    <Project
                        title='Color Generator'
                        paragraph='A web app to generate color schemes.'
                        github='https://github.com/okradzemirian/podcast-player'
                        web='https://color-generator-cy39b.netlify.com/'
                        tech={['React']}
                        fluid={data.image2.childImageSharp.fluid}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
