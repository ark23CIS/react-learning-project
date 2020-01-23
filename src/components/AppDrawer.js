import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
// import ContactIcon from 'material-ui/svg-icons/communication/contacts'
import ActionHome from 'material-ui/svg-icons/action/home';
import SignupIcon from 'material-ui/svg-icons/action/account-box';
import FontIcon from 'material-ui/FontIcon';

const AppDrawer = (props) => {
    return (
        <Drawer 
            open={props.open} 
            docked = {false} 
            onRequestChange = {(open) => {props.onToggle(open)}}
        >
            <Link to = "/" onClick = {() => {props.onToggle(false)}}>
                <MenuItem leftIcon = {
                    <ActionHome 
                        color = {'#009688'}
                        hoverColor = {'#cddc39'}
                    />
                }>Home</MenuItem>
            </Link>
            <Link to = "/auth/signup" onClick = {() => {props.onToggle(false)}}>
                <MenuItem leftIcon = {
                    <SignupIcon 
                        color = {'#4527a0'}
                        hoverColor = {'#f50057'}
                    />
                }
                >Sign up</MenuItem>
            </Link>
            <Link to = "/about-us" onClick = {() => {props.onToggle(false)}}>
                <MenuItem leftIcon = {
                    <FontIcon 
                        className = "material-icons"
                        color = {'#2962ff'}
                        hoverColor = {'#757575'}
                    >help</FontIcon>
                }>About us</MenuItem>
            </Link>
            <Link to = "/contact-us" onClick = {() => {props.onToggle(false)}}>
                <MenuItem leftIcon = {
                    <FontIcon 
                        className = "material-icons"
                        color = {'#76ff03'}
                        hoverColor = {'#69f0ae'}
                    >settings_phone</FontIcon>
                }>Contact us</MenuItem>
            </Link>
        </Drawer>
    )
}
export default AppDrawer;