import React from 'react';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isEggiterian: false,
      isNonVegiterian: false
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
      :
      this.setState({
        [name]:value
    })
  }

  render() {
    return (
      <main>
        <form>
          <input name="firstName" value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange} />
          <br />
          <input name="lastName" value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange} />
          <br />
          <input name="Age" value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange} />
          <br />
          <label>
            <input type="radio" name="gender"
              value="male" checked={this.state.gender === "male"}
                onChange={this.handleChange}/> Male
          </label>
          <br />
          <label>
            <input type="radio" name="gender"
              value="female" checked={this.state.gender === "female"}
                onChange={this.handleChange}/> Female
          </label>
          <br />
          <select value={this.state.destination}
            name="destination" onChange={this.handleChange}>
            <option value="">--Please Choose a destination --</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Dubai">Dubai</option>
          </select>
          <br />
          <label>
            <input type="checkbox" name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan} /> Vegan?
          </label>
          <br />
          <label>
            <input type="checkbox" name="isEggiterian"
              onChange={this.handleChange}
              checked={this.state.isEggiterian} /> Eggiterian?
          </label>
          <br />
          <label>
            <input type="checkbox" name="isNonVegiterian"
              onChange={this.handleChange}
              checked={this.state.isNonVegiterian} /> NonVegiterian?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age} </p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>NonVegiterian:{this.state.isNonVegiterian ? "Yes":"No"}</p>
        <p>Eggiterian:{this.state.isEggiterian ? "Yes":"No"}</p>
        <p>Vegan:{this.state.isVegan ? "Yes":"No"}</p>
        
      </main>
    )
  }
}

export default App;
