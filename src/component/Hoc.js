import React from 'react'

const Hoc = (HocComponent, data) => {
    return class extends React.Component {
        render() {
            return <HocComponent data={data} />
        }
    }
}


export default Hoc
