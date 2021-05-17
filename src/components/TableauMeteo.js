import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ButtonBar from "./ButtonBar";
import Button from "@material-ui/core/Button";

const defaultProps = {
    bgcolor: 'background.paper',
    m: 0,
    style: { width: '5rem', height: '5rem' },
    borderColor: 'black',
};

const defaultProps2 = {
    bgcolor: 'background.paper',
    m: 0,
    style: { width: '15rem', height: '5rem' },
    borderColor: 'black',
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#BB0B0B',
        color: props => props.color,
    },
    b1: {
                background : "blue",
                borderTopLeftRadius:'30%',
                borderBottomLeftRadius:'30%',
    },
    b2: {
        //background: "linear-gradient(to left, #e66465, #9198e5);"
        background: " linear-gradient(to left ,red , blue )"
    },
        b3: {
            background : "red"
        },
        b4: {
            background : "blue"
        },
        b5: {
            background : " linear-gradient(to left ,red , blue )"
        },
        b6: {
            //background : " linear-gradient(to left ,red , blue )",
            background :  "blue",

        },
        b7: {
            background : "red"
        },
        b8: {
        background : "green",
            borderTopRightRadius:'30%',
            borderBottomRightRadius:'30%',
    },



}));

const mafct = () => {
alert('hello')
}
export default function TableauMeteo() {
    const classes = useStyles();
    const [color, {setCouleur}] = useState('blue');
    return (
        <>
            <Box display="flex" justifyContent="center">
                <Box border={1} {...defaultProps} className={classes.b1} bgcolor={color}> B1</Box>
                <Box border={1} {...defaultProps} className={classes.b2} > B2</Box>
                <Box border={1} {...defaultProps} className={classes.b3} > B3</Box>
                <Box border={1} {...defaultProps} className={classes.b4} > B4</Box>
                <Box border={1} {...defaultProps2} className={classes.b5}> B5</Box>
                <Box border={1} {...defaultProps} className={classes.b6} > B6</Box>
                <Box border={1} {...defaultProps2} className={classes.b7} onMouseOver={mafct}> B7</Box>
                <Box border={1} {...defaultProps} className={classes.b8} onMouseOver={mafct}> B8</Box>
                <Bouton/>
                <Bouton/>
                <Bouton/>
                <Bouton/>
                <Bouton/>
             </Box>
        </>
    );
}

function Bouton() {
    const classes = useStyles();
    return (
        <div>
            <Button variant="contained"  size="small"  className={classes.margin} >
                |
            </Button>
        </div>
    );
}

