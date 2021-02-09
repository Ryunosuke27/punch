import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

//ボタンの色を定義
const theme = createMuiTheme({
    palette: {
      primary: orange,
    },
  });
//ボタンのスタイルを定義
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        display:'inline-bolck',
        fontSize:'2em',
    }
}));

const ContainedButtons = (props) => {
    const classes = useStyles();
    const [state, isActive] = useState(true)

    const onClickEvent = () =>{
        props.punchMethod();
        isActive(false);
    }

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                {state ? (
            <Button 
                className={classes.button}
                variant="contained" 
                color="primary"
                onClick={onClickEvent}
            >
                {props.text}
            </Button>
                ):(
            <Button 
                className={classes.button}
                variant="contained" 
                color="primary"
                disabled
            >
                {props.text}
            </Button>
                    )}
            </ThemeProvider>
        </div>
    )
}

export default ContainedButtons
