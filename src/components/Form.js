import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      gender: "",
      phoneNumber: "",
      password: "",
    };
  }
  render() {
      const handleNameChange=(e)=>{
        this.setState({
            name:e.target.value
        })
      }
      const handleEmailChange=(e)=>{
        this.setState({
            email:e.target.value
        })
      }
      const handlePhoneChange=(e)=>{
        this.setState({
           phoneNumber:e.target.value
        })
      }
      const handleGenderChange=(e)=>{
        this.setState({
          gender:e.target.value
        })
      }
      const handlePasswordChange=(e)=>{
        this.setState({
          password:e.target.value
        })
      }
    return (
      <form style={{ display: "flex" }}>
        <input placeholder="name" data-test-id="name" value={this.state.name} onChange={handleNameChange} />
        <input
          placeholder="email"
          data-test-id="email"
          value={this.state.email}
          onChange={handleEmailChange}
        />
        <select data-testid="gender" value={this.state.gender} onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <input
          placeholder="phoneNumber"
          data-test-id="phoneNumber"
          value={this.state.phoneNumber}
          onChange={handlePhoneChange}
        />
        <input
          placeholder="password"
          data-test-id="password"
          value={this.state.password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit Form</button>
      </form>
    );
  }
}

export default Form;