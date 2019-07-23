import React from 'react'

class UpperText extends React.Component {
    constructor(){
        super()
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState(
            {
                text: event.target.value
            }
        )
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="enter upper text" onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default UpperText