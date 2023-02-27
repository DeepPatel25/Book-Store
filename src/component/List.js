import React from 'react'
import Title from './Title'

export default function List({ name }) {
    // Day 6 Code
    const objs = [
        {
            title: 'Deep',
            id: 1,
            description: 'My name is deep and i am web developer.'
        },
        {
            title: 'Vishal',
            id: 2,
            description: 'My name is vishal and i am front-end developer.'
        },
        {
            title: 'Krinsi',
            id: 3,
            description: 'My name is krinsi and i am Data scientist.'
        }
    ]

    const objsList = objs.map(obj => <Title key={obj.title} obj={obj} />)

    return (
        <p> {objsList} </p>
    )
}
