import React from 'react';
// import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { Button} from '@material-ui/core';
import '../index.css'

export default class Navbar extends React.Component {
    render() {
        return(
            <AppBar>
                <Button href="/" className = "buttons">Home</Button>
                <Button href="/auth/signin" className = "buttons">Login</Button>
            </AppBar>
        )
    }
}
    // <nav>
        // <Link to = "/">Home</Link>
        // <Link to = "/auth/signin">Sign in</Link>
        // <Link to = "/auth/signup">Sign up</Link>
        // <Link to = "/">Sign out</Link>
    // <nav>