import React from 'react';

export default class Signup extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        firstPassword: '',
        secondPassword: ''
    }

    submit = (e) => {
        e.preventDefault();
    }

    change = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return(
            <React.Fragment>
                <h1>Sign Up</h1>
                <form onSubmit={this.submit}>
                    <div className = "firstName">
                        <input type="text" name = "firstName" placeholder = "First name" onChange={this.change}></input>
                    </div>
                    <div className = "lastName">
                        <input type="text" name = "lastName" placeholder = "Last name" onChange={this.change}></input>
                    </div>
                    <div className = "email">
                        <input type="email" name = "email" placeholder = "email" onChange={this.change}></input>
                    </div>
                    <div className = "firstPassword">
                        <input type="password" name = "firstPassword" placeholder = "firstPassword" onChange={this.change}></input>
                    </div>
                    <div className = "secondPassword">
                        <input type="password" name = "secondPassword" placeholder = "second Password" onChange={this.change}></input>
                    </div>
                    <div className = "submit">
                        <input type="submit" name = "submit" value="Submit"></input>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}