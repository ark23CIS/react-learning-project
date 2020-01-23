import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import '../index.css'
import { IconButton } from 'material-ui';
import { white } from 'material-ui/styles/colors';

const RightMenu = () => (
    <IconMenu
        iconButtonElement={
            <IconButton>
                <MoreVertIcon color = {white}/>
            </IconButton>
        }
    >
        <MenuItem primaryText = "Profile" />
        <MenuItem primaryText = "Sign out" />
    </IconMenu>
)

const Navbar = (props) => {
        return(
            <AppBar
                title = "Daniels app"
                style = { {background: '#00b0ff'} }
                iconElementRight = {<RightMenu />}
                onLeftIconButtonClick = {() => props.onLeftIconClick()}
             >
            </AppBar>
        )
}
    // <nav>
        // <Link to = "/">Home</Link>
        // <Link to = "/auth/signin">Sign in</Link>
        // <Link to = "/auth/signup">Sign up</Link>
        // <Link to = "/">Sign out</Link>
    // <nav>
export default Navbar;