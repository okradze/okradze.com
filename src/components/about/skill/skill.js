import React from 'react'
import './skill.scss'

const Skill = ({ title, fill }) => (
    <div className='skill'>
        <h4 className='skill__title'>{title}</h4>
        <div className='skill__line'>
            <div style={{ width: `${fill}%` }} className='skill__fill' />
        </div>
    </div>
)

export default Skill
