import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ButtonBar from "./ButtonBar";

const defaultProps = {
    bgcolor: 'background.paper',
    m: 0,
    style: { width: '5rem', height: '5rem' },
    borderColor: 'black',
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#BB0B0B',
        color: props => props.color,
    },
    b1: {
    },
    b2: {
        backgroundColor : 'red'
    }

}));

export default function TableauMeteo() {
    const classes = useStyles();
    const [color,setBackgroungColor] = useState('#F00000');
    return (
        <>
        <Box display="flex" justifyContent="center">
            <Box border={1} {...defaultProps} className={classes.b1} />
            <Box border={1} {...defaultProps} className={classes.b2} />
            <Box border={1} {...defaultProps} className={classes.b2} />
            <Box border={1} {...defaultProps} className={classes.b2} />
            <ButtonBar></ButtonBar>
        </Box>
        </>
    );

}
