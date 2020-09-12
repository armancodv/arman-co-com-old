import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useUser from "../hooks/useUser";
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {
    const {user} = useUser()
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Avatar alt={user.firstName + " " + user.lastName} src="./user.jpg" className={classes.avatar} />
                    <Typography variant="h6" className={classes.title}>
                        {user.firstName} {user.lastName} | {user.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;