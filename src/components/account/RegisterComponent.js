import React from 'react'

const RegisterComponent = () => {
    return (
        <div className="login">
            <form >
                <h3 >Tell me about yourself</h3>

                <input type="text" placeholder="Name"/>

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
                </div>
            </form>
        </div>
    )
}

export default RegisterComponent;