import React, {Component} from 'react'
import SingleOption from './SingleOptionComponent'

class PreferencesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodsTouched: false,
            foodSelect: false,
            musicSelect: false,
            selectedThings: [],
            allOptions: ['Italian', 'indian', 'Chinese', 'Japannese', 'Mexican', 'Meditarranean']
        }

        
        
        this.addThing = this.addThing.bind(this)
        this.removeThing = this.removeThing.bind(this)
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
        // const SingleOption = ({option}) => {
        //     return <div className="pref-click">
        //         {option}
        //         </div>
        // }
        const options = this.state.allOptions.map((option, index) => {
            return <SingleOption 
                option={option} 
                key={index} 
                addThing={this.addThing}
                removeThing={this.removeThing}/>
        })
        
    return (
        <div className="login">
            <form >
                <h3 >What are your preferences?</h3>

                {/* <ol>
                    <li>How many categories?</li>
                    <li>Search bar to find specific ones</li>
                    <li>When clicking one, have checkboxes auto generate and be selected</li>
                    <li>click submit to save results</li>
                </ol>

                <ul>
                    <li>Real time search results will have to use local state</li>
                    <li>local state will have to have an array or object that gets added on each time category is selected.</li>
                    <li>local state for form sill be tricky.</li>
                </ul> */}
                

                <section className="options">
                    {options}
                </section>
                <div className="pref-click">
                TEST
                </div>
                <input type="submit"/>
                
            </form>
        </div>
    )
            }
}

export default PreferencesComponent;