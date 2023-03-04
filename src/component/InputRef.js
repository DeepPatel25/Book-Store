import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()

        // Callback Refs
        this.cbRef = null
        this.setCBRef = element => {
            this.cbRef = element
        }
    }

    focusInput() {
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        console.log(this.inputRef)

        /*
        if(this.cbRef){
            this.cbRef.focus()
        } 
        */
    }

    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />
                {/* <input type="text" ref={this.setCBRef} /> */}
                {/* <button onClick={this.clickHandler} >Click</button> */}
            </>
        )
    }
}

export default InputRef
