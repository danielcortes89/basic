import React, {Component} from 'react'

class PreferencesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodsTouched: false,
            foodSelect: false,
            musicSelect: false
            // searchingPreferences: {
            //     food: [],
            //     entertainment: []
            // },
            // selectedPreferences: [

            // ]
        }

        this.updatePreferences = this.updatePreferences.bind(this)
        this.foodToggle = this.foodToggle.bind(this)
        this.musicToggle = this.musicToggle.bind(this)
    }

    updatePreferences(){
        this.setState({
            foodsTouched: true
        })
    }

    foodToggle(){
        this.setState(prevState => {
            return {foodSelect: !prevState.foodSelect}
        })
    }

    musicToggle(){
        this.setState(prevState => ({
            musicSelect: !prevState.musicSelect
        }))
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
                <form>

                </form>
                <details>
                    <summary onClick={this.updatePreferences}>
                        Food
                    </summary>
                    <div>
                        <div>
                            <input id="indian" name="food" type="checkbox"/>
                            <label htmlFor="indian">Indian</label>
                        </div>

                        <div>
                            <input id="italian" name="food" type="checkbox"/>
                            <label htmlFor="italian">Italian</label>
                        </div>
                    </div>
                </details>

                <h1>
                    OR....
                </h1>

                {this.state.foodSelect && <div className="pref-click blue" onClick={this.foodToggle}>
                    Food
                </div>}

                {!this.state.foodSelect && <div className="pref-click" onClick={this.foodToggle}>
                    Food
                </div>}

                {this.state.musicSelect && <div className="pref-click blue" onClick={this.musicToggle}>
                    Music
                </div>}

                {!this.state.musicSelect && <div className="pref-click" onClick={this.musicToggle}>
                    Music
                </div>}

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