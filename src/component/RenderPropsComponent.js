import React from 'react'

function RenderPropsComponent(props) {
    return (
        <>
            {props.render()}
        </>
    )
}

export default RenderPropsComponent
