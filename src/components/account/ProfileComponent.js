import React, { Component } from 'react'

// Making similar model to how preferences are handled 
export default class ProfileComponent extends Component {
    constructor (props){
        super(props)
        this.state = {

        }

    }

    submitAnswers = () => {

    }

    render() {
        return (
            <div>
                <h2>Profile</h2>
                <form>
                    <input type="number" value={40}/>
                    <select name="unit">
                        <option value="miles">Miles</option>
                        <option value="feet">Feet</option>
                    </select>
                </form>
            </div>
        )
    }
}



// import React from 'react'

// export default function ProfileComponent() {
//     return (
//         <div>
//             <h1>Profile Page</h1>
            
//         </div>
//     )
// }
