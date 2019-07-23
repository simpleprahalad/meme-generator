import React from 'react'

class LowerText extends React.Component {
    constructor(){
        super()
        this.state = {
            lowerText : ""
        }
        this.handleChangeLowerText = this.handleChangeLowerText.bind(this)
        this.handleChangeUpperText = this.handleChangeUpperText.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * 
     * @param {*} event 
     * There are 2 seperate handlers in the below code
     */
    handleChangeUpperText(event) {
        console.log(event.target.value)
        this.setState(
            {
                upperText: event.target.value
            }
        )        
    }
    handleChangeLowerText(event) {
        console.log(event.target.value)
        this.setState(
            {
                lowerText: event.target.value
            }
        )
    }

    // Above 2 handlers can be merged into single handler
    handleChange(event) {
        let {name, value} = event.target
        this.setState(
            {
                [name] : value
            }
        )
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="enter lower text" name="lowerText" onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default LowerText