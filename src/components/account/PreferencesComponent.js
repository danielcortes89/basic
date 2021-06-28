import React, {Component} from 'react'

class PreferencesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodsTouched: false,
            foodSelect: false,
            musicSelect: false,
            selectedThings: [],
            allOptions: ['Italian', 'indian', 'Chinese', 'Japannese', 'Mexican', "Meditarranean", '']
        }

        this.updatePreferences = this.updatePreferences.bind(this)
        
        this.addThing = this.addThing.bind(this)
    }

    updatePreferences(){
        this.setState({
            foodsTouched: true
        })
    }

    addThing(thing){
        let newThings = this.state.selectedThings

        if(newThings.includes(thing)){
            let filtered = newThings.filter(specThing => specThing !== thing)
            this.setState({
                selectedThings: filtered
            })
        } else {
            newThings.push(thing)
        this.setState({
            selectedThings: newThings
        })
        }

        
    }

    render(){
        const SingleOption = ({option}) => {
            return <div className="pref-click">
                {option}
                </div>
        }
        
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
                    {this.state.allOptions.map((option, index) => {
                        return <SingleOption option={option} key={index} />
                    })}
                </section>
                <div className="pref-click">
                TEST
                </div>
                
            </form>
        </div>
    )
            }
}

export default PreferencesComponent;