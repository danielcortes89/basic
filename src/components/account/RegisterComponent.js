import React from 'react'

// Basic form to flesh out

const RegisterComponent = () => {
    return (
        <div className="register">
            <form >
                <h3 >Tell me about yourself</h3>

                <input type="text" placeholder="Name"/>

                {/* <input type="date"/>

                <input type="text" placeholder="Gender"/>

                <div className="reg-selects">
                    <label htmlFor="race">Race:</label>
                    <select id="race">
                        <option>African</option>
                        <option>Hispanic/Latino</option>
                    </select>
                </div>

                <div className="reg-selects">
                    <label htmlFor="language">Language</label>
                    <select id="language">
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                </div> */}

                <input type="text" placeholder="Hometown"/>

                {/* <div id="status">
                    <div>
                        <input type="radio" id="single"/>
                        <label htmlFor="single" name="relationship">Single</label>
                    </div>
                    

                    <div>
                        <input type="radio" id="relationship"/>
                        <label htmlFor="relationship" name="relationship">In a Relationship</label>
                    </div>

                    <div>
                        <input type="radio" id="married"/>
                        <label htmlFor="married" name="relationship">Married</label>
                    </div>
                </div> */}
                

                {/* <div className="reg-selects">
                    <label htmlFor="orientation">Interested In:</label>
                    <select id="orientation">
                        <option>Interested in</option>
                        <option>Men</option>
                    </select>
                </div> */}
                

                {/* <div>
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

export default RegisterComponent;