import React from 'react';
import Box from '@material-ui/core/Box';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '5rem', height: '5rem' },
    borderColor: 'text.primary',
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#BB0B0B',
        color: props => props.color,
    },
    b1: {
        backgroundColor : 'greenyellow'
    },
    b2: {
        backgroundColor : 'red'
    }

}));

export default function TableauMeteo() {
    const classes = useStyles();
    return (
        <>
        <Box display="flex" justifyContent="center">
            <Box border={1} {...defaultProps} className={classes.b1} />
            <Box border={1} {...defaultProps} className={classes.b2} />
        </Box>
        </>
    );
}
