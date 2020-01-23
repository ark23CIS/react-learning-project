import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const AppDrawer = (props) => {
    return (
        <Drawer 
            open={props.open} 
            docked = {false} 
            onRequestChange = {(open) => {props.onToggle(open)}}
        >
            <MenuItem>Home</MenuItem>
            <MenuItem>Sign in</MenuItem>
        </Drawer>
    )
}
export default AppDrawer;