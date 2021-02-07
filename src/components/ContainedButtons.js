import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const ContainedButtons = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button 
            variant="contained" 
            color="primary"
            onClick={() => props.punchMethod()}>
                {props.text}
            </Button>
        </div>
    )
}

export default ContainedButtons
