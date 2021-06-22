import React, {Component} from 'react'

class PreferencesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchingPreferences: {
                food: [],
                entertainment: []
            },
            selectedPreferences: [

            ]
        }
    }

    updatePreferences(preference){
        this.setState({
            // selectedPreferences.preference.name: preference
        })
    }

    render(){
        
    return (
        <div className="login">
            <form >
                <h3 >What are your preferences?</h3>

                <ol>
                    <li>How many categories?</li>
                    <li>Search bar to find specific ones</li>
                    <li>When clicking one, have checkboxes auto generate and be selected</li>
                    <li>click submit to save results</li>
                </ol>

                <ul>
                    <li>Real time search results will have to use local state</li>
                    <li>local state will have to have an array or object that gets added on each time category is selected.</li>
                    <li>local state for form sill be tricky.</li>
                </ul>

                {/* <input type="text" placeholder="Name"/>

                <input type="date"/>

                <input type="text" placeholder="Gender"/>

                <select>
                    <option>African</option>
                    <option>Hispanic/Latino</option>
                </select>

                <select>
                    <option>English</option>
                    <option>Spanish</option>
                </select>

                <input type="text" placeholder="Hometown"/>

                <input type="radio" id="single"/>
                <label htmlFor="single" name="relationship">Single</label>

                <input type="radio" id="relationship"/>
                <label htmlFor="relationship" name="relationship">In a Relationship</label>

                <input type="radio" id="married"/>
                <label htmlFor="married" name="relationship">Married</label>

                
                <select>
                    <option>Interested in</option>
                    <option>Men</option>
                </select>

                <div>
                    <span className="">Color</span>

                    <input id="blue" name="fav-color" type="checkbox"/>
                    <label htmlFor="blue">Blue</label>

                    <input id="black" name="fav-color" type="checkbox"/>
                    <label htmlFor="black">Black</label>
                </div> */}
            </form>
        </div>
    )
            }
}

export default PreferencesComponent;