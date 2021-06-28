import React, { Component } from 'react'

class SingleOptionComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: false
        }

        this.selectThis = this.selectThis.bind(this)
        this.deselectThis = this.deselectThis.bind(this)
    }

    selectThis(option){
        this.setState(prevState => {
            return { selected: !prevState.selected }
        })

        this.props.addThing(option)
    }

    deselectThis(option){
        this.setState(prevState => {
            return { selected: !prevState.selected }
        })

        this.props.removeThing(option)
    }

   

    render(props) {
        if(this.state.selected){
            return (
                <div className="blue" onClick={() => this.deselectThis(this.props.option)}>
                    {this.props.option}!
                </div>
            )
        } else {
            return (
                <div className="pref-click" onClick={() => this.selectThis(this.props.option)}>
                    {this.props.option}
                </div>
            )
        }
        
    }
}

export default SingleOptionComponent;