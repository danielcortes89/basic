import React, {Component} from 'react'
import SingleOption from './SingleOptionComponent'

class PreferencesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodsTouched: false,
            foodsActive: true,
            sportsActive: false,
            selectedThings: [],
            allOptions: ['Italian', 'indian', 'Chinese', 'Japannese', 'Mexican', 'Meditarranean'],
            sportsOptions: ['American Football', 'Football', 'Basketball', 'Squash', 'Tennis', 'golf']
        }

        
        this.getAllSelections = this.getAllSelections.bind(this)
        this.getAllFood = this.getAllFood.bind(this)
        this.addThing = this.addThing.bind(this)
        this.removeThing = this.removeThing.bind(this)
    }


    getAllSelections = (e) => {
        e.preventDefault()
        console.log(this.state.selectedThings)
        this.setState({
            foodsTouched: true
        })
    }

    getAllFood = (e) => {
        e.preventDefault()
        // console.log(this.state.selectedThings)
        this.setState({
            foodsActive: false,
            sportsActive: true,
            // foodsTouched: true
        })
    }

    addThing = (thing) => {
        this.setState(state => {
            const selectedThings = [...state.selectedThings, thing]

            return {
                selectedThings
            }
        })
    }

    removeThing = (thing) => {
        this.setState(state => {
            const selectedThings = state.selectedThings.filter((item) => thing !== item)

            return {
                selectedThings
            }
        })
    }

    render(){
        const options = this.state.allOptions.map((option, index) => {
            return <SingleOption 
                option={option} 
                key={index} 
                addThing={this.addThing}
                removeThing={this.removeThing}/>
        })

        const sportsOptions = this.state.sportsOptions.map((option, index) => {
            return <SingleOption 
                option={option} 
                key={index} 
                addThing={this.addThing}
                removeThing={this.removeThing}/>
        })
        
    return (
        <div className="login container">
            {this.state.foodsTouched && <div>
                <h2>You picked:</h2>
                <ul>
                    {this.state.selectedThings.map(thing => {
                        return <li key={thing}>{thing}</li>
                    })}
                </ul>
                </div>}
            {this.state.foodsActive && <form onSubmit={this.getAllFood}>
                <h3 >What are your preferences?</h3>
                

                <section className="options row">
                    {options}
                </section>
                
                <input type="submit"/>
                
            </form>}
            {this.state.sportsActive && <form onSubmit={this.getAllSelections}>
                <h3 >What are your Sports preferences?</h3>
                

                <section className="options row">
                    {sportsOptions}
                </section>
                
                <input type="submit"/>
                
            </form>}
        </div>
    )
            }
}

export default PreferencesComponent;