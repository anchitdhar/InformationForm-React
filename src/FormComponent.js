import React from 'react'

function FormComponent(props) {
    return (
        <main>
          <form>
            <input name="firstName" value={props.data.firstName}
              placeholder="First Name"
              onChange={props.handleChange} />
            <br />
            <input name="lastName" value={props.data.lastName}
              placeholder="Last Name"
              onChange={props.handleChange} />
            <br />
            <input name="Age" value={props.data.age}
              placeholder="Age"
              onChange={props.handleChange} />
            <br />
            <label>
              <input type="radio" name="gender"
                value="male" checked={props.data.gender === "male"}
                  onChange={props.handleChange}/> Male
            </label>
            <br />
            <label>
              <input type="radio" name="gender"
                value="female" checked={props.data.gender === "female"}
                  onChange={props.handleChange}/> Female
            </label>
            <br />
            <select value={props.data.destination}
              name="destination" onChange={props.handleChange}>
              <option value="">--Please Choose a destination --</option>
              <option value="Germany">Germany</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Dubai">Dubai</option>
            </select>
            <br />
            <label>
              <input type="checkbox" name="isVegan"
                onChange={props.handleChange}
                checked={props.data.isVegan} /> Vegan?
            </label>
            <br />
            <label>
              <input type="checkbox" name="isEggiterian"
                onChange={props.handleChange}
                checked={props.data.isEggiterian} /> Eggiterian?
            </label>
            <br />
            <label>
              <input type="checkbox" name="isNonVegiterian"
                onChange={props.handleChange}
                checked={props.data.isNonVegiterian} /> NonVegiterian?
            </label>
            <br />
            <button>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {props.data.firstName} {props.data.lastName}</p>
          <p>Your age: {props.data.age} </p>
          <p>Your gender: {props.data.gender}</p>
          <p>Your destination: {props.data.destination}</p>
          <p>Your dietary restrictions:</p>
          <p>NonVegiterian:{props.data.isNonVegiterian ? "Yes":"No"}</p>
          <p>Eggiterian:{props.data.isEggiterian ? "Yes":"No"}</p>
          <p>Vegan:{props.data.isVegan ? "Yes":"No"}</p>
          
        </main>
      )
}

export default FormComponent