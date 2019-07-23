import React from 'react'

class ImageGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText : "",
            lowerText: "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allImageMemes : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState(
                    {
                        allImageMemes: response.data.memes
                    })
            })
    }

    handleChange(event) {
        let {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random()*this.state.allImageMemes.length)
        const randomMemeImg = this.state.allImageMemes[randomNum].url
        this.setState({
            randomImg : randomMemeImg
        })
    }

    render(){
        return (
            <div>
                <form className="meme-form"  onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText"
                        placeholder="top text"
                        value={this.setState.topText}
                        onChange={this.handleChange}
                        >
                    </input>
                    <input 
                        type="text" 
                        name="lowerText"
                        placeholder="lower text"
                        value={this.setState.lowerText}
                        onChange={this.handleChange}
                        >
                    </input>
                    <br/>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""></img>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.lowerText}</h2>
                </div>
            </div>
        )
    }
}

export default ImageGenerator