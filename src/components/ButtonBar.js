import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        color : 'black',
        backgroundColor : 'grey',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function ButtonBar() {
    const classes = useStyles();

    return (
        <div>
            <ButtonColor/>
            <ButtonColor/>
            <ButtonColor/>
            <ButtonColor/>
        </div>
    );
}

function ButtonColor() {
    const classes = useStyles();
    return (
        <div>
            <Button variant="contained" size="small"  className={classes.margin}>
                |
            </Button>
        </div>
    );
}
